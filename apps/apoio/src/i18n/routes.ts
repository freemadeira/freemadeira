import type { LocalizedPaths } from "@freemadeira/i18n";

/** Every page's path per locale. A new page gets its entry here first. */
export const routes = {
  flyer: { en: "/en/flyer", pt: "/folheto" },
  home: { en: "/en", pt: "/" },
} as const satisfies Record<string, LocalizedPaths>;

export type Route = keyof typeof routes;

/** A page of the guide: a chapter, the FAQ or the glossary. */
export function guidePath(slug: string): string {
  return `/${slug}`;
}

/**
 * The guide is Portuguese only, so its pages have no English path; their
 * language link goes to the English home.
 */
export function guidePaths(slug: string): LocalizedPaths {
  return { en: routes.home.en, pt: guidePath(slug) };
}
