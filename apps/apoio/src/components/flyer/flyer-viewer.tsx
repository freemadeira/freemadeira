import { cn } from "cn";

import "./flyer.css";

import { LOCALES } from "@/data/flyer/content";
import type { Locale } from "@/data/flyer/content";

import { InsideFaceSheet } from "./inside-face-sheet";
import { LocaleProvider, useLocale } from "./locale-context";
import { OutsideFaceSheet } from "./outside-face-sheet";
import { UnfoldingBrochure } from "./unfolding-brochure";

const LANGUAGE_LABEL = {
  de: "Sprache des Flyers",
  en: "Flyer language",
  fr: "Langue du flyer",
  pt: "Língua do folheto",
} as const;

const PRINT_LABEL = {
  de: "Drucken",
  en: "Print",
  fr: "Imprimer",
  pt: "Imprimir",
} as const;

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <fieldset className="language-switcher" aria-label={LANGUAGE_LABEL[locale]}>
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={cn(
            "language-switcher-btn",
            l.code === locale && "language-switcher-btn--active"
          )}
          onClick={() => setLocale(l.code)}
          aria-pressed={l.code === locale}
        >
          {l.label}
        </button>
      ))}
    </fieldset>
  );
}

function PrintButton() {
  const { locale } = useLocale();
  return (
    <button
      type="button"
      className="brochure-btn flyer-print"
      onClick={() => window.print()}
    >
      {PRINT_LABEL[locale]}
    </button>
  );
}

// On screen, the unfolding preview and a print button; on paper, only the two
// sheets (.sheet), which the page's print styles give the full A4 width. They
// are in the server render, so the flyer prints before the island loads too.
export function FlyerViewer({ initial }: { initial?: Locale }) {
  return (
    <LocaleProvider initial={initial}>
      <div className="apoio-flyer">
        <div className="viewer">
          <LanguageSwitcher />
          <UnfoldingBrochure />
          <PrintButton />
          <OutsideFaceSheet />
          <InsideFaceSheet />
        </div>
      </div>
    </LocaleProvider>
  );
}
