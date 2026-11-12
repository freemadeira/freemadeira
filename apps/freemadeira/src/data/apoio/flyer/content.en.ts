// All flyer copy for one locale lives in a file like this one — see content.ts for the
// shared shape (FlyerContent) and content/index.ts for how a locale is selected at runtime.
// Edit this file to change English wording without touching component markup.
// Keep in sync with ../../flyer.md (source of truth for content decisions).
import type { FlyerContent } from "./content";

const content: FlyerContent = {
  amountTiers: [
    { advice: "Stay on Lightning.", range: "Under €500" },
    { advice: "Move to an on-chain wallet.", range: "€500–€1,000" },
    { advice: "We recommend a hardware wallet.", range: "Over €1,000" },
  ],

  backCoverBlurb: [
    "We're FREE Madeira, a non-profit, established in 2022, the team behind Bitcoin Atlantis.",
    "We help you get set up, for free, and we're glad to assist if anything goes wrong.",
  ],

  backCoverHeading: "Questions? Something breaks?",

  brochureNextLabel: "Next",

  brochureOpenLabel: "Open →",

  brochurePreviousLabel: "Previous",

  coverFootnote: "Bitcoin in your Business: a guide for Madeira merchants",

  coverHeadline: "businesses in Madeira already take Bitcoin.",

  coverSub:
    "Here, bitcoiners can live on Bitcoin. It's a recognised Bitcoin destination, and your business is the next stop.",

  easyDefaultHeading: "Accepting Bitcoin has never been easier!",

  easyDefaultPoints: [
    "Bitcoin in, euros out, automatically. You only keep Bitcoin if you want to.",
    "No accounting complexity. It's treated like any other sale.",
    "Flexible for your team: use one shared device for everyone, or let any staff member generate an invoice.",
    "You set the split any time if you'd rather keep some in Bitcoin.",
  ],

  faq: [
    {
      a: [
        "The euro amount is locked in at the moment of sale.",
        "The payout to your bank account typically lands the next business day.",
      ],
      q: "When do I get paid?",
    },
    {
      a: ["Swiss Bitcoin Pay charges 1.5%."],
      q: "What does it cost?",
    },
    {
      a: ["Yes. No lock-in period, no strings attached."],
      q: "Can I stop anytime?",
    },
  ],

  faqHeading: "Common questions",

  fastPathHeading: "Start in minutes!",

  fastPathSteps: [
    { n: 1, text: "Download the app." },
    { n: 2, text: "Add your accounting info." },
    { n: 3, text: "Takes about 10 minutes." },
    { n: 4, text: "Done. Processed as a normal card payment." },
  ],

  fastPathSub: "Our recommended fast path — Swiss Bitcoin Pay",

  holdBitcoinCallout: [
    "Holding Bitcoin is a big step, and it's where we want every merchant to end up. It's more nuanced today, so we start you on the easy path first.",
    "Talk to your accountant about holding assets in kind. A Madeira accountant may charge extra for this.",
    "When you're ready to make the move, we're happy to walk you through the path to self-custody.",
  ],

  holdBitcoinHeading: "If you'd rather hold the Bitcoin",

  lightningVsOnchainBody:
    "Lightning is fast and cheap, ideal for everyday payments. For more security, we recommend Bitcoin on-chain.",

  lightningVsOnchainHeading: "Lightning vs. on-chain",

  merchantCount: "170+",

  moreInfoBody: "More info and common questions.",

  moreInfoLabel: "Find out more",

  openingDoorsHeading: "Accepting Bitcoin opens doors!",

  orgFullName: "FREE Madeira (Fórum Regional para a Educação Económica)",

  otherOptionsHeading: "Other real options",

  paymentTroubleshooting:
    "Ask the customer to check their wallet and try again. If they show you a confirmed payment, ask for a copy of the invoice and send it to us. We'll get in touch with the provider directly.",

  paymentTroubleshootingHeading: "If a payment doesn't arrive",

  reasons: [
    {
      body: [
        "170+ Madeira businesses already do this. It's proven, it's real.",
      ],
      title: "You won't be first, but you might be the best.",
    },
    {
      body: [
        "A free listing on BTC Map, where a thriving, active community finds every place they can pay in Bitcoin.",
      ],
      title: "Free advertising, real network effect.",
    },
    {
      body: [
        "Bitcoiners want real value, not bargains.",
        "They value quality and good service, whatever your business.",
      ],
      title: "Better clients, and more clients.",
    },
    {
      body: [
        "Not everyone pays in Bitcoin every visit, but the community keeps coming back and recommending the places that accept it.",
      ],
      title: "We support our own.",
    },
  ],

  sponsorLabel: "Sponsored by",

  viewerNote:
    "FREE Madeira merchant flyer. Click through below to see it the way a merchant would open it. Scroll down for the print-ready tri-fold layout — Print (Ctrl/Cmd+P) for true A4 output. See flyer.md in the parent merchant-guide/ folder for the source content and open items.",

  walletOptions: [
    {
      body: "Self-custody, our go-to pairing with Swiss Bitcoin Pay. Its own dedicated point-of-sale app means staff never hold your funds. Widely seen as the benchmark wallet.",
      name: "Wallet of Satoshi",
    },
    {
      body: "Similar dedicated POS-link model, good for multiple staff or devices.",
      name: "Blink",
    },
  ],

  whatsappSupportBody: "Live Q&A with FREE and other merchants.",

  whatsappSupportLabel: "WhatsApp merchant support",
};

export default content;
