import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { feed } from "./feed.ts";
import { blogPath, feedPath, postPath } from "./paths.ts";
import type { PostSummary } from "./queries.ts";

describe("paths", () => {
  it("puts the default language at the root and the others under their prefix", () => {
    assert.equal(blogPath("pt"), "/blog");
    assert.equal(postPath("en", "hello"), "/en/blog/hello");
    assert.equal(feedPath("pt"), "/blog/rss.xml");
  });
});

describe("feed", () => {
  it("lists posts with escaped text and absolute links", () => {
    const post: PostSummary = {
      authors: [],
      cover: null,
      eventId: "e",
      locale: "en",
      postId: "abc",
      publishedAt: new Date("2026-10-30T12:00:00Z"),
      readingMinutes: 1,
      site: "freemadeira",
      slug: "hello",
      summary: "Fish & chips <3",
      title: "Hello",
      topics: ["bitcoin"],
      updatedAt: new Date("2026-10-30T12:00:00Z"),
    };
    const xml = feed({
      description: "News",
      locale: "en",
      posts: [post],
      site: "https://freemadeira.org",
      title: "Blog",
    });
    assert.match(xml, /<link>https:\/\/freemadeira.org\/en\/blog<\/link>/u);
    assert.match(
      xml,
      /<link>https:\/\/freemadeira.org\/en\/blog\/hello<\/link>/u
    );
    assert.match(xml, /Fish &amp; chips &lt;3/u);
    assert.match(xml, /<pubDate>Fri, 30 Oct 2026 12:00:00 GMT<\/pubDate>/u);
    assert.match(xml, /<category>bitcoin<\/category>/u);
  });
});
