/**
 * Every site is Portuguese at the root and English under /en, with slugs
 * translated, so /sobre and /en/about are the same page.
 */
export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/**
 * The tag for <html lang>. hreflang uses the bare locale instead, so searches
 * in Brazilian Portuguese find the Portuguese pages too.
 */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-PT",
};

/** Each locale's name in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

/**
 * A page's path in each locale. Links, the language switcher, hreflang and the
 * language redirect all read the same map.
 */
export type LocalizedPaths = Record<Locale, string>;

export function isLocale(value: unknown): value is Locale {
  return locales.some((locale) => locale === value);
}

/** Astro.currentLocale, narrowed; pages outside the i18n routes get the default. */
export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/**
 * The sites used to be English-only, with no /en prefix. This maps each old
 * path to its English page, for Astro's `redirects` (a 301 on Vercel). A path
 * that is now a Portuguese page, like `/`, is left to that page.
 */
export function legacyRedirects(
  routes: Record<string, LocalizedPaths>
): Record<string, string> {
  const portuguese = new Set(Object.values(routes).map((paths) => paths.pt));
  const redirects: Record<string, string> = {};
  for (const paths of Object.values(routes)) {
    const legacy = paths.en.replace(/^\/en(?=\/|$)/u, "") || "/";
    if (!portuguese.has(legacy)) {
      redirects[legacy] = paths.en;
    }
  }
  return redirects;
}
