// Every answer restates something already on the guide pages or settled for the site;
// `to` links back to the page it comes from. Nothing here is new information.
import type { GuideSlug } from "./types";

export interface FaqEntry {
  cat: string;
  q: string;
  a: string;
  to?: GuideSlug;
}

export const FAQ_CATS = [
  "Começar",
  "Dinheiro e custos",
  "Ao balcão",
  "Segurança",
  "Contabilidade",
  "Comunidade",
] as const;

export const FAQ: FaqEntry[] = [
  {
    a: "Não. Basta um telemóvel com internet. Não há contrato de aluguer de TPA nem espera pela aprovação do banco.",
    cat: "Começar",
    q: "Preciso de terminal ou de autorização?",
    to: "porque-aceitar",
  },
  {
    a: "O nosso caminho rápido é a Swiss Bitcoin Pay: descarrega a aplicação, adiciona os dados do negócio (NIF, número da conta bancária, morada e nome do negócio), demora cerca de 10 minutos, e no fim do dia já podes receber. Se preferires, escreve para merchants@freemadeira.org e vamos ter contigo à loja.",
    cat: "Começar",
    q: "Como começo hoje?",
    to: "escolher-a-solucao",
  },
  {
    a: "Não. Podes usá-lo bem sem perceber a engenharia por trás, tal como usas o telemóvel sem perceber a rede. O guia explica o que te faz falta e o resto fica para quando tiveres curiosidade.",
    cat: "Começar",
    q: "Preciso de perceber de Bitcoin?",
    to: "bem-vindo",
  },
  {
    a: "Sim. Sem período de fidelização e sem compromissos. A configuração é tua e altera-se em qualquer momento.",
    cat: "Começar",
    q: "Posso parar quando quiser?",
    to: "escolher-a-solucao",
  },
  {
    a: "A Swiss Bitcoin Pay cobra 1,5%. Na rede Lightning, quem envia paga uma taxa de rede de uns cêntimos; do teu lado entra o valor que pediste, menos a comissão do serviço. Não há mensalidade nem aluguer de terminal.",
    cat: "Dinheiro e custos",
    q: "Quanto custa?",
    to: "escolher-a-solucao",
  },
  {
    a: "Com a Swiss Bitcoin Pay, o valor em euros fica fixado no momento da venda e o pagamento na tua conta chega tipicamente no dia útil seguinte. Com uma carteira Lightning, o bitcoin chega à tua carteira na hora.",
    cat: "Dinheiro e custos",
    q: "Quando recebo o dinheiro?",
    to: "porque-aceitar",
  },
  {
    a: "Não. No caminho A recebes euros na conta e não ficas exposto à variação do preço. Podes escolher uma parte em bitcoin, se quiseres, e alterá-la em qualquer momento.",
    cat: "Dinheiro e custos",
    q: "Tenho de ficar com bitcoin?",
    to: "escolher-a-solucao",
  },
  {
    a: "Só se guardares bitcoin. Aceitar e poupar são duas decisões separadas: podes receber pagamentos em Bitcoin e ficar com euros na conta.",
    cat: "Dinheiro e custos",
    q: "O preço do Bitcoin pode afetar-me?",
    to: "bem-vindo",
  },
  {
    a: "Com Lightning, ficas ligado ao fornecedor da carteira com que começas. On-chain, as tuas doze palavras de recuperação funcionam em qualquer carteira, por isso nunca ficas preso. Para vendas do dia a dia, Lightning é o que queres.",
    cat: "Dinheiro e custos",
    q: "Lightning ou on-chain: importa a carteira que escolho?",
    to: "lightning-e-on-chain",
  },
  {
    a: "Pede para veres o ecrã dele, vê se o código começa por ln (Lightning) ou bc1 (on-chain), e pede o identificador da transação. Se tudo indicar que pagou e continuas sem ver nada, pede uma cópia da fatura ou do comprovativo e envia-a para a FREE até ao fim do dia. A página tem um passo a passo interativo.",
    cat: "Ao balcão",
    q: "O cliente diz que pagou e eu não vejo nada. O que faço?",
    to: "pagamento-nao-chegou",
  },
  {
    a: "Os pedidos Lightning expiram em 5 a 10 minutos. Faz um novo, só quando souberes o valor final. Se o cliente vai pagar mais tarde, usa um código QR fixo ou o teu endereço Lightning, que estão sempre válidos.",
    cat: "Ao balcão",
    q: "O código expirou. E agora?",
    to: "receber-um-pagamento",
  },
  {
    a: "Um pagamento em Bitcoin não se cancela: devolve-se, enviando de volta. Combina com a equipa antes da primeira: quem autoriza, a partir de que valor, e se devolves o equivalente em euros à data da compra (o que a maioria faz) ou a mesma quantidade de bitcoin.",
    cat: "Ao balcão",
    q: "Como faço uma devolução?",
    to: "receber-um-pagamento",
  },
  {
    a: "Com o modo de caixa. Na Swiss Bitcoin Pay usas um dispositivo partilhado ou deixas qualquer funcionário gerar um pedido de pagamento. Na Blink, copias o link de ponto de venda para os telemóveis da equipa. A Wallet of Satoshi tem uma aplicação de ponto de venda própria. Em todos, quem está ao balcão não vê o saldo da carteira principal do dono.",
    cat: "Ao balcão",
    q: "Como dou acesso à equipa sem mostrar o meu saldo?",
    to: "receber-um-pagamento",
  },
  {
    a: "Ninguém legítimo. Nem o apoio ao cliente da carteira, nem a FREE Madeira, nem quem diga que te vem ajudar a desbloquear. Quem tas pedir está a tentar roubar-te. Sem exceções.",
    cat: "Segurança",
    q: "Alguém me pode pedir as palavras de recuperação?",
    to: "quem-guarda-as-chaves",
  },
  {
    a: "Numa carteira custodial é uma empresa que guarda a chave: é prático, mas a chave não é tua. Em auto-custódia a chave é só tua: ninguém pode bloquear o teu dinheiro, mas a cópia de segurança é responsabilidade tua. Muitos comerciantes usam as duas: custodial para o dia a dia, auto-custódia para o que guardam.",
    cat: "Segurança",
    q: "Qual é a diferença entre custodial e auto-custódia?",
    to: "quem-guarda-as-chaves",
  },
  {
    a: "O produto custodial antigo deixou de existir para a Europa: já não recebes pagamentos nele, só consegues enviar o que lá ficou. Muda para a aplicação atual, de auto-custódia. Se precisares de ajuda, fala connosco.",
    cat: "Segurança",
    q: "Ainda uso a aplicação antiga da Wallet of Satoshi. E agora?",
    to: "wallet-of-satoshi-antiga",
  },
  {
    a: "Sim. A fatura é em euros, passada em programa de faturação certificado pela AT, com o IVA de sempre. O Bitcoin é só o meio de pagamento, como o cartão ou o dinheiro. O rendimento conta pelo seu valor em euros no momento em que o recebes.",
    cat: "Contabilidade",
    q: "Continuo a passar fatura e a pagar IVA?",
    to: "faturacao-e-impostos",
  },
  {
    a: "Não. O Tribunal de Justiça da União Europeia decidiu, no caso Hedqvist (C-264/14, de 2015), que trocar moeda tradicional por bitcoin e vice-versa está isento de IVA. Confirma sempre com o teu contabilista.",
    cat: "Contabilidade",
    q: "Trocar bitcoin por euros paga IVA?",
    to: "faturacao-e-impostos",
  },
  {
    a: "Fala com o teu contabilista: as orientações da Comissão de Normalização Contabilística classificam as criptomoedas, em geral, como ativo intangível. Um contabilista na Madeira pode cobrar a mais por isto, e muitos ainda não sabem como fazê-lo. Se não queres nada disto, o caminho A deixa a contabilidade igual à de hoje.",
    cat: "Contabilidade",
    q: "E se eu guardar bitcoin?",
    to: "faturacao-e-impostos",
  },
  {
    a: "É gratuito e tratamos nós da inscrição do teu negócio e mantemos os dados atualizados. Pede-nos por email ou no grupo de apoio. Avisa-nos se mudares de horário, de morada ou se deixares de aceitar.",
    cat: "Comunidade",
    q: "Como entro no BTC Map?",
    to: "dar-a-conhecer-o-negocio",
  },
  {
    a: "No grupo de apoio a comerciantes no WhatsApp, com a FREE e outros comerciantes, e no meetup da FREE Madeira, na última quarta-feira de cada mês, às 18:30. Entrada livre.",
    cat: "Comunidade",
    q: "Onde falo com outros comerciantes?",
    to: "o-que-fazer-com-os-bitcoins",
  },
];
