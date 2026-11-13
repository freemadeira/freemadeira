import { BackCoverPanel } from "./panels/back-cover-panel";
import { CoverPanel } from "./panels/cover-panel";
import { FastPathPanel } from "./panels/fast-path-panel";

// The outside face of a letter fold, left to right: the flap, the back cover and
// the front cover. The flap is the narrow column because it folds in first; its
// reverse is SupportPanel, the narrow right column of the inside face.
export function OutsideFaceSheet() {
  return (
    <div className="sheet sheet--outside">
      <FastPathPanel />
      <BackCoverPanel />
      <CoverPanel />
    </div>
  );
}
