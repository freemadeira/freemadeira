import bitcoinIsCashDiagram from "@/assets/flyer/bitcoin-is-cash-diagram.webp";
import flapPanelBg from "@/assets/flyer/flap-panel-bg.webp";

import { useContent } from "../locale-context";

// Sits in the outer flap position, on the flap background.
export function FastPathPanel() {
  const {
    diagramAlts,
    easyDefaultHeading,
    easyDefaultPoints,
    fastPathHeading,
    fastPathSteps,
    fastPathSub,
  } = useContent();
  return (
    <div
      className="panel panel-flap"
      style={{ backgroundImage: `url(${flapPanelBg.src})` }}
    >
      <h2 className="inside-head">{fastPathHeading}</h2>
      <p className="inside-sub">
        {fastPathSub}
        {/* No App Store / Play Store links yet: not confirmed. */}
      </p>

      <div className="steps">
        {fastPathSteps.map((step) => (
          <div className="step" key={step.n}>
            <span className="step-n">{step.n}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <img
        className="bitcoin-is-cash-diagram"
        src={bitcoinIsCashDiagram.src}
        alt={diagramAlts.bitcoinIsCash}
      />

      <div className="section">
        <h3 className="panel-heading">{easyDefaultHeading}</h3>
        <ul className="compact">
          {easyDefaultPoints.map((point) => (
            <li key={point}>
              {point.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
