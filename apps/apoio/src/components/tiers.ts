import type { Page } from "@/data/types";

export type Tier = Page["tier"];

/**
 * Each page's "door" colour. The classes set `--tier` and `--tier-ink`, which
 * the header band, notes, widgets and doors read.
 */
export const tierVars: Record<Tier, string> = {
  agora: "[--tier-ink:#fff] [--tier:var(--color-bridal-700)]",
  balcao: "[--tier-ink:var(--color-dark)] [--tier:var(--color-primary-400)]",
  depois: "[--tier-ink:#fff] [--tier:var(--color-mountain-mist-700)]",
  extra: "[--tier-ink:#fff] [--tier:var(--color-dark)]",
};
