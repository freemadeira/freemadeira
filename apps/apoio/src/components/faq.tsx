import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";

/** A question, with a link to the guide page its answer comes from. */
export interface FaqItem {
  answer: string;
  category: string;
  page?: { href: string; title: string };
  question: string;
}

export interface FaqLabels {
  all: string;
  many: string;
  none: string;
  one: string;
  readMore: string;
  search: string;
  searchAll: string;
  searchLabel: string;
}

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036F]/gu, "")
    .toLowerCase();

const chip = (on: boolean) =>
  `shrink-0 rounded-full border px-3.5 py-1.5 text-sm whitespace-nowrap transition-[background-color,border-color,color,scale] duration-150 ease-out active:scale-[0.96] ${on ? "border-dark bg-dark text-white" : "border-mountain-mist-200 bg-white hover:border-mountain-mist-300 hover:bg-mountain-mist-50"}`;

interface Props {
  categories: readonly string[];
  items: FaqItem[];
  labels: FaqLabels;
}

export function Faq({ categories, items, labels }: Props) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("");
  const shown = useMemo(() => {
    const words = fold(query).split(/\s+/u).filter(Boolean);
    return items.filter(
      (item) =>
        (!cat || item.category === cat) &&
        words.every((w) => fold(`${item.question} ${item.answer}`).includes(w))
    );
  }, [items, query, cat]);

  return (
    <>
      <div className="relative my-3">
        <Search
          aria-hidden="true"
          className="text-mountain-mist-500 pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
          strokeWidth={1.75}
        />
        {/* The border is the field's only edge: mountain-mist-400 keeps it
            at 3:1 against white. */}
        <input
          className="border-mountain-mist-400 w-full rounded-xl border bg-white py-3 pr-4 pl-12"
          type="search"
          placeholder={labels.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={labels.searchLabel}
        />
      </div>
      {/* On a phone the topics scroll sideways rather than wrapping. */}
      <div className="no-scrollbar -mx-4 my-3 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <button
          type="button"
          aria-pressed={!cat}
          className={chip(!cat)}
          onClick={() => setCat("")}
        >
          {labels.all}
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
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
      {shown.length > 0 ? (
        <div className="mt-3 border-t border-black/8">
          {shown.map((item) => (
            <details
              key={item.question}
              className="group border-b border-black/8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg leading-snug font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className="text-mountain-mist-500 size-5 shrink-0 group-open:rotate-180 motion-safe:transition-[rotate] motion-safe:duration-200 motion-safe:ease-out"
                  strokeWidth={2}
                />
              </summary>
              <p className="mb-3 pr-9 text-pretty">{item.answer}</p>
              {item.page && (
                <p className="mb-4 pr-9">
                  <a
                    className="font-medium underline underline-offset-4"
                    href={item.page.href}
                  >
                    {labels.readMore} {item.page.title}
                  </a>
                </p>
              )}
            </details>
          ))}
        </div>
      ) : (
        <div className="my-4">
          {/* A topic can hide the answer: offer to look in all of them. */}
          {cat && (
            <button
              type="button"
              className="mb-3 underline underline-offset-2"
              onClick={() => setCat("")}
            >
              {labels.searchAll}
            </button>
          )}
          <p>{labels.none}</p>
        </div>
      )}
    </>
  );
}
