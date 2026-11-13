// The shape of one locale's flyer copy, and the locales it comes in. Each
// content.<locale>.ts fills in the whole shape, so a translator edits one file
// and the panels can't end up mixing languages.

export interface FlyerContent {
  merchantCount: string;

  reasons: { title: string; body: string[] }[];

  backCoverHeading: string;
  backCoverBlurb: string[];

  faqHeading: string;
  faq: { q: string; a: string[] }[];

  whatsappSupportLabel: string;
  whatsappSupportBody: string;
  moreInfoLabel: string;
  moreInfoBody: string;

  coverHeadline: string;
  coverSub: string;
  coverFootnote: string;

  fastPathHeading: string;
  fastPathSub: string;
  fastPathSteps: { n: number; text: string }[];

  /** The flyer's three diagrams, described for screen readers. */
  diagramAlts: {
    bitcoinIsCash: string;
    circularEconomy: string;
    lightningVsOnchain: string;
  };

  easyDefaultHeading: string;
  easyDefaultPoints: string[];

  holdBitcoinHeading: string;
  holdBitcoinCallout: string[];

  lightningVsOnchainHeading: string;
  lightningVsOnchainBody: string;
  amountTiers: { range: string; advice: string }[];

  otherOptionsHeading: string;
  walletOptions: { name: string; body: string }[];

  paymentTroubleshootingHeading: string;
  paymentTroubleshooting: string;

  orgFullName: string;

  openingDoorsHeading: string;

  brochureOpenLabel: string;
  brochurePreviousLabel: string;
  brochureNextLabel: string;
}

export type Locale = "pt" | "en" | "de" | "fr";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
];

export const DEFAULT_LOCALE: Locale = "pt";
