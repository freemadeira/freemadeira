import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { NostrEvent } from "applesauce-core/helpers/event";

import type { PostVersion } from "./posts.ts";
import { pagesToRevalidate } from "./revalidate.ts";

function version(
  postId: string,
  locale: "pt" | "en",
  slug: string,
  authors: string[] = []
): PostVersion {
  return {
    authors,
    event: { id: `${postId}-${locale}` } as NostrEvent,
    images: new Map(),
    locale,
    markdown: "",
    oldSlugs: [],
    postId,
    publishedAt: new Date(0),
    slug,
    summary: "",
    title: "",
    topics: [],
    updatedAt: new Date(0),
  };
}

describe("pagesToRevalidate", () => {
  it("covers both slugs, the other languages, and the blog and feed", () => {
    const paths = pagesToRevalidate(
      [{ locale: "pt", postId: "one", slugs: ["novo", "velho"] }],
      [version("one", "pt", "novo"), version("one", "en", "new")],
      []
    );
    assert.deepEqual(paths, [
      "/blog",
      "/blog/novo",
      "/blog/rss.xml",
      "/blog/velho",
      "/en/blog/new",
    ]);
  });

  it("covers a renamed author's posts and the blogs listing them", () => {
    const paths = pagesToRevalidate(
      [],
      [version("one", "en", "hello", ["alice"]), version("two", "en", "other")],
      ["alice"]
    );
    assert.deepEqual(paths, ["/en/blog", "/en/blog/hello"]);
  });
});
