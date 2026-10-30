/**
 * The indexer: reads the blog posts freehub publishes to the team relay,
 * keeps the ones each site's project members wrote, writes them to libSQL and
 * asks the site to render the changed pages again. See BLOG_PLAN.md.
 *
 *   node src/index.ts          run
 *   node src/index.ts key      make a Nostr key for it
 *   node src/index.ts projects list the relay's projects and their addresses, for SITES
 *   node src/index.ts rebuild  empty the tables first, then run
 */
import { createServer } from "node:http";

import { createDb } from "@freemadeira/db";
import type { Db } from "@freemadeira/db";
import { migrateDb } from "@freemadeira/db/migrate";
import type { NostrEvent } from "applesauce-core/helpers/event";
import type { Filter } from "applesauce-core/helpers/filter";
import { npubEncode, nsecEncode } from "applesauce-core/helpers/pointers";
import { PrivateKeySigner } from "applesauce-signers";
import { noop } from "rxjs";

import { loadConfig } from "./config.ts";
import type { IndexerConfig, SiteConfig } from "./config.ts";
import {
  newer,
  parseAddress,
  PROJECT_KIND,
  PUBLISHED_KIND,
  resolvePosts,
} from "./posts.ts";
import { errorMessage, fetchProfiles, TeamRelay } from "./relay.ts";
import { pagesToRevalidate, revalidate } from "./revalidate.ts";
import { clear, staleProfiles, syncPosts, syncProfiles } from "./store.ts";

/** How often the relay is read again, in case the live subscription missed something. */
const REFRESH_INTERVAL = 10 * 60_000;
/** Each read starts this many seconds before the last one did. */
const REFRESH_OVERLAP = 5 * 60;
/** Changes that arrive together are written together. */
const DEBOUNCE = 2000;
/** Bylines' names and pictures are looked up again once a day. */
const PROFILE_MAX_AGE = 24 * 60 * 60_000;

function siteFilters({ project }: SiteConfig): Filter[] {
  const address = parseAddress(project);
  if (!address) {
    return [];
  }
  return [
    { "#d": [address.d], authors: [address.pubkey], kinds: [PROJECT_KIND] },
    { "#a": [project], kinds: [PUBLISHED_KIND] },
  ];
}

function addressOf(event: NostrEvent): string {
  const d = event.tags.find(([name]) => name === "d")?.[1] ?? "";
  return `${event.kind}:${event.pubkey}:${d}`;
}

class Indexer {
  private readonly config: IndexerConfig;
  private readonly db: Db;
  private readonly relay: TeamRelay;
  /** The newest event at each address, as the relay keeps them. */
  private readonly events = new Map<string, NostrEvent>();
  private fetchedAt: number | undefined;
  private debounce: NodeJS.Timeout | undefined;
  private queue: Promise<void> = Promise.resolve();

  constructor(config: IndexerConfig, db: Db, relay: TeamRelay) {
    this.config = config;
    this.db = db;
    this.relay = relay;
  }

  get filters(): Filter[] {
    return this.config.sites.flatMap(siteFilters);
  }

  private add(event: NostrEvent): void {
    const address = addressOf(event);
    const current = this.events.get(address);
    if (!current || newer(event, current)) {
      this.events.set(address, event);
    }
  }

