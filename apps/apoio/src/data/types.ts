import type { ImageMetadata } from "astro";

export type Block =
  | { t: "p"; x: string }
  | { t: "h"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "note"; title: string; x: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "img"; src: ImageMetadata; alt: string; caption?: string }
  | {
      t: "widget";
      id: "inflation" | "timeline" | "chooser" | "triage" | "taps";
    };

export interface Page {
  slug: string;
  tier: "inicio" | "agora" | "balcao" | "depois" | "extra";
  num?: number;
  title: string;
  lead?: string;
  /** Group every "Caminho …" heading and what follows it into a collapsible section. */
  collapseSections?: boolean;
  blocks: Block[];
}
