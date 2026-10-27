import type { Locale } from "@freemadeira/i18n";

export const organisation = {
  address: "Rua das Mercês, n.º 41, 9000-224 Funchal, Madeira, Portugal",
  email: "info@freemadeira.org",
  legalForm: {
    en: "Associação de direito privado (private-law non-profit association, Portugal)",
    pt: "Associação de direito privado sem fins lucrativos",
  } satisfies Record<Locale, string>,
  nipc: "517116669",
  registeredName:
    "Associação FREE Madeira – Fórum Regional para a Educação Económica",
} as const;

export const links = {
  bitcoinAtlantis: "https://bitcoinatlantis.com",
  donate: "https://pay.zaprite.com/pl_2ma4dHm939",
  energySummit: "https://energysummit.freemadeira.org",
  learn: "https://github.com/freemadeira/education-materials",
  meetups: "https://www.satlantis.io/c/74/FREE-Madeira-Bitcoin-Meetups",
  shop: "https://shop.freemadeira.org",
  whitepaper: "https://bitcoin.org/bitcoin.pdf",
} as const;
