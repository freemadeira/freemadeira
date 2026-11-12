import { OpeningDoorsPanel } from "./panels/opening-doors-panel";
import { OptionsPanel } from "./panels/options-panel";
import { SupportPanel } from "./panels/support-panel";

// Panels 2-3-4, read left to right as one continuous spread once fully unfolded.
export function InsideFaceSheet() {
  return (
    <div className="sheet sheet--inside">
      <OpeningDoorsPanel />
      <OptionsPanel />
      <SupportPanel />
    </div>
  );
}