  /** A live event: written with whatever else arrives in the next moment. */
  receive(event: NostrEvent): void {
    this.add(event);
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => this.enqueue(() => this.sync()), DEBOUNCE);
  }

  /** Runs one task at a time, so two passes never write over each other. */
  enqueue(task: () => Promise<void>): Promise<void> {
    const guarded = async () => {
      try {
        await task();
      } catch (error) {
        console.error(`Indexing failed: ${errorMessage(error)}`);
      }
    };
    this.queue = this.queue.then(guarded);
    return this.queue;
  }

  /** Reads what's stored, from a little before the last read. */
  async refresh(): Promise<void> {
    const startedAt = Math.floor(Date.now() / 1000);
    const since =
      this.fetchedAt === undefined
        ? undefined
        : this.fetchedAt - REFRESH_OVERLAP;
    const pages = await Promise.all(
      this.filters.map((filter) =>
        this.relay.fetch(since === undefined ? filter : { ...filter, since })
      )
    );
    for (const event of pages.flat()) {
      this.add(event);
    }
    this.fetchedAt = startedAt;
  }

  private async profilesFor(pubkeys: string[]): Promise<string[]> {
    const stale = await staleProfiles(this.db, pubkeys, PROFILE_MAX_AGE);
    if (stale.length === 0) {
      return [];
    }
    const [team, elsewhere] = await Promise.all([
      this.relay.fetch({ authors: stale, kinds: [0] }),
      fetchProfiles(this.config.profileRelays, stale),
    ]);
    return await syncProfiles(this.db, stale, [...team, ...elsewhere]);
  }

  private async syncSite(site: SiteConfig): Promise<void> {
    const project = this.events.get(site.project);
    if (!project) {
      // Better to leave the blog as it is than to empty it on a partial read.
      console.error(`${site.site}: no project at ${site.project}; skipped.`);
      return;
    }
    const { posts, skipped } = resolvePosts(
      project,
      this.events.values(),
      site.locales
    );
    for (const { event, reason } of skipped) {
      console.warn(`${site.site}: left out ${event.id}: ${reason}.`);
    }
    const authors = [...new Set(posts.flatMap((post) => post.authors))];
    const changedProfiles = await this.profilesFor(authors);
    const changes = await syncPosts(this.db, site.site, posts);
    const paths = pagesToRevalidate(changes, posts, changedProfiles);
    if (changes.length > 0 || changedProfiles.length > 0) {
      console.log(
        `${site.site}: ${posts.length} posts; ${changes.length} changed, ${changedProfiles.length} bylines changed.`
      );
    }
    await revalidate(site.url, paths, this.config.revalidateToken);
  }

  async sync(): Promise<void> {
    for (const site of this.config.sites) {
      // oxlint-disable-next-line no-await-in-loop -- one site at a time keeps the logs readable
      await this.syncSite(site);
    }
  }
}

async function run(rebuild: boolean): Promise<void> {
  const config = loadConfig();
  const db = createDb(config.db);
  await migrateDb(db);
  if (rebuild) {
    await clear(db);
    console.log("Emptied the tables; rebuilding from the relay.");
  }
  if (!config.revalidateToken) {
    console.warn(
      "No REVALIDATE_TOKEN: pages show changes only when their cache expires."
    );
  }
  const pubkey = await config.signer.getPublicKey();
  const relay = new TeamRelay(config.relay, config.signer, pubkey);
  const indexer = new Indexer(config, db, relay);
  relay.start(indexer.filters, (event) => indexer.receive(event));

  // For the host's health check.
  const server = createServer((_request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" }).end("ok");
  });
  server.listen(config.port, () => {
    console.log(
      `Indexing ${config.sites.map((site) => site.site).join(", ")}; listening on ${config.port}.`
    );
  });

  const pass = () =>
    indexer.enqueue(async () => {
      await indexer.refresh();
      await indexer.sync();
    });
  await pass();
  const interval = setInterval(pass, REFRESH_INTERVAL);
  process.once("SIGTERM", () => {
    clearInterval(interval);
    server.close();
    relay.close();
    process.exit(0);
  });
}

/**
 * The projects on the relay with their addresses: what SITES and freehub's
 * `websites` need, which freehub doesn't show. Needs RELAY_URL and INDEXER_KEY.
 */
async function listProjects(): Promise<void> {
  const url = process.env.RELAY_URL?.trim();
  const key = process.env.INDEXER_KEY?.trim();
  if (!(url && key)) {
    throw new Error("Set RELAY_URL and INDEXER_KEY.");
  }
  const signer = PrivateKeySigner.fromKey(key);
  const relay = new TeamRelay(url, signer, await signer.getPublicKey());
  // The subscription opens the connection, and the relay's challenge logs in.
  relay.start([{ kinds: [PROJECT_KIND] }], noop);
  const newest = new Map<string, NostrEvent>();
  for (const event of await relay.fetch({ kinds: [PROJECT_KIND] })) {
    const address = addressOf(event);
    const current = newest.get(address);
    if (!current || newer(event, current)) {
      newest.set(address, event);
    }
  }
  relay.close();
  for (const [address, event] of newest) {
    if (!event.tags.some(([name]) => name === "deleted")) {
      const title = event.tags.find(([name]) => name === "title")?.[1];
      console.log(`${title?.trim() || "Untitled project"}
  ${address}`);
    }
  }
}

async function main(): Promise<void> {
  const [command] = process.argv.slice(2);
  if (command === "key") {
    // A new Nostr key for the indexer: whitelist the npub, keep the nsec secret.
    const signer = new PrivateKeySigner();
    console.log(`INDEXER_KEY=${nsecEncode(signer.key)}`);
    console.log(`npub: ${npubEncode(await signer.getPublicKey())}`);
    return;
  }
  if (command === "projects") {
    await listProjects();
    return;
  }
  if (command !== undefined && command !== "rebuild") {
    throw new Error(`Unknown command "${command}".`);
  }
  await run(command === "rebuild");
}

try {
  await main();
} catch (error) {
  console.error(errorMessage(error));
  process.exit(1);
}
