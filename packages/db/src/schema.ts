/**
 * The read model of what editors publish from freehub, written by the indexer.
 * The team relay holds the truth: dropping every table and replaying the relay
 * rebuilds this.
 */

/** All sites share the database, and rows say which site they belong to. */
export const sites = ["freemadeira", "bitcoinatlantis"] as const;

export type Site = (typeof sites)[number];
