import type { Page } from "./types";

export const migration: Page = {
  blocks: [
    {
      t: "p",
      x: "O produto antigo da Wallet of Satoshi, a aplicação custodial que funcionava como uma conta, deixou de existir para a Europa. As regras europeias para as empresas de criptoativos (MiCA) mudaram, e a Wallet of Satoshi fez o que podia fazer dentro delas. Isto não é uma crítica à empresa.",
    },
    {
      t: "p",
      x: "Na prática: na aplicação antiga já não consegues receber pagamentos. Só consegues enviar o que lá ficou. Se ainda tens fundos nela, não os deixes lá.",
    },
    { t: "h", x: "O que fazer" },
    {
      t: "ol",
      x: [
        "Instala a aplicação atual da Wallet of Satoshi, que é de auto-custódia: as chaves ficam contigo.",
        "Envia para ela o que ainda tens na aplicação antiga.",
        "Passa a receber pelos novos códigos e endereços. Se tinhas o endereço Lightning antigo impresso ou escrito no menu, atualiza-o.",
        "Para a equipa, usa a aplicação de ponto de venda própria da Wallet of Satoshi, que não dá acesso ao teu saldo.",
      ],
    },
    {
      t: "note",
      title: "Precisas de ajuda?",
      x: [
        "Se não consegues aceder aos fundos, ou não sabes por onde começar, fala connosco. Já ajudámos comerciantes a mudar e, quando foi preciso, a recuperar os fundos. Escreve para merchants@freemadeira.org ou usa o grupo de apoio a comerciantes no WhatsApp.",
      ],
    },
  ],
  lead: "Se sim, precisas de mudar para a aplicação atual. Nós ajudamos.",
  slug: "wallet-of-satoshi-antiga",
  tier: "extra",
  title: "Ainda usas a aplicação antiga da Wallet of Satoshi?",
};

export const glossary: Page = {
  blocks: [
    {
      head: ["Palavra", "O que quer dizer"],
      rows: [
        [
          "Bitcoin",
          "A rede e a moeda. Com maiúscula quando falamos da rede; com minúscula quando falamos das unidades.",
        ],
        [
          "Carteira (wallet)",
          "A aplicação ou o aparelho com que recebes, guardas e envias bitcoin.",
        ],
        [
          "Lightning",
          "Rede construída sobre o Bitcoin para pagamentos instantâneos e muito baratos. É o que usarás no dia a dia.",
        ],
        [
          "On-chain",
          "Pagamento registado diretamente na cadeia de blocos. Mais lento e mais caro; bom para valores altos.",
        ],
        [
          "Sat (satoshi)",
          "A unidade mais pequena. Um bitcoin tem 100 milhões de sats. Os cêntimos do Bitcoin.",
        ],
        [
          "Custodial",
          "Carteira em que é uma empresa a guardar o teu dinheiro. Cómodo, mas a chave não é tua.",
        ],
        [
          "Auto-custódia",
          "Só tu tens a chave. Ninguém pode bloquear nem gastar o que é teu — e ninguém te pode salvar se perderes a cópia.",
        ],
        [
          "Não-custodial",
          "O serviço não guarda as tuas chaves nem o teu dinheiro pelo caminho.",
        ],
        [
          "Palavras de recuperação",
          "As 12 ou 24 palavras que recuperam a tua carteira em qualquer aparelho. Em papel, nunca em fotografia.",
        ],
        [
          "Endereço Lightning",
          "Parece um email (loja@blink.sv) e serve para receber sempre, sem criar código novo.",
        ],
        [
          "Pedido (invoice)",
          "O código QR com o valor da venda. Expira ao fim de 5 a 10 minutos.",
        ],
        [
          "BTC Map",
          "O mapa aberto dos negócios que aceitam Bitcoin em todo o mundo.",
        ],
        [
          "Carteira física",
          "Aparelho dedicado, sem ligação à internet, para guardar poupança a sério.",
        ],
      ],
      t: "table",
    },
  ],
  slug: "glossario",
  tier: "extra",
  title: "Glossário",
};
