import { useContent } from "../locale-context";

const bitcoinIsCashDiagram = "/apoio/flyer/bitcoin-is-cash-diagram.webp";
const flapPanelBg = "/apoio/flyer/flap-panel-bg.webp";
// Sponsor logo disabled while printing a first batch without a sponsor. Re-enable
// by uncommenting this import, `sponsorLabel` in the destructure below, and the
// .sponsor block in the JSX.
// const wavespaceLogo = "/apoio/flyer/wavespace.webp";

// Sits in the outer flap position, on the flap background. Content swapped with
// OpeningDoorsPanel 2026-10-06.
export function FastPathPanel() {
  const {
    easyDefaultHeading,
    easyDefaultPoints,
    fastPathHeading,
    fastPathSteps,
    fastPathSub,
  } = useContent();
  return (
    <div
      className="panel panel-flap"
      style={{ backgroundImage: `url(${flapPanelBg})` }}
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
        src={bitcoinIsCashDiagram}
        alt="Customer scans a QR code with Bitcoin on their phone, the payment lands as euros at the bank"
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

      {/* <div className="sponsor">
        <span className="sponsor-label">{sponsorLabel}</span>
        <img className="sponsor-logo" src={wavespaceLogo} alt="wave space" />
      </div> */}
    </div>
  );
}
