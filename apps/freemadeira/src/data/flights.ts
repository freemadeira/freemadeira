import type { Locale } from "@freemadeira/i18n";

/** Approximate times on a direct flight to Funchal. */
export const flights: { city: Record<Locale, string>; duration: string }[] = [
  { city: { en: "Lisbon", pt: "Lisboa" }, duration: "1h 50min" },
  { city: { en: "Porto", pt: "Porto" }, duration: "2h 00min" },
  { city: { en: "Madrid", pt: "Madrid" }, duration: "2h 25min" },
  { city: { en: "Paris", pt: "Paris" }, duration: "3h 40min" },
  { city: { en: "London", pt: "Londres" }, duration: "3h 50min" },
  { city: { en: "Zurich", pt: "Zurique" }, duration: "3h 55min" },
  { city: { en: "Frankfurt", pt: "Frankfurt" }, duration: "4h 05min" },
  { city: { en: "Amsterdam", pt: "Amesterdão" }, duration: "4h 10min" },
];
