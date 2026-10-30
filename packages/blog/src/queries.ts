import { schema } from "@freemadeira/db";
import type { Db, Site } from "@freemadeira/db";
import type { Locale } from "@freemadeira/i18n";
import { and, desc, eq, getTableColumns, inArray } from "drizzle-orm";

const { posts, profiles, slugHistory } = schema;

export type Post = typeof posts.$inferSelect;
export type PostSummary = Omit<Post, "html">;
export type Profile = typeof profiles.$inferSelect;

const { html: _html, ...summaryColumns } = getTableColumns(posts);

/** A site's posts in one language, newest first. */
export async function listPosts(
  db: Db,
  site: Site,
  locale: Locale,
  { limit = 100, offset = 0 } = {}
): Promise<PostSummary[]> {
  return await db
    .select(summaryColumns)
    .from(posts)
    .where(and(eq(posts.site, site), eq(posts.locale, locale)))
    .orderBy(desc(posts.publishedAt))
    .limit(limit)
    .offset(offset);
}

export type PostLookup =
  | { post: Post; type: "post" }
  | { slug: string; type: "moved" };

/**
 * The post at this slug, or the slug it moved to when the slug is an old one.
 * Undefined when neither is published.
 */
export async function findPost(
  db: Db,
  site: Site,
  locale: Locale,
  slug: string
): Promise<PostLookup | undefined> {
  const [post] = await db
    .select()
    .from(posts)
    .where(
      and(eq(posts.site, site), eq(posts.locale, locale), eq(posts.slug, slug))
    )
    .limit(1);
  if (post) {
    return { post, type: "post" };
  }
  const [moved] = await db
    .select({ slug: posts.slug })
    .from(slugHistory)
    .innerJoin(
      posts,
      and(
        eq(posts.site, slugHistory.site),
        eq(posts.locale, slugHistory.locale),
        eq(posts.postId, slugHistory.postId)
      )
    )
    .where(
      and(
        eq(slugHistory.site, site),
        eq(slugHistory.locale, locale),
        eq(slugHistory.slug, slug)
      )
    )
    .limit(1);
  return moved ? { slug: moved.slug, type: "moved" } : undefined;
}

/** The slug of each published language version of a post. */
export async function translations(
  db: Db,
  site: Site,
  postId: string
): Promise<Partial<Record<Locale, string>>> {
  const rows = await db
    .select({ locale: posts.locale, slug: posts.slug })
    .from(posts)
    .where(and(eq(posts.site, site), eq(posts.postId, postId)));
  return Object.fromEntries(rows.map((row) => [row.locale, row.slug]));
}

/** Profiles for a byline, in the order given; someone without one gets an empty profile. */
export async function bylines(db: Db, pubkeys: string[]): Promise<Profile[]> {
  if (pubkeys.length === 0) {
    return [];
  }
  const rows = await db
    .select()
    .from(profiles)
    .where(inArray(profiles.pubkey, pubkeys));
  const found = new Map(rows.map((row) => [row.pubkey, row]));
  return pubkeys.map(
    (pubkey) =>
      found.get(pubkey) ?? {
        name: null,
        nip05: null,
        picture: null,
        pubkey,
        updatedAt: new Date(0),
      }
  );
}
