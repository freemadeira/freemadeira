import { defaultLocale } from "@freemadeira/i18n";
import type { Locale, LocalizedPaths } from "@freemadeira/i18n";

/** Every site's blog is at /blog, in the default locale, and /<locale>/blog in the others. */
export function blogPath(locale: Locale): string {
  return locale === defaultLocale ? "/blog" : `/${locale}/blog`;
}

export const blogPaths: LocalizedPaths = {
  en: blogPath("en"),
  pt: blogPath("pt"),
};

export function postPath(locale: Locale, slug: string): string {
  return `${blogPath(locale)}/${slug}`;
}

export function feedPath(locale: Locale): string {
  return `${blogPath(locale)}/rss.xml`;
}
