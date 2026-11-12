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

  it("makes a quote marked [!PULLQUOTE] a pull quote", () => {
    assert.equal(
      renderArticle(
        "Before.\n\n> [!PULLQUOTE]\n> The money does **both** jobs.  \n> At once.\n\nAfter.",
        none
      ),
      '<p>Before.</p>\n<blockquote class="pull-quote"><p>The money does <strong>both</strong> jobs.<br />At once.</p></blockquote>\n<p>After.</p>\n'
    );
  });

  it("reads the pull quote marker in any case, right after a line", () => {
    assert.match(
      renderArticle("Line\n> [!pullquote]\n> Loud.", none),
      /^<p>Line<\/p>\n<blockquote class="pull-quote"><p>Loud\.<\/p>/u
    );
  });

  it("leaves other quotes and alerts as quotes", () => {
    assert.equal(
      renderArticle("> [!NOTE]\n> A note.", none),
      "<blockquote>\n<p>[!NOTE]<br />A note.</p>\n</blockquote>\n"
    );
  });

  it("shows nothing for an empty pull quote", () => {
    assert.equal(
      renderArticle("> [!PULLQUOTE]\n\nText", none),
      "<p>Text</p>\n"
    );
  });

  it("marks ==text== as highlighted", () => {
    assert.equal(
      renderArticle("The sats ==stay **inside**== the loop.", none),
      "<p>The sats <mark>stay <strong>inside</strong></mark> the loop.</p>\n"
    );
  });

  it("needs text right inside the marks, as bold does", () => {
    for (const markdown of ["a == b == c", "== a ==", "===a===", "a ==b"]) {
      assert.doesNotMatch(renderArticle(markdown, none), /<mark>/u);
    }
    assert.match(renderArticle("==E=mc2==", none), /<mark>E=mc2<\/mark>/u);
  });

  it("reads an escaped = as text, inside a highlight or out", () => {
    assert.equal(
      renderArticle("==a\\===, ==\\=b==, ==c== \\=d, x\\=\\=y\\=\\=z", none),
      "<p><mark>a=</mark>, <mark>=b</mark>, <mark>c</mark> =d, x==y==z</p>\n"
    );
  });

  it("keeps a pull quote's spaces, as freehub does", () => {
    assert.match(
      renderArticle("> [!PULLQUOTE]\n>  spaced", none),
      /<p> spaced<\/p>/u
    );
  });

  it("keeps classes off everything else", () => {
    const html = renderArticle("```pull-quote\nx\n```\n\n> said", none);
    assert.doesNotMatch(html, /<blockquote class/u);
  });
});

describe("readingMinutes", () => {
  it("is at least one", () => {
    assert.equal(readingMinutes("short"), 1);
    assert.equal(readingMinutes("word ".repeat(1000)), 5);
  });

  it("counts the words of pull quotes and highlights, not their marks", () => {
    assert.equal(
      readingMinutes(`> [!PULLQUOTE]\n> ${"==word== ".repeat(200)}`),
      1
    );
    assert.equal(readingMinutes(`> [!PULLQUOTE]\n> ${"word ".repeat(300)}`), 2);
  });
});
