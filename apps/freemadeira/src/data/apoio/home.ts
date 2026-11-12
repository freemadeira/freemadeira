import type { Locale } from "@freemadeira/i18n";

type Text = Record<Locale, string>;

/** The "start in minutes" section of the support home, in both languages. */
export const start = {
  facts: [
    {
      label: { en: "Fee", pt: "Comissão" },
      value: { en: "1.5%.", pt: "1,5%." },
    },
    {
      label: { en: "Lock-in", pt: "Fidelização" },
      value: {
        en: "None. You can stop whenever you like.",
        pt: "Nenhuma. Pode parar quando quiser.",
      },
    },
    {
      label: { en: "Your keys", pt: "As suas chaves" },
      value: {
        en: "Swiss Bitcoin Pay doesn't hold your keys: it is non-custodial.",
        pt: "A Swiss Bitcoin Pay não guarda as suas chaves: é não-custodial.",
      },
    },
    {
      label: { en: "Details asked for", pt: "Dados pedidos" },
      value: {
        en: "Tax number, business name and address are largely information that is already public. The bank account number is used to send you the euros.",
        pt: "NIF, nome do negócio e morada são, em grande parte, informação que já é pública. O número da conta bancária serve para lhe enviarem os euros.",
      },
    },
  ],
  lead: {
    en: "Our recommended path is Swiss Bitcoin Pay.",
    pt: "O nosso caminho recomendado é a Swiss Bitcoin Pay.",
  } satisfies Text,
  more: {
    after: {
      en: " also work, and we explain the differences. Already using the old Wallet of Satoshi app? ",
      pt: " também funcionam, e explicamos as diferenças. Já usa a aplicação antiga da Wallet of Satoshi? ",
    },
    chooser: {
      en: "Blink and Wallet of Satoshi",
      pt: "A Blink e a Wallet of Satoshi",
    },
    lead: { en: "Prefer another solution? ", pt: "Prefere outra solução? " },
    migration: { en: "See what to do", pt: "Veja o que fazer" },
  },
  points: [
    {
      en: "Bitcoin comes in, euros go out, automatically. You only keep Bitcoin if you want to.",
      pt: "Bitcoin entra, euros saem, automaticamente. Só fica com Bitcoin se quiser.",
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
      pt: "Pode ajustar a divisão em qualquer momento, se quiser manter uma parte em Bitcoin.",
    },
  ] satisfies Text[],
  steps: [
    { en: "Download the app.", pt: "Descarregue a aplicação." },
    {
      en: "Add your business details: tax number, bank account number, address and business name.",
      pt: "Adicione os dados do seu negócio: NIF, número da conta bancária, morada e nome do negócio.",
    },
    { en: "It takes about 10 minutes.", pt: "Demora cerca de 10 minutos." },
    {
      en: "Done. By the end of the day you can receive payments in Bitcoin.",
      pt: "Pronto. No fim do dia já pode receber pagamentos em Bitcoin.",
    },
  ] satisfies Text[],
  title: {
    en: "Get started in minutes",
    pt: "Comece em minutos",
  } satisfies Text,
} as const;
