import apoioQr from "@/assets/flyer/apoio-qr.svg?url";
import whatsappSupportQr from "@/assets/flyer/whatsapp-support-qr.svg?url";
import { contact } from "@/data/organisation";

import { useContent } from "../locale-context";

// The QR code under it points here.
const APOIO_HOST = "apoio.freemadeira.org";

// The back is visible with the flyer still folded (e.g. left on a counter), so the
// support QR is this panel's main element; the FAQ lives inside on SupportPanel.
export function BackCoverPanel() {
  const {
    backCoverHeading,
    backCoverBlurb,
    moreInfoBody,
    moreInfoLabel,
    orgFullName,
    whatsappSupportBody,
    whatsappSupportLabel,
  } = useContent();
  return (
    <div className="panel panel-back">
      <div>
        <h3 className="panel-heading">{backCoverHeading}</h3>
        {backCoverBlurb.map((line) => (
          <p className="compact" key={line}>
            {line}
          </p>
        ))}
      </div>
      <div className="back-qr">
        <a
          className="qr-box"
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappSupportQr} alt={whatsappSupportLabel} />
        </a>
        <p className="back-qr-label">{whatsappSupportLabel}</p>
        <p className="back-qr-body">{whatsappSupportBody}</p>
      </div>
      <div>
        <div className="more-info">
          <a
            className="more-info-qr"
            href={`https://${APOIO_HOST}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={apoioQr} alt={`${moreInfoLabel}: ${APOIO_HOST}`} />
          </a>
          <p>
            <span className="more-info-label">{moreInfoLabel}</span>
            {moreInfoBody}
            <span className="more-info-email">{contact.email}</span>
          </p>
        </div>
        <div className="non-profit-note">{orgFullName}</div>
      </div>
    </div>
  );
}
