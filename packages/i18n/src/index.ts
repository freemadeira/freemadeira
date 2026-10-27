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
