import { createClient } from "@libsql/client/web";
import { drizzle } from "drizzle-orm/libsql/web";

import * as schema from "./schema.ts";

export interface DbConfig {
  /** sqld's address: http://127.0.0.1:8080 locally, https in production. */
  url: string;
  /** A JWT signed with sqld's key: read-only for the sites, read-write for the indexer. */
  authToken?: string;
}

/**
 * Talks to sqld over HTTP, which works from Vercel functions without a
 * connection pool.
 */
export function createDb(config: DbConfig) {
  return drizzle({ client: createClient(config), schema });
}

export type Db = ReturnType<typeof createDb>;

export * as schema from "./schema.ts";
