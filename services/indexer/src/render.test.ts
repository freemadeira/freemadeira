import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { PostImage } from "@freemadeira/db";

import { readingMinutes, renderArticle } from "./render.ts";

const none = new Map<string, PostImage>();

describe("renderArticle", () => {
  it("breaks the line on a single newline, as freehub's editor shows it", () => {
    assert.equal(renderArticle("one\ntwo", none), "<p>one<br />two</p>\n");
  });

  it("keeps raw HTML as text", () => {
    const html = renderArticle(
      '<script>alert("x")</script>\n\nhi <b>there</b>',
      none
    );
    assert.doesNotMatch(html, /<script|<b>/u);
    assert.match(html, /&lt;b&gt;there&lt;\/b&gt;/u);
  });

  it("makes an h1 an h2, since the title is the page's h1", () => {
    assert.equal(
      renderArticle("# Big\n\n### Small", none),
      "<h2>Big</h2>\n<h3>Small</h3>\n"
    );
  });

  it("drops links that aren't web or mail addresses", () => {
    const html = renderArticle(
      "[x](javascript:alert(1)) [y](https://ok.example)",
      none
    );
    assert.doesNotMatch(html, /javascript/u);
    assert.match(
      html,
      /<a href="https:\/\/ok.example" rel="noopener noreferrer">y<\/a>/u
    );
  });

  it("makes an image on its own line a figure, with every size", () => {
    const url = "https://media.example/1920.webp";
    const images = new Map<string, PostImage>([
      [
        url,
        {
          alt: "Fallback",
          height: 1080,
          srcset: `https://media.example/640.webp 640w, ${url} 1920w`,
          url,
          width: 1920,
        },
      ],
    ]);
    const html = renderArticle(`![A beach](${url} "At sunset")`, images);
    assert.match(html, /^<figure><img /u);
    assert.match(html, /alt="A beach"/u);
    assert.match(
      html,
      /srcset="https:\/\/media.example\/640.webp 640w, https:\/\/media.example\/1920.webp 1920w"/u
    );
    assert.match(html, /width="1920"/u);
    assert.match(html, /<figcaption>At sunset<\/figcaption><\/figure>/u);
  });

  it("keeps tables, quotes and code", () => {
    const html = renderArticle(
      "| a | b |\n| - | - |\n| 1 | 2 |\n\n> said\n\n```js\nx()\n```",
      none
    );
    assert.match(html, /<table>/u);
    assert.match(html, /<blockquote>/u);
    assert.match(html, /<pre><code class="language-js">/u);
  });
});

describe("readingMinutes", () => {
  it("is at least one", () => {
    assert.equal(readingMinutes("short"), 1);
    assert.equal(readingMinutes("word ".repeat(1000)), 5);
  });
});
