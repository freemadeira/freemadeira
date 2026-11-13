import { useMemo, useState } from "react";

import { findPage } from "@/data";
import { FAQ, FAQ_CATS } from "@/data/faq";
import { guidePath } from "@/i18n/routes";

export interface FaqLabels {
  all: string;
  many: string;
  none: string;
  one: string;
  readMore: string;
  search: string;
  searchLabel: string;
}

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036F]/gu, "")
    .toLowerCase();

const chip = (on: boolean) =>
  `rounded-full border px-3 py-1 text-sm ${on ? "border-dark bg-dark text-white" : "border-mountain-mist-200 bg-white"}`;

export function Faq({ labels }: { labels: FaqLabels }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("");
  const shown = useMemo(() => {
    const words = fold(query).split(/\s+/u).filter(Boolean);
    return FAQ.filter(
      (e) =>
        (!cat || e.cat === cat) &&
        words.every((w) => fold(`${e.q} ${e.a}`).includes(w))
    );
  }, [query, cat]);

  return (
    <>
      <input
        className="border-mountain-mist-200 my-3 w-full rounded-md border bg-white px-4 py-3"
        type="search"
        placeholder={labels.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={labels.searchLabel}
      />
      <div className="my-3 flex flex-wrap gap-2">
        <button type="button" className={chip(!cat)} onClick={() => setCat("")}>
          {labels.all}
        </button>
        {FAQ_CATS.map((c) => (
          <button
            key={c}
            type="button"
            className={chip(cat === c)}
            onClick={() => setCat(cat === c ? "" : c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="text-mountain-mist-500 text-sm" aria-live="polite">
        {shown.length} {shown.length === 1 ? labels.one : labels.many}
      </p>
      {shown.map((e) => {
        const target = e.to ? findPage(e.to) : undefined;
        return (
          <details
            key={e.q}
            className="border-mountain-mist-200 my-3 border-y px-1"
          >
            <summary className="cursor-pointer py-3 text-lg font-bold">
              {e.q}
            </summary>
            <p className="mb-3">{e.a}</p>
            {target && (
              <p className="mb-3">
                <a className="underline" href={guidePath(target.slug)}>
                  {labels.readMore} {target.title}
                </a>
              </p>
            )}
          </details>
        );
      })}
      {shown.length === 0 && <p className="my-4">{labels.none}</p>}
    </>
  );
}
