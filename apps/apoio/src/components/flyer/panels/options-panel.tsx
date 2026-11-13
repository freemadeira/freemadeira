import lightningVsOnchainDiagram from "@/assets/flyer/lightning-vs-onchain-diagram.webp";

import { useContent } from "../locale-context";

export function OptionsPanel() {
  const {
    amountTiers,
    diagramAlts,
    holdBitcoinCallout,
    holdBitcoinHeading,
    lightningVsOnchainBody,
    lightningVsOnchainHeading,
  } = useContent();
  return (
    <div className="panel panel-inside">
      <div className="section">
        <h3 className="panel-heading">{holdBitcoinHeading}</h3>
        <div className="callout">
          {holdBitcoinCallout.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="panel-heading">{lightningVsOnchainHeading}</h3>
        <p className="compact">{lightningVsOnchainBody}</p>
        <img
          className="lightning-vs-onchain-diagram"
          src={lightningVsOnchainDiagram.src}
          alt={diagramAlts.lightningVsOnchain}
        />

        <div className="amounts">
          {amountTiers.map((tier) => (
            <div className="amount" key={tier.range}>
              <b>{tier.range}</b>
              {tier.advice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
