import { schema } from "@freemadeira/db";
import type { Db, Site } from "@freemadeira/db";
import type { Locale } from "@freemadeira/i18n";
import type { NostrEvent } from "applesauce-core/helpers/event";
import { and, eq, inArray } from "drizzle-orm";
import type { BatchItem } from "drizzle-orm/batch";

import { newer } from "./posts.ts";
import type { PostVersion } from "./posts.ts";
import { readingMinutes, renderArticle } from "./render.ts";

const { posts, profiles, slugHistory } = schema;

/** A language version of a post whose page changed, under each slug it had. */
export interface Change {
  postId: string;
  locale: Locale;
  slugs: string[];
}

function postRow(site: Site, version: PostVersion): typeof posts.$inferInsert {
  return {
    authors: version.authors,
    cover: version.cover,
    eventId: version.event.id,
    html: renderArticle(version.markdown, version.images),
    locale: version.locale,
    postId: version.postId,
    publishedAt: version.publishedAt,
    readingMinutes: readingMinutes(version.markdown),
    site,
    slug: version.slug,
    summary: version.summary,
    title: version.title,
    topics: version.topics,
    updatedAt: version.updatedAt,
  };
}

function key(postId: string, locale: string): string {
  return `${postId}/${locale}`;
}

/**
 * Brings a site's posts in the database in line with the versions that should
 * show, in one transaction, and says what changed.
 */
export async function syncPosts(
  db: Db,
  site: Site,
  versions: PostVersion[]
): Promise<Change[]> {
  const stored = await db
    .select({
      eventId: posts.eventId,
      locale: posts.locale,
      postId: posts.postId,
      slug: posts.slug,
    })
    .from(posts)
    .where(eq(posts.site, site));
  const before = new Map(
    stored.map((row) => [key(row.postId, row.locale), row])
  );
  const wanted = new Map(
    versions.map((version) => [key(version.postId, version.locale), version])
  );
  const changes: Change[] = [];
  const statements: BatchItem<"sqlite">[] = [];

  // Rows on their way out or about to change go first, so a slug one post
  // gives up is free for another in the same transaction.
  for (const [id, row] of before) {
    const version = wanted.get(id);
    if (version?.event.id === row.eventId) {
      continue;
    }
    statements.push(
      db
        .delete(posts)
        .where(
          and(
            eq(posts.site, site),
            eq(posts.postId, row.postId),
            eq(posts.locale, row.locale)
          )
        )
    );
    if (!version) {
      changes.push({
        locale: row.locale as Locale,
        postId: row.postId,
        slugs: [row.slug],
      });
    }
  }

  for (const [id, version] of wanted) {
    const row = before.get(id);
    if (row?.eventId === version.event.id) {
      continue;
    }
    const { locale, postId, slug } = version;
    statements.push(
      db.insert(posts).values(postRow(site, version)),
      // A slug that's a post again stops redirecting.
      db
        .delete(slugHistory)
        .where(
          and(
            eq(slugHistory.site, site),
            eq(slugHistory.locale, locale),
            eq(slugHistory.slug, slug)
          )
        )
    );
    // Old slugs redirect: the ones the post says it had, which survive a
    // rebuild, and the one it had here until now.
    const moved = row && row.slug !== slug ? row.slug : undefined;
    const oldSlugs = [
      ...new Set([...version.oldSlugs, ...(moved ? [moved] : [])]),
    ];
    for (const old of oldSlugs) {
      statements.push(
        db
          .insert(slugHistory)
          .values({ locale, postId, site, slug: old })
          .onConflictDoUpdate({
            set: { postId },
            target: [slugHistory.site, slugHistory.locale, slugHistory.slug],
          })
      );
    }
    changes.push({ locale, postId, slugs: [slug, ...oldSlugs] });
  }

  const [first, ...rest] = statements;
  if (first) {
    await db.batch([first, ...rest]);
  }
  return changes;
}

interface ProfileContent {
  display_name?: unknown;
  name?: unknown;
  nip05?: unknown;
  picture?: unknown;
}

function text(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

type ProfileFields = Pick<
  typeof profiles.$inferSelect,
  "name" | "nip05" | "picture"
>;

function newestProfiles(events: NostrEvent[]): Map<string, NostrEvent> {
  const newest = new Map<string, NostrEvent>();
  for (const event of events) {
    const current = newest.get(event.pubkey);
    if (event.kind === 0 && (!current || newer(event, current))) {
      newest.set(event.pubkey, event);
    }
  }
  return newest;
}

function profileFields(event: NostrEvent): ProfileFields {
  let content: ProfileContent = {};
  try {
    content = JSON.parse(event.content) as ProfileContent;
  } catch {
    // A profile that isn't JSON says nothing.
  }
  return {
    name: text(content.display_name) ?? text(content.name),
    nip05: text(content.nip05),
    picture: text(content.picture),
  };
}

function sameFields(a: ProfileFields, b: ProfileFields): boolean {
  return a.name === b.name && a.picture === b.picture && a.nip05 === b.nip05;
}

/** Pubkeys with no profile yet, or one older than `maxAge` milliseconds. */
export async function staleProfiles(
  db: Db,
  pubkeys: string[],
  maxAge: number
): Promise<string[]> {
  if (pubkeys.length === 0) {
    return [];
  }
  const rows = await db
    .select({ pubkey: profiles.pubkey, updatedAt: profiles.updatedAt })
    .from(profiles)
    .where(inArray(profiles.pubkey, pubkeys));
  const fresh = new Set(
    rows
      .filter((row) => Date.now() - row.updatedAt.getTime() < maxAge)
      .map((row) => row.pubkey)
  );
  return pubkeys.filter((pubkey) => !fresh.has(pubkey));
}

/**
 * Stores the newest profile of each of `pubkeys` found in `events`, and says
 * whose name, picture or address is new or changed. Everyone asked about is marked
 * fresh, found or not, so a missing profile isn't asked for on every pass.
 */
export async function syncProfiles(
  db: Db,
  pubkeys: string[],
  events: NostrEvent[]
): Promise<string[]> {
  const found = newestProfiles(events);
  const stored = pubkeys.length
    ? await db.select().from(profiles).where(inArray(profiles.pubkey, pubkeys))
    : [];
  const before = new Map(stored.map((row) => [row.pubkey, row]));
  const changed: string[] = [];
  const now = new Date();
  const statements: BatchItem<"sqlite">[] = [];
  for (const pubkey of pubkeys) {
    const old = before.get(pubkey);
    const event = found.get(pubkey);
    // Without a profile this time, keep what was found before.
    const row = event
      ? profileFields(event)
      : {
          name: old?.name ?? null,
          nip05: old?.nip05 ?? null,
          picture: old?.picture ?? null,
        };
    if (old ? !sameFields(old, row) : event !== undefined) {
      changed.push(pubkey);
    }
    statements.push(
      db
        .insert(profiles)
        .values({ ...row, pubkey, updatedAt: now })
        .onConflictDoUpdate({
          set: { ...row, updatedAt: now },
          target: profiles.pubkey,
        })
    );
  }
  const [first, ...rest] = statements;
  if (first) {
    await db.batch([first, ...rest]);
  }
  return changed;
}

/** Empties every table, for a rebuild from the relay. */
export async function clear(db: Db): Promise<void> {
  await db.batch([
    db.delete(posts),
    db.delete(slugHistory),
    db.delete(profiles),
  ]);
}
