import { BackCoverPanel } from "./panels/back-cover-panel";
import { CoverPanel } from "./panels/cover-panel";
import { FastPathPanel } from "./panels/fast-path-panel";

// Standard letter-fold outside face: flap (Panel 5) LEFT, back (Panel 6) middle, cover
// (Panel 1) RIGHT. The flap is the narrow column because it folds in first. Its reverse is
// SupportPanel, the narrow right column of the inside face.
// An earlier build had cover and flap swapped (cover left); Zapa corrected it 2026-10-06.
// The flap position carries FastPathPanel ("Start in minutes"), swapped in the same pass.
export function OutsideFaceSheet() {
  return (
    <div className="sheet sheet--outside">
      <FastPathPanel />
      <BackCoverPanel />
      <CoverPanel />
    </div>
  );
}
