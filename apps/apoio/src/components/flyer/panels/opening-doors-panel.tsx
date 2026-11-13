import circularEconomyDiagram from "@/assets/images/economia-circular.webp";

import { useContent } from "../locale-context";

// The inside-left panel, behind the cover.
export function OpeningDoorsPanel() {
  const { diagramAlts, openingDoorsHeading, reasons } = useContent();
  return (
    <div className="panel panel-inside">
      <h2 className="panel-heading">{openingDoorsHeading}</h2>
      {reasons.map((reason) => (
        <div className="reason" key={reason.title}>
          <h4>{reason.title}</h4>
          {reason.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
      <img
        className="circular-economy-diagram"
        src={circularEconomyDiagram.src}
        alt={diagramAlts.circularEconomy}
      />
    </div>
  );
}
