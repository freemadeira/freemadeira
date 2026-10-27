import type { Locale } from "@freemadeira/i18n";

import aiaLogo from "@/assets/logos/partners/aia.svg";
import carxopLogo from "@/assets/logos/partners/carxop.svg";
import dorisolLogo from "@/assets/logos/partners/dorisol.svg";
import intertoursLogo from "@/assets/logos/partners/intertours.svg";
import lovelyStayLogo from "@/assets/logos/partners/lovely-stay.svg";
import madeiraBestLogo from "@/assets/logos/partners/madeira-best.svg";
import madeiraRentLogo from "@/assets/logos/partners/madeira-rent.svg";
import portobayLogo from "@/assets/logos/partners/portobay.svg";
import quintinhaSaoJoaoLogo from "@/assets/logos/partners/quintinha-sao-joao.svg";
import savoyLogo from "@/assets/logos/partners/savoy-signature.svg";
import vipRcTransportsLogo from "@/assets/logos/partners/vip-rc-transports.svg";
import way2MadeiraLogo from "@/assets/logos/partners/way-2-madeira.png";

import type { Logo } from "./types";

export interface TravelPartner extends Logo {
  /** Small print under the logo. */
  note?: Record<Locale, string>;
}

/** Partners with offers for 2024 attendees: stays, tours, agencies, transport. */
export const travelPartners: Record<
  "activities" | "hotels" | "transportation" | "travelAgencies",
  TravelPartner[]
> = {
  activities: [
    {
      logo: madeiraBestLogo,
      name: "Madeira Best",
      url: "https://madeira.best/affiliate/freemadeira",
    },
  ],
  hotels: [
    {
      logo: savoyLogo,
      name: "Savoy Signature",
      note: {
        en: "* Only available at Savoy Palace, Saccharum, NEXT and Royal Savoy",
        pt: "* Apenas disponível no Savoy Palace, Saccharum, NEXT e Royal Savoy",
      },
      sizeMultiplier: 1.65,
      url: "https://www.savoysignature.com/",
    },
    { logo: portobayLogo, name: "PortoBay", url: "https://www.portobay.com/" },
    {
      logo: aiaLogo,
      name: "An Island Apart",
      sizeMultiplier: 0.85,
      url: "https://www.anislandapart.com/",
    },
    {
      logo: lovelyStayLogo,
      name: "MHM by LovelyStay",
      sizeMultiplier: 0.95,
      url: "https://www.lovelystay.com/",
    },
    {
      logo: dorisolLogo,
      name: "Dorisol Hotels",
      sizeMultiplier: 1.1,
      url: "https://www.dorisol.com/",
    },
    {
      logo: quintinhaSaoJoaoLogo,
      name: "Quintinha de São João",
      url: "https://www.quintinhasaojoao.com/",
    },
  ],
  transportation: [
    {
      logo: madeiraRentLogo,
      name: "Madeira Rent",
      sizeMultiplier: 1.3,
      url: "https://www.madeirarent.pt/",
    },
    {
      logo: vipRcTransportsLogo,
      name: "VIP RC Transports",
      note: {
        en: "Transfer airport/hotel and vice-versa – private (1–3 pax) – 30€; shared 5€/person (waiting list up to 1h)",
        pt: "Transfer aeroporto/hotel e vice-versa – privado (1–3 pessoas) – 30€; partilhado 5€/pessoa (lista de espera até 1h)",
      },
      url: "https://viprctransports.com/",
    },
    {
      logo: way2MadeiraLogo,
      name: "Way2Madeira",
      url: "https://way2madeira-rent.pt/",
    },
    {
      logo: carxopLogo,
      name: "Carxop",
      url: "https://www.carxop-rent.com/",
    },
  ],
  travelAgencies: [
    {
      logo: intertoursLogo,
      name: "Intertours",
      url: "https://forms.office.com/pages/responsepage.aspx?id=KeMbem9CoEaJJdb-DuG4UWxSADUPHf1NlDhnb3dqG4pUMzM1RjhFWEFUV1NQOFFMWlRJVTlPQU1RSS4u",
    },
  ],
};
