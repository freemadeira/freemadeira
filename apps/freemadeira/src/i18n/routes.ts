import type { LocalizedPaths } from "@freemadeira/i18n";

/** Every page's path per locale. A new page gets its entry here first. */
export const routes = {
  about: { en: "/en/about", pt: "/sobre" },
  diplomaBitcoin: {
    en: "/en/education/info-diploma-bitcoin",
    pt: "/educacao/info-diploma-bitcoin",
  },
  home: { en: "/en", pt: "/" },
  madeira: { en: "/en/madeira", pt: "/madeira" },
  newsletter: { en: "/en/newsletter", pt: "/newsletter" },
  partnerships: { en: "/en/partnerships", pt: "/parcerias" },
  team: {
    en: "/en/team-and-advisory-board",
    pt: "/equipa-e-conselho-consultivo",
  },
} as const satisfies Record<string, LocalizedPaths>;

export type Route = keyof typeof routes;

/**
 * The preferences page linked from newsletter emails. It has a subscriber's
 * email and token in its path, so it lives outside the static map.
 */
export function newsletterPreferencesPaths(
  email: string,
  token: string
): LocalizedPaths {
  const params = `${encodeURIComponent(email)}/${encodeURIComponent(token)}`;
  return {
    en: `/en/newsletter/preferences/${params}`,
    pt: `/newsletter/preferencias/${params}`,
  };
}
