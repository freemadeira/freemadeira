import type { Page } from "@/data/types";

export type Tier = Page["tier"];

/**
 * Each page's colour. The classes set `--tier` (fills), `--tier-ink` (text on
 * a fill) and `--tier-text` (text on white, at least 4.5:1, which the yellow
 * fill isn't).
 */
export const tierVars: Record<Tier, string> = {
  agora:
    "[--tier-ink:#fff] [--tier-text:var(--color-bridal-700)] [--tier:var(--color-bridal-700)]",
  balcao:
    "[--tier-ink:var(--color-dark)] [--tier-text:var(--color-primary-700)] [--tier:var(--color-primary-400)]",
  depois:
    "[--tier-ink:#fff] [--tier-text:var(--color-mountain-mist-700)] [--tier:var(--color-mountain-mist-700)]",
  extra:
    "[--tier-ink:#fff] [--tier-text:var(--color-dark)] [--tier:var(--color-dark)]",
};

/** A pale tint of the page's colour; needs `tierVars` on an ancestor or itself. */
export const tierSoft = "bg-[color-mix(in_oklab,var(--tier)_12%,white)]";
