import { fileURLToPath } from "node:url";

import { migrate } from "drizzle-orm/libsql/migrator";

import type { Db } from "./index.ts";

// Its own entry, so the sites' bundles never see a path on disk.
const migrationsFolder = fileURLToPath(
  new URL("../migrations", import.meta.url)
);

/** Brings the tables up to date with the schema, from `drizzle-kit generate`'s migrations. */
export async function migrateDb(db: Db): Promise<void> {
  await migrate(db, { migrationsFolder });
}
