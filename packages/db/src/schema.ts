/**
 * The read model of what editors publish from freehub, written by the indexer.
 * The team relay holds the truth: dropping every table and replaying the relay
 * rebuilds this.
 */
import {
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

/** All sites share the database, and rows say which site they belong to. */
export const sites = ["freemadeira", "bitcoinatlantis"] as const;

export type Site = (typeof sites)[number];

/** An uploaded image: its largest size, and every size for `srcset`. */
export interface PostImage {
  alt: string;
  height: number;
  srcset: string;
  url: string;
  width: number;
}

/**
 * One language version of a published post, from its newest kind 30023 event
 * by a member of the project the site's blog comes from.
 */
export const posts = sqliteTable(
  "posts",
  {
    /** Pubkeys of the people the post is from. */
    authors: text("authors", { mode: "json" }).$type<string[]>().notNull(),
    cover: text("cover", { mode: "json" }).$type<PostImage>(),
    eventId: text("event_id").notNull(),
    /** Sanitized, ready to put in the page. */
    html: text("html").notNull(),
    locale: text("locale").notNull(),
    /** The same for every language version of the post. */
    postId: text("post_id").notNull(),
    publishedAt: integer("published_at", { mode: "timestamp" }).notNull(),
    readingMinutes: integer("reading_minutes").notNull(),
    site: text("site").$type<Site>().notNull(),
    slug: text("slug").notNull(),
    summary: text("summary").notNull(),
    title: text("title").notNull(),
    topics: text("topics", { mode: "json" }).$type<string[]>().notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.site, table.postId, table.locale] }),
    uniqueIndex("posts_slug").on(table.site, table.locale, table.slug),
    index("posts_published").on(table.site, table.locale, table.publishedAt),
  ]
);

/** Slugs a post had before, so old links redirect to it. */
export const slugHistory = sqliteTable(
  "slug_history",
  {
    locale: text("locale").notNull(),
    postId: text("post_id").notNull(),
    site: text("site").$type<Site>().notNull(),
    slug: text("slug").notNull(),
  },
  (table) => [primaryKey({ columns: [table.site, table.locale, table.slug] })]
);

/** Names and pictures for bylines, from each author's kind 0 profile. */
export const profiles = sqliteTable("profiles", {
  name: text("name"),
  nip05: text("nip05"),
  picture: text("picture"),
  pubkey: text("pubkey").primaryKey(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});
