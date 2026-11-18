import type { Locale } from "@freemadeira/i18n";

type Text = Record<Locale, string>;

interface Fact {
  label: Text;
  /** The fact in a word or two, shown large. */
  value: Text;
  detail?: Text;
}

interface Step {
  title: Text;
  text?: Text;
  /** What the step's card carries under its text. */
  extra?: "duration" | "stores";
}

/** The "start in minutes" section of the support home, in both languages. */
export const start = {
  duration: {
    en: "About 10 minutes",
    pt: "Cerca de 10 minutos",
  } satisfies Text,
  facts: [
    {
      label: { en: "Fee", pt: "Comissão" },
      value: { en: "1.5%", pt: "1,5%" },
    },
    {
      detail: {
        en: "You can stop whenever you like.",
        pt: "Podes parar quando quiseres.",
      },
      label: { en: "Lock-in", pt: "Fidelização" },
      value: { en: "None", pt: "Nenhuma" },
    },
    {
      detail: {
        en: "Swiss Bitcoin Pay doesn't hold your keys.",
        pt: "A Swiss Bitcoin Pay não guarda as tuas chaves.",
      },
      label: { en: "Your keys", pt: "As tuas chaves" },
      value: { en: "Non-custodial", pt: "Não-custodial" },
    },
    {
      detail: {
        en: "Tax number, business name and address are largely information that is already public. The bank account number is used to send you the euros.",
        pt: "NIF, nome do negócio e morada são, em grande parte, informação que já é pública. O número da conta bancária serve para te enviarem os euros.",
      },
      label: { en: "Details asked for", pt: "Dados pedidos" },
      value: { en: "Just the basics", pt: "Só o básico" },
    },
  ] satisfies Fact[],
  lead: {
    en: "Our recommended path is Swiss Bitcoin Pay.",
    pt: "O nosso caminho recomendado é a Swiss Bitcoin Pay.",
  } satisfies Text,
  more: {
    after: {
      en: " also work, and we explain the differences. Already using the old Wallet of Satoshi app? ",
      pt: " também funcionam, e explicamos as diferenças. Já usas a aplicação antiga da Wallet of Satoshi? ",
    },
    chooser: {
      en: "Blink and Wallet of Satoshi",
      pt: "A Blink e a Wallet of Satoshi",
    },
    lead: { en: "Prefer another solution? ", pt: "Preferes outra solução? " },
    migration: { en: "See what to do", pt: "Vê o que fazer" },
  },
  points: [
    {
      en: "Bitcoin comes in, euros go out, automatically. You only keep Bitcoin if you want to.",
      pt: "Bitcoin entra, euros saem, automaticamente. Só ficas com Bitcoin se quiseres.",
    },
    {
      en: "No accounting complexity. It is treated like any other sale, in euros.",
      pt: "Sem complexidade contabilística. É tratado como qualquer outra venda, em euros.",
    },
    {
      en: "Flexible for your team: one shared device for everyone, or any employee creates a payment request for the customer's wallet. Nobody needs the owner's personal phone.",
      pt: "Flexível para a equipa: um dispositivo partilhado para todos, ou qualquer funcionário gera um pedido de pagamento para a carteira do cliente. Ninguém precisa do telemóvel pessoal do dono.",
    },
    {
      en: "You can adjust the split at any time, if you want to keep part of it in Bitcoin.",
      pt: "Podes ajustar a divisão em qualquer momento, se quiseres manter uma parte em Bitcoin.",
    },
  ] satisfies Text[],
  steps: [
    {
      extra: "stores",
      title: { en: "Download the app.", pt: "Descarrega a aplicação." },
    },
    {
      extra: "duration",
      text: {
        en: "Tax number, bank account number, address and business name.",
        pt: "NIF, número da conta bancária, morada e nome do negócio.",
      },
      title: {
        en: "Add your business details.",
        pt: "Adiciona os dados do teu negócio.",
      },
    },
    {
      text: {
        en: "By the end of the day you can receive payments in Bitcoin.",
        pt: "No fim do dia já podes receber pagamentos em Bitcoin.",
      },
      title: { en: "Done.", pt: "Pronto." },
    },
  ] satisfies Step[],
  stores: [
    {
      href: "https://apps.apple.com/app/swiss-bitcoin-pay/id6444370155",
      label: "App Store",
    },
    {
      href: "https://play.google.com/store/apps/details?id=ch.swissbitcoinpay.checkout",
      label: "Google Play",
    },
  ],
  title: {
    en: "Get started in minutes",
    pt: "Começa em minutos",
  } satisfies Text,
} as const;
