import { htmlLang } from "@freemadeira/i18n";
import type { Locale } from "@freemadeira/i18n";

import { blogPath, feedPath, postPath } from "./paths.ts";
import type { PostSummary } from "./queries.ts";

export interface FeedOptions {
  description: string;
  locale: Locale;
  posts: PostSummary[];
  /** The site's origin, like https://freemadeira.org. */
  site: string;
  title: string;
}

function escape(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** The blog's RSS 2.0 feed in one language. */
export function feed({
  description,
  locale,
  posts,
  site,
  title,
}: FeedOptions): string {
  const url = (path: string) => new URL(path, site).href;
  const items = posts.map((post) => {
    const link = url(postPath(locale, post.slug));
    const topics = post.topics.map(
      (topic) => `      <category>${escape(topic)}</category>`
    );
    return [
      "    <item>",
      `      <title>${escape(post.title)}</title>`,
      `      <link>${link}</link>`,
      `      <guid isPermaLink="false">${escape(`${post.postId}-${locale}`)}</guid>`,
      `      <pubDate>${post.publishedAt.toUTCString()}</pubDate>`,
      `      <description>${escape(post.summary)}</description>`,
      ...topics,
      "    </item>",
    ].join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escape(title)}</title>`,
    `    <link>${url(blogPath(locale))}</link>`,
    `    <description>${escape(description)}</description>`,
    `    <language>${htmlLang[locale]}</language>`,
    `    <atom:link href="${url(feedPath(locale))}" rel="self" type="application/rss+xml"/>`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}
