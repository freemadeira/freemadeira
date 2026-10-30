import { feed, listPosts } from "@freemadeira/blog";
import { toLocale } from "@freemadeira/i18n";
import type { APIRoute } from "astro";

import { readBlog, SITE } from "@/lib/blog";
import { m } from "@/paraglide/messages.js";

/** The blog's RSS feed, in the locale of the path it's served at. */
export const blogFeed: APIRoute = async ({ currentLocale, site, url }) => {
  const locale = toLocale(currentLocale);
  const posts = await readBlog(
    (db) => listPosts(db, SITE, locale, { limit: 50 }),
    []
  );
  const xml = feed({
    description: m.blog_description({}, { locale }),
    locale,
    posts,
    site: (site ?? url).origin,
    title: m.blog_feed_title({}, { locale }),
  });
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
