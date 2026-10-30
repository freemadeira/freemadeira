import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { NostrEvent } from "applesauce-core/helpers/event";

import { parseImeta, projectMembers, resolvePosts } from "./posts.ts";

const owner = "a".repeat(64);
const editor = "b".repeat(64);
const viewer = "c".repeat(64);
const stranger = "d".repeat(64);
const projectAddress = `30304:${owner}:p1`;
const locales = ["pt", "en"] as const;

const project: NostrEvent = {
  content: "",
  created_at: 1,
  id: "project",
  kind: 30_304,
  pubkey: owner,
  sig: "",
  tags: [
    ["d", "p1"],
    ["p", editor],
    ["p", viewer, "", "viewer"],
  ],
};

interface PostOptions {
  at?: number;
  by?: string;
  locale?: string;
  postId?: string;
  publishedAt?: string;
  slug?: string;
  extra?: string[][];
}

let counter = 0;

function post({
  at = 100,
  by = editor,
  extra = [],
  locale = "pt",
  postId = "abc",
  publishedAt = "50",
  slug = "ola",
}: PostOptions = {}): NostrEvent {
  counter += 1;
  return {
    content: "Texto",
    created_at: at,
    id: `e${String(counter).padStart(4, "0")}`,
    kind: 30_023,
    pubkey: by,
    sig: "",
    tags: [
      ["d", `${postId}-${locale}`],
      ["a", projectAddress],
      ["post", postId],
      ["L", "ISO-639-1"],
      ["l", locale, "ISO-639-1"],
      ["title", "Olá"],
      ["slug", slug],
      ["published_at", publishedAt],
      ...extra,
    ],
  };
}

describe("projectMembers", () => {
  it("counts the creator and p tags, but not viewers", () => {
    assert.deepEqual(
      [...projectMembers(project)].toSorted(),
      [owner, editor].toSorted()
    );
  });
});

describe("resolvePosts", () => {
  it("keeps the newest version by a member", () => {
    const old = post({ at: 100, by: owner, slug: "velho" });
    const current = post({ at: 200, by: editor, slug: "novo" });
    const { posts } = resolvePosts(project, [old, current], locales);
    assert.deepEqual(
      posts.map((item) => item.slug),
      ["novo"]
    );
  });

  it("ignores versions by viewers and strangers", () => {
    const { posts } = resolvePosts(
      project,
      [
        post({ at: 100 }),
        post({ at: 300, by: viewer, slug: "viewer" }),
        post({ at: 300, by: stranger, slug: "stranger" }),
      ],
      locales
    );
    assert.deepEqual(
      posts.map((item) => item.slug),
      ["ola"]
    );
  });

  it("ignores posts of another project", () => {
    const other = post();
    other.tags = other.tags.map((item) =>
      item[0] === "a" ? ["a", `30304:${owner}:other`] : item
    );
    assert.equal(resolvePosts(project, [other], locales).posts.length, 0);
  });

  it("drops a post whose newest version is unpublished", () => {
    const published = post({ at: 100 });
    const unpublished = post({ at: 200, by: owner, extra: [["deleted"]] });
    assert.equal(
      resolvePosts(project, [published, unpublished], locales).posts.length,
      0
    );
  });

  it("shows nothing without the project's event", () => {
    assert.equal(resolvePosts(undefined, [post()], locales).posts.length, 0);
  });

  it("gives a slug to the post published first", () => {
    const first = post({ postId: "one", publishedAt: "10", slug: "same" });
    const second = post({ postId: "two", publishedAt: "50", slug: "same" });
    const { posts, skipped } = resolvePosts(project, [second, first], locales);
    assert.deepEqual(
      posts.map((item) => item.postId),
      ["one"]
    );
    assert.equal(skipped[0]?.event, second);
  });

  it("skips a version whose d tag doesn't match its post and language", () => {
    const wrong = post();
    wrong.tags = wrong.tags.map((item) =>
      item[0] === "d" ? ["d", "abc-en"] : item
    );
    const { posts, skipped } = resolvePosts(project, [wrong], locales);
    assert.equal(posts.length, 0);
    assert.match(skipped[0]?.reason ?? "", /doesn't match/u);
  });

  it("skips languages the site doesn't have", () => {
    const { posts } = resolvePosts(project, [post({ locale: "fr" })], locales);
    assert.equal(posts.length, 0);
  });

  it("reads bylines, topics, the cover and the publication date", () => {
    const url = "https://media.example/1920.webp";
    const [version] = resolvePosts(
      project,
      [
        post({
          extra: [
            ["p", owner, "", "author"],
            ["t", "bitcoin"],
            ["t", "bitcoin"],
            ["image", url],
            [
              "imeta",
              `url ${url}`,
              "dim 1920x1080",
              "alt Capa",
              `srcset ${url} 1920w`,
            ],
          ],
        }),
      ],
      locales
    ).posts;
    assert.deepEqual(version?.authors, [owner]);
    assert.deepEqual(version?.topics, ["bitcoin"]);
    assert.equal(version?.cover?.alt, "Capa");
    assert.equal(version?.publishedAt.getTime(), 50_000);
  });

  it("reads the slugs a post had, except its current one", () => {
    const [version] = resolvePosts(
      project,
      [
        post({
          extra: [
            ["old_slug", "antigo"],
            ["old_slug", "antigo"],
            ["old_slug", "ola"],
            ["old_slug", "Not A Slug"],
          ],
        }),
      ],
      locales
    ).posts;
    assert.deepEqual(version?.oldSlugs, ["antigo"]);
  });

  it("credits whoever published it when no byline is set", () => {
    const [version] = resolvePosts(project, [post()], locales).posts;
    assert.deepEqual(version?.authors, [editor]);
  });
});

describe("parseImeta", () => {
  it("needs a url and dimensions", () => {
    assert.equal(parseImeta(["url https://x.example/a.webp"]), undefined);
    assert.deepEqual(
      parseImeta(["url https://x.example/a.webp", "dim 640x480"]),
      {
        alt: "",
        height: 480,
        srcset: "https://x.example/a.webp 640w",
        url: "https://x.example/a.webp",
        width: 640,
      }
    );
  });
});
