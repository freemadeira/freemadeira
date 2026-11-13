import type { LocalizedPaths } from "@freemadeira/i18n";

import type { GuideSlug } from "@/data/types";

/** Every page's path per locale. A new page gets its entry here first. */
export const routes = {
  flyer: { en: "/en/flyer", pt: "/folheto" },
  home: { en: "/en", pt: "/" },
} as const satisfies Record<string, LocalizedPaths>;

export type Route = keyof typeof routes;

/** A page of the guide: a chapter, the glossary or the FAQ. */
export function guidePath(slug: GuideSlug | "perguntas-frequentes"): string {
  return `/${slug}`;
}

/**
 * The guide is Portuguese only, so its pages have no English path; their
 * language link goes to the English home.
 */
export function guidePaths(
  slug: GuideSlug | "perguntas-frequentes"
): LocalizedPaths {
  return { en: routes.home.en, pt: guidePath(slug) };
}
