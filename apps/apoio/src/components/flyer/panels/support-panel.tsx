import { useContent } from "../locale-context";

export function SupportPanel() {
  const {
    faq,
    faqHeading,
    otherOptionsHeading,
    paymentTroubleshooting,
    paymentTroubleshootingHeading,
    walletOptions,
  } = useContent();
  return (
    <div className="panel panel-inside">
      <div className="section">
        <h3 className="panel-heading">{otherOptionsHeading}</h3>
        {walletOptions.map((wallet) => (
          <p className="compact" style={{ marginTop: 6 }} key={wallet.name}>
            <strong>{wallet.name}</strong>: {wallet.body}
          </p>
        ))}
      </div>

      <div className="section">
        <h3 className="panel-heading">{faqHeading}</h3>
        <dl className="faq">
          {faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <dt>{item.q}</dt>
              <dd>
                {item.a.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section">
        <h3 className="panel-heading">{paymentTroubleshootingHeading}</h3>
        <p className="compact">{paymentTroubleshooting}</p>
      </div>
    </div>
  );
}
