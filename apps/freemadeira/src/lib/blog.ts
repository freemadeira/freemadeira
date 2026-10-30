import { bylines, findPost, postPath, translations } from "@freemadeira/blog";
import type { Post, Profile } from "@freemadeira/blog";
import { createDb } from "@freemadeira/db";
import type { Db, Site } from "@freemadeira/db";
import type { Locale } from "@freemadeira/i18n";
import { LIBSQL_AUTH_TOKEN, LIBSQL_URL } from "astro:env/server";

/** This site's rows in the database every site shares. */
export const SITE: Site = "freemadeira";

let client: Db | undefined;

/**
 * The blog's database, written by the indexer. Undefined where there's none
 * (a deployment without LIBSQL_URL): the blog is then empty, not broken.
 */
export function blogDb(): Db | undefined {
  if (!LIBSQL_URL) {
    return undefined;
  }
  client ??= createDb({ authToken: LIBSQL_AUTH_TOKEN, url: LIBSQL_URL });
  return client;
}

/** "October 28, 2026" or "28 de outubro de 2026", Madeira time, like events. */
export function postDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "pt" ? "pt-PT" : "en-US", {
    dateStyle: "long",
    timeZone: "Atlantic/Madeira",
  });
}

/** "Ana and Rui", or "Ana e Rui". */
export function names(list: string[], locale: Locale): string {
  return new Intl.ListFormat(locale === "pt" ? "pt-PT" : "en", {
    type: "conjunction",
  }).format(list);
}

export type PostPage =
  | {
      type: "post";
      post: Post;
      /** The people it's from who have a name to show. */
      authors: Profile[];
      /** Its slug in each language it's published in. */
      slugs: Partial<Record<Locale, string>>;
    }
  | { type: "moved"; path: string }
  | { type: "missing" };

/**
 * What a post's page shows: the post, where it moved to when the slug is an
 * old one, or nothing. The page answers 301 or 404 from it before rendering.
 */
export async function postPage(
  locale: Locale,
  slug: string
): Promise<PostPage> {
  const db = blogDb();
  const found = db ? await findPost(db, SITE, locale, slug) : undefined;
  if (!(db && found)) {
    return { type: "missing" };
  }
  if (found.type === "moved") {
    return { path: postPath(locale, found.slug), type: "moved" };
  }
  const [slugs, people] = await Promise.all([
    translations(db, SITE, found.post.postId),
    bylines(db, found.post.authors),
  ]);
  return {
    authors: people.filter((person) => person.name),
    post: found.post,
    slugs,
    type: "post",
  };
}
