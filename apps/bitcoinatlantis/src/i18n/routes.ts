import type { LocalizedPaths } from "@freemadeira/i18n";

/** Every page's path per locale. A new page gets its entry here first. */
export const routes = {
  home: { en: "/en", pt: "/" },
} as const satisfies Record<string, LocalizedPaths>;

export type Route = keyof typeof routes;
