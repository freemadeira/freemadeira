import { OpeningDoorsPanel } from "./panels/opening-doors-panel";
import { OptionsPanel } from "./panels/options-panel";
import { SupportPanel } from "./panels/support-panel";

// The inside face, read left to right as one spread once fully unfolded.
export function InsideFaceSheet() {
  return (
    <div className="sheet sheet--inside">
      <OpeningDoorsPanel />
      <OptionsPanel />
      <SupportPanel />
    </div>
  );
}
