import { cn } from "cn";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import "./flyer.css";

import { LOCALES } from "@/data/flyer/content";
import type { Locale } from "@/data/flyer/content";

import { InsideFaceSheet } from "./inside-face-sheet";
import { LocaleProvider, useLocale } from "./locale-context";
import { OutsideFaceSheet } from "./outside-face-sheet";
import { UnfoldingBrochure } from "./unfolding-brochure";

const PRINT_LABEL = {
  de: "Drucken",
  en: "Print",
  fr: "Imprimer",
  pt: "Imprimir",
} as const;

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <fieldset className="language-switcher" aria-label="Language">
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

// Screen: the unfolding preview and a print button. The two print sheets are 297mm wide, wider
// than the site's content column, so they are rendered straight under <body> (a portal) and the
// print stylesheet in the page hides everything else. They never show on screen (.sheet).
// The print root is only there in the browser; the server render has none.
// The body never changes, so there is nothing to subscribe to.
// eslint-disable-next-line no-empty-function
const subscribeNothing = () => () => {};

export function FlyerViewer({ initial }: { initial?: Locale }) {
  const printRoot = useSyncExternalStore(
    subscribeNothing,
    () => document.body,
    () => null
  );

  return (
    <LocaleProvider initial={initial}>
      <div className="apoio-flyer">
        <div className="viewer">
          <LanguageSwitcher />
          <UnfoldingBrochure />
          <PrintButton />
        </div>
      </div>
      {printRoot &&
        createPortal(
          <div className="apoio-flyer apoio-print-root">
            <div className="viewer">
              <OutsideFaceSheet />
              <InsideFaceSheet />
            </div>
          </div>,
          printRoot
        )}
    </LocaleProvider>
  );
}
