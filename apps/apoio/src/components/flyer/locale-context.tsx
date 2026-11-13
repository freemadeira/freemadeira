import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { DEFAULT_LOCALE } from "@/data/flyer/content";
import type { FlyerContent, Locale } from "@/data/flyer/content";
import { CONTENT_BY_LOCALE } from "@/data/flyer/locales";

interface LocaleContextValue {
  /** The flyer's language, which the viewer picks. */
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: FlyerContent;
  /** The page's language, for the controls around the flyer. */
  pageLocale: Locale;
  page: FlyerContent;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initial = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  initial?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initial);

  const value = useMemo<LocaleContextValue>(
    () => ({
      content: CONTENT_BY_LOCALE[locale],
      locale,
      page: CONTENT_BY_LOCALE[initial],
      pageLocale: initial,
      setLocale,
    }),
    [initial, locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

// The copy in the locale the viewer picked.
export function useContent(): FlyerContent {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useContent must be used within a LocaleProvider");
  }
  return ctx.content;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
