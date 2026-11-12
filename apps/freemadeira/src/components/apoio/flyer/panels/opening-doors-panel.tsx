import { useContent } from "../locale-context";

const circularEconomyDiagram = "/apoio/flyer/circular-economy-diagram.webp";

// Inside-left panel (behind the cover). Content swapped with FastPathPanel 2026-10-06.
export function OpeningDoorsPanel() {
  const { openingDoorsHeading, reasons } = useContent();
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
        src={circularEconomyDiagram}
        alt="Pagar com bitcoin na ilha: café, mercearia, escola de surf, oficina, padaria"
      />
    </div>
  );
}
