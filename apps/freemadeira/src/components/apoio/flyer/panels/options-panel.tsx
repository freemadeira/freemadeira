import { useContent } from "../locale-context";

const lightningVsOnchainDiagram =
  "/apoio/flyer/lightning-vs-onchain-diagram.webp";

export function OptionsPanel() {
  const {
    amountTiers,
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
          src={lightningVsOnchainDiagram}
          alt="Lightning is fast like a plane taking off; on-chain is a sturdier, more secure cargo ship"
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
