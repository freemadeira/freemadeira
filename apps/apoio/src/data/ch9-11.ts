import type { Page } from "./types";

export const ch9to11: Page[] = [
  {
    blocks: [
      {
        t: "note",
        title: "Antes de mais",
        x: [
          "Não somos contabilistas nem advogados e isto não é aconselhamento fiscal. É um resumo do que costumamos explicar aos comerciantes para que possam ter uma conversa útil com o seu contabilista certificado. As regras mudaram várias vezes nos últimos anos: confirma sempre com ele.",
        ],
      },
      { t: "h", x: "A venda é uma venda" },
      {
        t: "p",
        x: "Aceitar Bitcoin não muda a natureza do teu negócio. Vendeste um café por 1,50 € — a venda é de 1,50 €, com o IVA que sempre teve, e a fatura é passada em euros como sempre. O Bitcoin é apenas o meio de pagamento, tal como o cartão ou o dinheiro.",
      },
      { t: "h", x: "Cinco coisas para levares ao teu contabilista" },
      {
        t: "ol",
        x: [
          "A fatura vai em euros, passada em programa de faturação certificado pela AT, como para qualquer outro pagamento. O rendimento conta pelo seu valor em euros no momento em que o recebes. O teu programa de faturação pode não ter «Bitcoin» na lista — pergunta ao teu contabilista qual é o campo a usar.",
          "O IVA da venda é o de sempre. A taxa depende do que vendes, não de como te pagam.",
          "Trocar bitcoin por euros não é uma venda com IVA. O Tribunal de Justiça da União Europeia decidiu, no caso Hedqvist (C-264/14, de 2015), que trocar moeda tradicional por bitcoin e vice-versa está isento de IVA. É uma operação cambial, não um serviço tributado.",
          "Guarda o registo de tudo. As carteiras deixam exportar o histórico. Faz o mesmo que fazes com a fita da caixa: exporta e arquiva, todos os meses.",
          "Se guardares bitcoin, diz-lho. Se não converteres tudo de imediato, há um tratamento contabilístico a dar ao bitcoin que ficas a ter: as orientações da Comissão de Normalização Contabilística (2022) classificam as criptomoedas, em geral, como ativo intangível. Fala com o teu contabilista sobre guardar ativos em espécie: um contabilista na Madeira pode cobrar a mais por isto, e muitos ainda não sabem como fazê-lo.",
        ],
      },
      {
        t: "note",
        title: "O atalho",
        x: [
          "Se não queres nada disto, o caminho A (capítulo 4) resolve o assunto: recebes euros na conta e a contabilidade fica igual à de hoje.",
        ],
      },
      {
        t: "p",
        x: "Se és tu a guardar bitcoin e queres dar esse passo, é onde queremos que os comerciantes cheguem, e acompanhamos-te nele.",
      },
    ],
    lead: "Aceitar Bitcoin muda o meio de pagamento, não a papelada.",
    num: 9,
    slug: "faturacao-e-impostos",
    tier: "depois",
    title: "Faturação, contabilidade e impostos",
  },
  {
    blocks: [
      { t: "h", x: "Põe o autocolante à porta" },
      {
        t: "p",
        x: "Um «Aceitamos Bitcoin» na montra ou junto à caixa. É a coisa mais simples e a que mais resultado dá — locais e turistas reparam. Pedes-nos um e nós levamos-to.",
      },
      { t: "h", x: "Entra no mapa" },
      {
        t: "p",
        x: "O BTC Map é o mapa aberto que os bitcoiners de todo o mundo usam para saber onde podem gastar. Estar lá é gratuito e é como muitos turistas vão encontrar-te. Nós tratamos da inscrição do teu negócio e mantemos os dados atualizados.",
      },
      { t: "h", x: "Diz nas tuas redes" },
      {
        t: "p",
        x: "Um post, uma story, uma foto do autocolante. Marca-nos em @freemadeiraorg que partilhamos. Também podes usar as etiquetas #BitcoinMadeira e #AceitamosBitcoin.",
      },
      { t: "h", x: "Prepara quem está ao balcão" },
      {
        t: "p",
        x: "Basta uma frase: «Sim, aceitamos Bitcoin — é só ler este código.» Se todos souberem dizer isto com naturalidade, o cliente sente-se bem-vindo em vez de sentir que está a criar um problema.",
      },
      { t: "h", x: "Conta a tua história" },
      {
        t: "p",
        x: "Outros comerciantes vão perguntar-te como correu. Diz-lhes a verdade, boa e má. Cada negócio que entra torna a rede mais útil para todos — incluindo para ti.",
      },
      {
        head: ["Nós fazemos por ti", "Um pedido"],
        rows: [
          [
            "Autocolantes e material para a montra. Inscrição e verificação no BTC Map. Configuração no local, com a equipa. Formação curta para quem está ao balcão.",
            "Avisa-nos se mudares de horário, de morada ou se deixares de aceitar. Um mapa desatualizado manda turistas a portas fechadas, e isso prejudica-te a ti e à ilha.",
          ],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "Kit de arranque — o que pedir de uma vez",
        x: [
          "Autocolante para a montra · código QR impresso com a identidade do teu negócio · inscrição no BTC Map · uma passagem de trinta minutos com a equipa. Um email a merchants@freemadeira.org chega para pedir tudo.",
        ],
      },
    ],
    lead: "Aceitar não chega. Se ninguém souber, ninguém paga. E esta parte não te custa nada.",
    num: 10,
    slug: "dar-a-conhecer-o-negocio",
    tier: "depois",
    title: "Dar a conhecer o teu negócio",
  },
  {
    blocks: [
      {
        head: ["Em casa", "Na loja", "Na comunidade"],
        rows: [
          [
            "Instala a carteira no telemóvel de um familiar e mandem um cêntimo um ao outro. Custa praticamente nada e tira o medo em cinco minutos.",
            "Antes de abrir, alterna com a tua equipa: um faz de cliente, outro de comerciante. Façam os dois papéis. Repitam três vezes.",
            "Aparece no meetup e paga o café por Lightning à frente de alguém que já o faz. Vale mais do que ler dez guias.",
          ],
        ],
        t: "table",
      },
      { t: "p", x: "O glossário está numa página própria." },
    ],
    lead: "A melhor forma de ganhar confiança é fazer transferências pequenas com gente de confiança, sem ser em hora de ponta.",
    num: 11,
    slug: "praticar-e-glossario",
    tier: "depois",
    title: "Praticar sem medo & glossário",
  },
];
