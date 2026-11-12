// Shared shape for one locale's worth of flyer copy, plus the locale registry.
// Each content.<locale>.ts file is a full, independent copy of this shape — not a
// per-string lookup keyed by ID. See ../../spec-language-switcher.md for why.

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

  sponsorLabel: string;

  openingDoorsHeading: string;

  viewerNote: string;
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
