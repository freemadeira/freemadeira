// The flyer's Portuguese copy, for most of the merchants it reaches. See
// content.ts for the shape every locale fills in.
import type { FlyerContent } from "./content";

const content: FlyerContent = {
  amountTiers: [
    { advice: "Mantenha-se na Lightning.", range: "Até 500€" },
    { advice: "Passe para uma carteira on-chain.", range: "500€–1.000€" },
    { advice: "Recomendamos uma hardware wallet.", range: "Mais de 1.000€" },
  ],

  backCoverBlurb: [
    "Somos a FREE Madeira, uma organização não-lucrativa, fundada em 2022, a equipa por detrás da Bitcoin Atlantis.",
    "Ajudamos a configurar tudo, de graça, e temos todo o gosto em ajudar se algo correr mal.",
  ],

  backCoverHeading: "Dúvidas? Algum problema?",

  brochureNextLabel: "Seguinte",

  brochureOpenLabel: "Abrir →",

  brochurePreviousLabel: "Anterior",

  coverFootnote: "Bitcoin no seu Negócio: um guia para comerciantes da Madeira",

  coverHeadline: "negócios na Madeira já aceitam Bitcoin.",

  coverSub:
    "Aqui, os bitcoiners podem viver em Bitcoin. É um destino Bitcoin reconhecido, o seu negócio é a próxima paragem.",

  diagramAlts: {
    bitcoinIsCash:
      "O cliente lê um código QR e paga com bitcoin no telemóvel; o pagamento chega em euros ao banco",
    circularEconomy:
      "Pagar com bitcoin na ilha: café, mercearia, escola de surf, oficina, padaria",
    lightningVsOnchain:
      "A Lightning é rápida como um avião a descolar; a on-chain é um navio de carga, mais robusto e seguro",
  },

  easyDefaultHeading: "Aceitar Bitcoin nunca foi tão fácil!",

  easyDefaultPoints: [
    "Bitcoin entra, euros saem, automaticamente. Só fica com Bitcoin se quiser.",
    "Sem complexidade contabilística. É tratado como qualquer outra venda.",
    "Flexível para a sua equipa: use um dispositivo partilhado para todos, ou deixe qualquer funcionário gerar uma fatura.",
    "Pode ajustar a divisão em qualquer momento, se preferir manter uma parte em Bitcoin.",
  ],

  faq: [
    {
      a: [
        "O valor em euros fica fixado no momento da venda.",
        "O pagamento na conta bancária chega tipicamente no dia útil seguinte.",
      ],
      q: "Quando é que recebo o pagamento?",
    },
    {
      a: ["A Swiss Bitcoin Pay cobra 1,5%."],
      q: "Quanto custa?",
    },
    {
      a: ["Sim. Sem período de fidelização, sem compromissos."],
      q: "Posso parar quando quiser?",
    },
  ],

  faqHeading: "Perguntas frequentes",

  fastPathHeading: "Comece em minutos!",

  fastPathSteps: [
    { n: 1, text: "Descarregue a aplicação." },
    { n: 2, text: "Adicione os seus dados de contabilidade." },
    { n: 3, text: "Demora cerca de 10 minutos." },
    { n: 4, text: "Pronto. Processado como um pagamento normal por cartão." },
  ],

  fastPathSub: "O nosso caminho recomendado — Swiss Bitcoin Pay",

  holdBitcoinCallout: [
    "Guardar Bitcoin é um passo importante, e é onde queremos que todos os comerciantes acabem por chegar. Hoje é mais complexo, por isso começamos pelo caminho fácil primeiro.",
    "Fale com o seu contabilista sobre guardar ativos em espécie. Um contabilista na Madeira pode cobrar mais por isto.",
    "Quando estiver pronto para dar esse passo, temos todo o gosto em guiá-lo pelo caminho até à autocustódia.",
  ],

  holdBitcoinHeading: "Se preferir guardar o Bitcoin",

  lightningVsOnchainBody:
    "A Lightning é rápida e barata, ideal para pagamentos do dia a dia. Para mais segurança, recomendamos Bitcoin on-chain.",

  lightningVsOnchainHeading: "Lightning vs. on-chain",

  merchantCount: "170+",

  moreInfoBody: "Mais informações e perguntas frequentes.",

  moreInfoLabel: "Saiba mais",

  openingDoorsHeading: "Aceitar Bitcoin abre portas!",

  orgFullName: "FREE Madeira (Fórum Regional para a Educação Económica)",

  otherOptionsHeading: "Outras opções reais",

  paymentTroubleshooting:
    "Peça ao cliente para verificar a carteira e tentar novamente. Se ele lhe mostrar um pagamento confirmado, peça uma cópia da fatura e envie-a para nós. Entraremos em contacto diretamente com o fornecedor.",

  paymentTroubleshootingHeading: "Se um pagamento não chegar",

  reasons: [
    {
      body: [
        "Mais de 170 negócios na Madeira já o fazem. É comprovado, é real.",
      ],
      title: "Não vai ser o primeiro, mas pode ser o melhor.",
    },
    {
      body: [
        "Uma entrada gratuita no BTC Map, onde uma comunidade ativa e vibrante encontra todos os sítios onde pode pagar em Bitcoin.",
      ],
      title: "Publicidade gratuita, efeito de rede real.",
    },
    {
      body: [
        "Os bitcoiners querem valor real, não pechinchas.",
        "Valorizam a qualidade e um bom atendimento, seja qual for o seu negócio.",
      ],
      title: "Melhores clientes, e mais clientes.",
    },
    {
      body: [
        "Nem todos pagam em Bitcoin em todas as visitas, mas a comunidade continua a visitar e a recomendar os locais que aceitam Bitcoin.",
      ],
      title: "Apoiamos os nossos.",
    },
  ],

  walletOptions: [
    {
      body: "Autocustódia, a nossa parceria preferida com a Swiss Bitcoin Pay. A sua própria aplicação de ponto de venda dedicada significa que a equipa nunca tem acesso aos seus fundos. Amplamente vista como a carteira de referência.",
      name: "Wallet of Satoshi",
    },
    {
      body: "Modelo semelhante de ponto de venda dedicado, bom para várias pessoas ou dispositivos.",
      name: "Blink",
    },
  ],

  whatsappSupportBody: "Perguntas em direto com a FREE e outros comerciantes.",

  whatsappSupportLabel: "Apoio a comerciantes no WhatsApp",
};

export default content;
