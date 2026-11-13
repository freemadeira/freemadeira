import type { LocalizedPaths } from "@freemadeira/i18n";

/** FREE Madeira, as it signs the guide and the flyer. */
export const organisation = {
  address: "Rua das Mercês, n.º 41, 9000-224 Funchal, Madeira, Portugal",
  nipc: "517116669",
  registeredName:
    "Associação FREE Madeira – Fórum Regional para a Educação Económica",
} as const;

/** Where merchants reach FREE: the flyer's back cover points at the same group. */
export const contact = {
  email: "merchants@freemadeira.org",
  whatsapp: "https://chat.whatsapp.com/HC2uPvaW4XBJ435EmhQrDB",
} as const;

/** Pages on freemadeira.org. */
export const freeMadeira = {
  home: { en: "https://freemadeira.org/en", pt: "https://freemadeira.org" },
  partnerships: {
    en: "https://freemadeira.org/en/partnerships",
    pt: "https://freemadeira.org/parcerias",
  },
} as const satisfies Record<string, LocalizedPaths>;
