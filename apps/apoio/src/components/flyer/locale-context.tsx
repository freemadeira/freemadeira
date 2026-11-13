import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { DEFAULT_LOCALE } from "@/data/flyer/content";
import type { FlyerContent, Locale } from "@/data/flyer/content";
import { CONTENT_BY_LOCALE } from "@/data/flyer/locales";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: FlyerContent;
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
    () => ({ content: CONTENT_BY_LOCALE[locale], locale, setLocale }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

// Panels call this instead of importing named constants from data/content directly —
// same shape as before, just resolved for whichever locale is currently active.
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
