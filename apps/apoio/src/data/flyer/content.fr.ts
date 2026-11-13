// The flyer's French copy, for expat business owners. See content.ts for the
// shape every locale fills in.
import type { FlyerContent } from "./content";

const content: FlyerContent = {
  amountTiers: [
    { advice: "Restez sur Lightning.", range: "Moins de 500 €" },
    { advice: "Passez à un portefeuille on-chain.", range: "500 €–1 000 €" },
    {
      advice: "Nous recommandons un portefeuille matériel (hardware wallet).",
      range: "Plus de 1 000 €",
    },
  ],

  backCoverBlurb: [
    "Nous sommes FREE Madeira, une association à but non lucratif, fondée en 2022, l'équipe derrière Bitcoin Atlantis.",
    "Nous vous aidons à vous installer, gratuitement, et nous sommes heureux de vous assister en cas de problème.",
  ],

  backCoverHeading: "Des questions ? Un problème ?",

  brochureNextLabel: "Suivant",

  brochureOpenLabel: "Ouvrir →",

  brochurePreviousLabel: "Précédent",

  coverFootnote:
    "Le Bitcoin dans votre commerce : un guide pour les commerçants de Madère",

  coverHeadline: "commerces à Madère acceptent déjà le Bitcoin.",

  coverSub:
    "Ici, les bitcoiners peuvent vivre en Bitcoin. C'est une destination Bitcoin reconnue, et votre commerce est la prochaine étape.",

  easyDefaultHeading: "Accepter le Bitcoin n'a jamais été aussi simple !",

  easyDefaultPoints: [
    "Bitcoin entrant, euros sortants, automatiquement. Vous ne gardez du Bitcoin que si vous le souhaitez.",
    "Aucune complexité comptable. C'est traité comme n'importe quelle autre vente.",
    "Flexible pour votre équipe : utilisez un appareil partagé pour tous, ou laissez n'importe quel employé générer une facture.",
    "Vous pouvez ajuster la répartition à tout moment si vous préférez garder une part en Bitcoin.",
  ],

  faq: [
    {
      a: [
        "Le montant en euros est fixé au moment de la vente.",
        "Le virement sur votre compte bancaire arrive généralement le jour ouvré suivant.",
      ],
      q: "Quand suis-je payé ?",
    },
    {
      a: ["Swiss Bitcoin Pay facture 1,5 %."],
      q: "Combien cela coûte-t-il ?",
    },
    {
      a: ["Oui. Aucune période d'engagement, aucune condition."],
      q: "Puis-je arrêter à tout moment ?",
    },
  ],

  faqHeading: "Questions fréquentes",

  fastPathHeading: "Démarrez en quelques minutes !",

  fastPathSteps: [
    { n: 1, text: "Téléchargez l'application." },
    { n: 2, text: "Ajoutez vos informations comptables." },
    { n: 3, text: "Environ 10 minutes." },
    { n: 4, text: "Terminé. Traité comme un paiement par carte normal." },
  ],

  fastPathSub: "Notre solution recommandée — Swiss Bitcoin Pay",

  holdBitcoinCallout: [
    "Conserver du Bitcoin est une étape importante, et c'est là où nous voulons que chaque commerçant arrive un jour. C'est plus complexe aujourd'hui, donc nous vous accompagnons d'abord sur la voie la plus simple.",
    "Parlez à votre comptable de la détention d'actifs en nature. Un comptable à Madère peut facturer un supplément pour cela.",
    "Quand vous serez prêt à faire ce pas, nous serons heureux de vous guider vers l'autoconservation (self-custody).",
  ],

  holdBitcoinHeading: "Si vous préférez conserver le Bitcoin",

  lightningVsOnchainBody:
    "Lightning est rapide et bon marché, idéal pour les paiements du quotidien. Pour plus de sécurité, nous recommandons le Bitcoin on-chain.",

  lightningVsOnchainHeading: "Lightning vs. on-chain",

  merchantCount: "170+",

  moreInfoBody: "Plus d'infos et questions fréquentes.",

  moreInfoLabel: "En savoir plus",

  openingDoorsHeading: "Accepter le Bitcoin ouvre des portes !",

  orgFullName: "FREE Madeira (Fórum Regional para a Educação Económica)",

  otherOptionsHeading: "D'autres options concrètes",

  paymentTroubleshooting:
    "Demandez au client de vérifier son portefeuille et de réessayer. S'il vous montre un paiement confirmé, demandez une copie de la facture et envoyez-la nous. Nous contacterons directement le prestataire.",

  paymentTroubleshootingHeading: "Si un paiement n'arrive pas",

  reasons: [
    {
      body: [
        "Plus de 170 commerces à Madère le font déjà. C'est prouvé, c'est réel.",
      ],
      title:
        "Vous ne serez pas le premier, mais vous pourriez être le meilleur.",
    },
    {
      body: [
        "Une inscription gratuite sur BTC Map, où une communauté active et dynamique trouve tous les endroits où payer en Bitcoin.",
      ],
      title: "Publicité gratuite, véritable effet de réseau.",
    },
    {
      body: [
        "Les bitcoiners veulent une vraie valeur, pas des bonnes affaires.",
        "Ils apprécient la qualité et un bon service, quel que soit votre commerce.",
      ],
      title: "De meilleurs clients, et plus de clients.",
    },
    {
      body: [
        "Tout le monde ne paie pas en Bitcoin à chaque visite, mais la communauté revient et recommande les lieux qui l'acceptent.",
      ],
      title: "Nous soutenons les nôtres.",
    },
  ],

  sponsorLabel: "Parrainé par",

  walletOptions: [
    {
      body: "Autoconservation, notre association privilégiée avec Swiss Bitcoin Pay. Sa propre application de point de vente dédiée signifie que le personnel n'a jamais accès à vos fonds. Largement considéré comme le portefeuille de référence.",
      name: "Wallet of Satoshi",
    },
    {
      body: "Modèle similaire de point de vente dédié, adapté à plusieurs employés ou appareils.",
      name: "Blink",
    },
  ],

  whatsappSupportBody:
    "Questions-réponses en direct avec FREE et d'autres commerçants.",

  whatsappSupportLabel: "Support commerçants sur WhatsApp",
};

export default content;
