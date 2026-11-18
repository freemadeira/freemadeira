import type { Block } from "@/data/types";

/** Text as an id: lower case, no accents, words joined by hyphens. */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/gu, "")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/gu, "-")
    .replaceAll(/^-|-$/gu, "");
}

/**
 * An id for each heading, by its index in the page's blocks, unique within
 * the page. The headings and the table of contents both read it.
 */
export function headingIds(blocks: Block[]): Map<number, string> {
  const ids = new Map<number, string>();
  const seen = new Map<string, number>();
  for (const [index, block] of blocks.entries()) {
    if (block.t === "h") {
      const base = slugify(block.x) || "secao";
      const count = (seen.get(base) ?? 0) + 1;
      seen.set(base, count);
      ids.set(index, count === 1 ? base : `${base}-${count}`);
    }
  }
  return ids;
}
