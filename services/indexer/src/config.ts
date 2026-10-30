import { sites } from "@freemadeira/db";
import type { Site } from "@freemadeira/db";
import { isLocale } from "@freemadeira/i18n";
import type { Locale } from "@freemadeira/i18n";
import { PrivateKeySigner } from "applesauce-signers";

import { parseAddress, PROJECT_KIND } from "./posts.ts";

/** A site whose blog comes from a freehub project. */
export interface SiteConfig {
  site: Site;
  /** The project's address, `30304:<creator>:<d>`: its members may publish. */
  project: string;
  /** The site's origin, like https://freemadeira.org, for revalidating pages. */
  url: string;
  locales: Locale[];
}

export interface IndexerConfig {
  signer: PrivateKeySigner;
  relay: string;
  /** Public relays to find bylines' profiles on, besides the team relay. */
  profileRelays: string[];
  sites: SiteConfig[];
  db: { url: string; authToken?: string };
  /** The sites' ISR bypass token. Without it, pages wait for their cache to expire. */
  revalidateToken?: string;
  port: number;
}

/** Where freehub looks people up, by default. */
const DEFAULT_PROFILE_RELAYS = [
  "wss://purplepag.es",
  "wss://profiles.nostr1.com",
  "wss://relay.damus.io",
];

export class ConfigError extends Error {
  override name = "ConfigError";
}

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new ConfigError(`Set ${name}.`);
  }
  return value;
}

function optional(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

function relayUrl(value: string, name: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new ConfigError(`${name} must be a relay address, like wss://…`);
  }
  const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  if (!(url.protocol === "wss:" || (local && url.protocol === "ws:"))) {
    throw new ConfigError(
      `${name} must start with wss:// (ws:// only for localhost).`
    );
  }
  return url.href;
}

function siteConfig(value: unknown, index: number): SiteConfig {
  const where = `SITES[${index}]`;
  if (typeof value !== "object" || value === null) {
    throw new ConfigError(`${where} must be an object.`);
  }
  const { locales, project, site, url } = value as Record<string, unknown>;
  if (!sites.some((known) => known === site)) {
    throw new ConfigError(`${where}.site must be one of ${sites.join(", ")}.`);
  }
  if (
    typeof project !== "string" ||
    parseAddress(project)?.kind !== PROJECT_KIND
  ) {
    throw new ConfigError(
      `${where}.project must be a project address, 30304:<pubkey>:<d>.`
    );
  }
  if (typeof url !== "string" || !URL.canParse(url)) {
    throw new ConfigError(`${where}.url must be the site's address.`);
  }
  if (
    !(Array.isArray(locales) && locales.length > 0 && locales.every(isLocale))
  ) {
    throw new ConfigError(
      `${where}.locales must list the site's locales, like ["pt", "en"].`
    );
  }
  return { locales, project, site: site as Site, url: new URL(url).origin };
}

function siteConfigs(value: string): SiteConfig[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(value);
  } catch {
    throw new ConfigError("SITES must be JSON.");
  }
  if (!Array.isArray(parsed)) {
    throw new ConfigError("SITES must be a JSON array.");
  }
  return parsed.map(siteConfig);
}

export function loadConfig(): IndexerConfig {
  let signer: PrivateKeySigner;
  try {
    signer = PrivateKeySigner.fromKey(required("INDEXER_KEY"));
  } catch (error) {
    if (error instanceof ConfigError) {
      throw error;
    }
    throw new ConfigError("INDEXER_KEY must be an nsec or a hex key.");
  }
  const profileRelays = optional("PROFILE_RELAYS");
  const port = Number(process.env.PORT ?? 3000);
  if (!Number.isInteger(port) || port <= 0) {
    throw new ConfigError("PORT must be a port number.");
  }
  return {
    db: {
      authToken: optional("LIBSQL_AUTH_TOKEN"),
      url: optional("LIBSQL_URL") ?? "http://127.0.0.1:8080",
    },
    port,
    profileRelays: profileRelays
      ? profileRelays
          .split(",")
          .map((url) => relayUrl(url.trim(), "PROFILE_RELAYS"))
      : DEFAULT_PROFILE_RELAYS,
    relay: relayUrl(required("RELAY_URL"), "RELAY_URL"),
    revalidateToken: optional("REVALIDATE_TOKEN"),
    signer,
    sites: siteConfigs(required("SITES")),
  };
}
