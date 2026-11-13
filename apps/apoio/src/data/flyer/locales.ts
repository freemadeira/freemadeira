import type { FlyerContent, Locale } from "./content";
import contentDe from "./content.de.ts";
import contentEn from "./content.en.ts";
import contentFr from "./content.fr.ts";
import contentPt from "./content.pt.ts";

export const CONTENT_BY_LOCALE: Record<Locale, FlyerContent> = {
  de: contentDe,
  en: contentEn,
  fr: contentFr,
  pt: contentPt,
};
