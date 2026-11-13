import { cn } from "cn";
import { useEffect, useRef, useState } from "react";

import { useContent } from "./locale-context";
import { BackCoverPanel } from "./panels/back-cover-panel";
import { CoverPanel } from "./panels/cover-panel";
import { FastPathPanel } from "./panels/fast-path-panel";
import { OpeningDoorsPanel } from "./panels/opening-doors-panel";
import { OptionsPanel } from "./panels/options-panel";
import { SupportPanel } from "./panels/support-panel";

// What a merchant sees opening the folded flyer, checked against a paper
// mock-up: the cover; with the cover opened, the inside-left panel beside the
// flap; the whole inside; and the back, turned over. The print sheets use the
// same panels: outside face FastPath | BackCover | Cover, inside face
// OpeningDoors | Options | Support.
const STEPS = [
  { key: "cover", panels: [CoverPanel] },
  { key: "first-unfold", panels: [OpeningDoorsPanel, FastPathPanel] },
  {
    key: "fully-open",
    panels: [OpeningDoorsPanel, OptionsPanel, SupportPanel],
  },
  { key: "back", panels: [FastPathPanel, BackCoverPanel, CoverPanel] },
] as const;

// The stage is drawn at true paper size: 210mm tall, and 99mm per open panel.
const PX_PER_MM = 96 / 25.4;
const PANEL_WIDTH = 99 * PX_PER_MM;

export function UnfoldingBrochure() {
  const { brochureNextLabel, brochureOpenLabel, brochurePreviousLabel } =
    useContent();
  const [step, setStep] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const [available, setAvailable] = useState<number | null>(null);

  // Shrink the stage to the column it sits in, never enlarge it.
  useEffect(() => {
    const element = viewport.current;
    if (!element) {
      return;
    }
    const observer = new ResizeObserver(([entry]) => {
      setAvailable(entry?.contentRect.width ?? null);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const isFirst = step === 0;
  const isLast = step === STEPS.length - 1;

  function next() {
    if (!isLast) {
      setStep((s) => s + 1);
    }
  }
  function back() {
    if (!isFirst) {
      setStep((s) => s - 1);
    }
  }

  const current = STEPS[step] ?? STEPS[0];
  const stageWidth = PANEL_WIDTH * current.panels.length;
  // Every step is scaled by the widest one's factor, so the paper keeps a
  // steady size while it unfolds.
  const widest = PANEL_WIDTH * 3;
  const scale = available === null ? null : Math.min(1, available / widest);

  return (
    <div className="brochure">
      <div className="brochure-viewport" ref={viewport}>
        {/* Drawn once the column is measured, so it never shows at the wrong size. */}
        {scale !== null && (
          <div
            className={`brochure-stage brochure-stage--panels-${current.panels.length}`}
            key={current.key}
            style={
              {
                "--brochure-scale": scale,
                width: stageWidth,
              } as React.CSSProperties
            }
          >
            {current.panels.map((Panel) => (
              <div className="brochure-panel" key={Panel.name}>
                <Panel />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="brochure-controls">
        <button
          type="button"
          className="brochure-btn"
          onClick={back}
          disabled={isFirst}
          aria-label={brochurePreviousLabel}
        >
          ←
        </button>
        <div aria-hidden="true" className="brochure-dots">
          {STEPS.map((s, i) => (
            <span
              key={s.key}
              className={cn(
                "brochure-dot",
                i === step && "brochure-dot--active"
              )}
            />
          ))}
        </div>
        <output className="sr-only">{`${step + 1} / ${STEPS.length}`}</output>
        <button
          type="button"
          className="brochure-btn"
          onClick={next}
          disabled={isLast}
          // The first step's button reads "Open", which names it already.
          aria-label={isFirst ? undefined : brochureNextLabel}
        >
          {isFirst ? brochureOpenLabel : "→"}
        </button>
      </div>
    </div>
  );
}
