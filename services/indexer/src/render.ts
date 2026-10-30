import type { PostImage } from "@freemadeira/db";
import { Lexer, Marked } from "marked";
import type { Token, TokenizerExtension } from "marked";
import sanitizeHtml from "sanitize-html";

// freehub's Markdown, so a post reads on the site as it did in the editor:
// GFM, a single newline breaks the line, and raw HTML stays text, as written.
// The two extensions are copied from freehub's markdown-editor/content.ts.
const htmlBlockAsText: TokenizerExtension = {
  level: "block",
  name: "htmlBlockAsText",
  tokenizer(src) {
    const raw = Lexer.rules.block.gfm.html.exec(src)?.[0];
    if (!raw) {
      return;
    }
    const text = raw.trimEnd();
    return { raw, text, tokens: this.lexer.inline(text), type: "paragraph" };
  },
};

const htmlTagAsText: TokenizerExtension = {
  level: "inline",
  name: "htmlTagAsText",
  start: (src) => src.indexOf("<"),
  tokenizer(src) {
    const tag = Lexer.rules.inline.gfm.tag.exec(src)?.[0];
    return tag ? { raw: tag, text: tag, type: "text" } : undefined;
  },
};

/** Images fill the article's column on wide screens, and the screen on phones. */
const IMAGE_SIZES = "(min-width: 48rem) 48rem, 100vw";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function attributes(
  values: Record<string, string | number | undefined>
): string {
  return Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([name, value]) => ` ${name}="${escapeHtml(String(value))}"`)
    .join("");
}

/** An image with every size freehub uploaded, so phones load the small one. */
function imageTag(
  href: string,
  alt: string,
  images: Map<string, PostImage>,
  title?: string
): string {
  const image = images.get(href);
  return `<img${attributes({
    alt: alt || image?.alt || "",
    decoding: "async",
    height: image?.height,
    loading: "lazy",
    sizes: image ? IMAGE_SIZES : undefined,
    src: href,
    srcset: image?.srcset,
    title,
    width: image?.width,
  })}>`;
}

function onlyImage(tokens: Token[]): Token | undefined {
  const content = tokens.filter(
    (token) => !(token.type === "text" && !token.raw.trim())
  );
  return content.length === 1 && content[0]?.type === "image"
    ? content[0]
    : undefined;
}

function parser(images: Map<string, PostImage>): Marked {
  return new Marked({
    breaks: true,
    extensions: [htmlBlockAsText, htmlTagAsText],
    gfm: true,
    renderer: {
      // The post's title is the page's only h1.
      heading({ depth, tokens }) {
        const level = Math.max(depth, 2);
        return `<h${level}>${this.parser.parseInline(tokens)}</h${level}>\n`;
      },
      image({ href, text, title }) {
        return imageTag(href, text, images, title ?? undefined);
      },
      // An image on its own line is a figure, its Markdown title the caption.
      paragraph({ tokens }) {
        const image = onlyImage(tokens);
        if (image?.type !== "image") {
          return false;
        }
        const caption = image.title?.trim();
        return `<figure>${imageTag(image.href, image.text, images)}${
          caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""
        }</figure>\n`;
      },
    },
  });
}

const allowed: sanitizeHtml.IOptions = {
  allowProtocolRelative: false,
  allowedAttributes: {
    a: ["href", "title", "rel"],
    code: ["class"],
    img: [
      "alt",
      "decoding",
      "height",
      "loading",
      "sizes",
      "src",
      "srcset",
      "title",
      "width",
    ],
    ol: ["start"],
    td: ["align"],
    th: ["align"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowedTags: [
    "a",
    "blockquote",
    "br",
    "code",
    "del",
    "em",
    "figcaption",
    "figure",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "img",
    "li",
    "ol",
    "p",
    "pre",
    "strong",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "ul",
  ],
  transformTags: {
    // Links leave for other sites without handing them the page.
    a: (tagName, attribs) => ({
      attribs: /^https?:/iu.test(attribs.href ?? "")
        ? { ...attribs, rel: "noopener noreferrer" }
        : attribs,
      tagName,
    }),
  },
};

/** A post's Markdown as HTML that's safe to put in the page as it is. */
export function renderArticle(
  markdown: string,
  images: Map<string, PostImage>
): string {
  const html = parser(images).parse(markdown, { async: false });
  return sanitizeHtml(html, allowed);
}

/** At about 200 words a minute, and never less than one. */
export function readingMinutes(markdown: string): number {
  const words = markdown
    .replaceAll(/!\[[^\]]*\]\([^)]*\)/gu, " ")
    .replaceAll(/[#>*_`~|[\]()-]/gu, " ")
    .split(/\s+/u)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
