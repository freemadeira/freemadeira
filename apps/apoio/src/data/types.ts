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

/** Every page of the guide, by its path, so a link to one is checked. */
export type GuideSlug =
  | "bem-vindo"
  | "porque-aceitar"
  | "lightning-e-on-chain"
  | "escolher-a-solucao"
  | "receber-um-pagamento"
  | "pagamento-nao-chegou"
  | "quem-guarda-as-chaves"
  | "o-que-fazer-com-os-bitcoins"
  | "faturacao-e-impostos"
  | "dar-a-conhecer-o-negocio"
  | "praticar-e-glossario"
  | "wallet-of-satoshi-antiga"
  | "glossario";

export interface Page {
  slug: GuideSlug;
  tier: "agora" | "balcao" | "depois" | "extra";
  num?: number;
  title: string;
  lead?: string;
  /** Group every "Caminho …" heading and what follows it into a collapsible section. */
  collapseSections?: boolean;
  blocks: Block[];
}
