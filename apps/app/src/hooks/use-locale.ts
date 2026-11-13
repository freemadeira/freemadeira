import { defaultLocale, isLocale } from "@freemadeira/i18n";
import type { Locale } from "@freemadeira/i18n";
import { useLocales } from "expo-localization";

import { useHydrated } from "@/hooks/use-hydrated";

/**
 * The first of the device's preferred languages that the app speaks, or
 * Portuguese; Portuguese on the web until hydrated. Pass it to every message:
 * `m.app_name({}, { locale })`.
 */
export function useLocale(): Locale {
  const hydrated = useHydrated();
  const preferred = useLocales();
  if (!hydrated) {
    return defaultLocale;
  }
  return (
    preferred.map(({ languageCode }) => languageCode).find(isLocale) ??
    defaultLocale
  );
}
