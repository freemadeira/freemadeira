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
  searchLabel: string;
}

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036F]/gu, "")
    .toLowerCase();

const chip = (on: boolean) =>
  `rounded-full border px-3.5 py-1.5 text-sm transition-[background-color,border-color,color,scale] duration-150 ease-out active:scale-[0.96] ${on ? "border-dark bg-dark text-white" : "border-mountain-mist-200 bg-white hover:border-mountain-mist-300 hover:bg-mountain-mist-50"}`;

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
      <input
        className="border-mountain-mist-200 my-3 w-full rounded-md border bg-white px-4 py-3"
        type="search"
        placeholder={labels.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={labels.searchLabel}
      />
      <div className="my-3 flex flex-wrap gap-2">
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
        <div className="border-mountain-mist-200 mt-3 border-t">
          {shown.map((item) => (
            <details
              key={item.question}
              className="border-mountain-mist-200 border-b px-1"
            >
              <summary className="cursor-pointer py-3 text-lg font-bold">
                {item.question}
              </summary>
              <p className="mb-3">{item.answer}</p>
              {item.page && (
                <p className="mb-3">
                  <a className="underline" href={item.page.href}>
                    {labels.readMore} {item.page.title}
                  </a>
                </p>
              )}
            </details>
          ))}
        </div>
      ) : (
        <p className="my-4">{labels.none}</p>
      )}
    </>
  );
}
