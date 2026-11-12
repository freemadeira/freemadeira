import economiaCircular from "@/assets/images/apoio/economia-circular.webp";
import inflacaoEscassez from "@/assets/images/apoio/inflacao-escassez.webp";
import lightningVsOnchain from "@/assets/images/apoio/lightning-vs-onchain.webp";

import type { Page } from "./types";

export const ch1to4: Page[] = [
  {
    blocks: [
      {
        t: "p",
        x: "Este guia é para ti mesmo que nunca tenhas usado Bitcoin. Não vamos pedir-te que acredites em nada. Vamos mostrar-te como funciona, o que muda no teu balcão, e deixar-te decidir com calma.",
      },
      {
        t: "p",
        x: "Na Madeira há hoje mais de 170 negócios a aceitar Bitcoin — cafés, restaurantes, alojamentos, lojas, escolas de surf, oficinas. Alguns começaram por curiosidade. Outros porque um cliente perguntou. Quase todos dizem a mesma coisa: foi mais simples do que esperavam.",
      },
      {
        t: "p",
        x: "A FREE Madeira é uma associação sem fins lucrativos. Não vendemos Bitcoin nem ganhamos comissão nas tuas vendas. Fazemos educação monetária, organizamos a comunidade e ajudamos quem quiser dar este passo. Este guia é uma dessas ajudas, e é gratuito.",
      },
      { t: "h", x: "O que vais encontrar aqui" },
      {
        t: "ul",
        x: [
          "Porque é que aceitar Bitcoin pode ser bom para o teu negócio — e onde estão os limites.",
          "Que solução escolher, consoante queiras receber em euros ou em bitcoin.",
          "Como receber um pagamento, com o cliente à tua frente ou à distância.",
          "O que fazer quando alguma coisa corre mal.",
          "Como guardar em segurança o que recebes.",
          "O que dizer ao teu contabilista.",
        ],
      },
      {
        t: "note",
        title: "Uma nota sobre o vocabulário",
        x: [
          "Sempre que aparecer uma palavra nova — Lightning, carteira, auto-custódia — explicamo-la na primeira vez que a usamos, e voltas a encontrá-la no glossário. Se ficares com dúvidas, vem ter connosco. Não há perguntas parvas.",
        ],
      },
      { t: "h", x: "O que este guia não é" },
      {
        t: "p",
        x: "Não é uma sugestão para investires nem uma opinião sobre o preço. Não te vamos dizer que compres nada, nem quando.",
      },
      {
        head: ["170+", "Mensal", "Gratuito"],
        rows: [
          [
            "negócios na Madeira já aceitam Bitcoin",
            "encontro aberto, última quarta-feira do mês, 18:30",
            "toda a formação que damos, em português",
          ],
        ],
        t: "table",
      },
      { t: "h", x: "Bitcoin é dinheiro. Só que digital." },
      {
        t: "p",
        x: "Bitcoin é dinheiro a sério, mas não tem forma física. Não lhe pegas com a mão — usa-lo como usas o saldo que vês na aplicação do teu banco. A diferença está em quem manda nele.",
      },
      {
        t: "p",
        x: "O euro é gerido pelo Banco Central Europeu, que decide quanto dinheiro existe. O Bitcoin não tem ninguém a mandar: funciona numa rede de computadores espalhados pelo mundo, que seguem todos as mesmas regras. Uma dessas regras nunca mudou desde 2009 — nunca existirão mais de 21 milhões de bitcoins.",
      },
      {
        alt: "À esquerda, um cubo com o símbolo do euro a derreter. À direita, o símbolo do Bitcoin com o número 21 000 000.",
        caption:
          "Duas ideias opostas. Quando se cria mais dinheiro, cada unidade que tens compra um bocadinho menos. Quando a quantidade é fixa e não pode aumentar, essa diluição não acontece.",
        src: inflacaoEscassez,
        t: "img",
      },
      { t: "h", x: "Ninguém manda nele" },
      {
        t: "p",
        x: "Não há uma sede, um presidente, nem um país por trás do Bitcoin. As regras estão escritas em código aberto que qualquer pessoa pode ler, e são as mesmas para toda a gente — para um banco suíço e para um café no Funchal. Ninguém pode congelar a tua conta, recusar-te um pagamento ou mudar as regras a meio do jogo.",
      },
      {
        t: "p",
        x: "É esta a diferença que interessa a quem tem um negócio: não estás a pedir licença a ninguém para receber o teu dinheiro.",
      },
      {
        t: "note",
        title: "Uma comparação que costuma ajudar",
        x: [
          "Não precisas de perceber como funciona a rede de telemóvel para fazer uma chamada. Com o Bitcoin é igual: podes usá-lo bem sem perceber a engenharia por trás. Este guia é a parte que te faz falta para o usar — o resto fica para quando tiveres curiosidade.",
        ],
      },
      { t: "h", x: "Porque é que isto te interessa" },
      {
        t: "p",
        x: "Pensa no que 100 € compravam há dez anos e no que compram hoje. A diferença não é impressão tua: é inflação. O dinheiro que deixas parado na conta ao fim do mês vai valendo um pouco menos todos os anos, mesmo que o número não mude.",
      },
      { id: "inflation", t: "widget" },
      {
        t: "p",
        x: "Simulação simples: o que 100 € de hoje comprarão, à meta oficial de 2% de inflação ao ano do Banco Central Europeu. Aos 2% ao ano, o dinheiro parado perde cerca de um terço do poder de compra em vinte anos.",
      },
      {
        t: "p",
        x: "Isto não é motivo para pânico. É apenas informação sobre a ferramenta com que trabalhas todos os dias. O Bitcoin foi feito de outra maneira: a quantidade é fixa e conhecida por toda a gente. É por isso que muita gente o usa para guardar uma parte das poupanças a longo prazo — não como um truque para ficar rico, mas como uma forma de não perder terreno.",
      },
      {
        t: "note",
        title: "Sejamos honestos contigo",
        x: [
          "O preço do Bitcoin em euros sobe e desce, às vezes muito, no espaço de dias. Não te vamos dizer que vai valer X ou Y — ninguém sabe, e quem to disser está a vender-te alguma coisa. O que te dizemos é isto: não precisas de correr risco nenhum para aceitar Bitcoin. Como vais ver no capítulo 4, podes receber pagamentos em Bitcoin e ficar com euros na tua conta, sem nunca ficares exposto à variação do preço. Aceitar e poupar são duas decisões separadas.",
        ],
      },
      {
        head: ["Aceitar", "Poupar"],
        rows: [
          [
            "É uma decisão de negócio. Mais um meio de pagamento, com o dinheiro a chegar em segundos. Podes converter tudo para euros automaticamente. Consoante a solução, há uma comissão do prestador (ver capítulo 4).",
            "É uma decisão pessoal. Guardar uma parte em bitcoin é outra conversa, com outro risco e outro horizonte. Só tu a podes tomar, e só depois de perceberes bem o que estás a fazer.",
          ],
        ],
        t: "table",
      },
    ],
    lead: "Não precisas de perceber tudo sobre Bitcoin para o usares no teu negócio.",
    num: 1,
    slug: "bem-vindo",
    tier: "agora",
    title: "Bem-vindo — e porque é que isto te diz respeito",
  },
  {
    blocks: [
      {
        t: "ul",
        x: [
          "Não precisas de terminal nem de autorização. Basta um telemóvel com internet. Não há contrato de aluguer de TPA, não há espera pela aprovação do banco.",
          "Sem comissão de cartão. Na rede Lightning, a taxa de rede é paga por quem envia o dinheiro — o cliente — e é normalmente de cêntimos. Se usares a Swiss Bitcoin Pay, a comissão do serviço é de 1,5%.",
          "Não precisas de dar troco. O cliente lê o código e paga o valor exato. Poupas tempo e não perdes uma venda por não teres trocos para uma nota grande.",
          "Melhores clientes. Os bitcoiners procuram valor real, preços justos e um sítio onde valha a pena estar — seja qual for o negócio.",
          "Divulgação gratuita. Ao aceitares, o teu negócio entra no BTC Map, o mapa aberto que os bitcoiners usam para encontrar sítios onde gastar.",
          "O dinheiro chega depressa. Nada de esperar dois ou três dias úteis pela transferência do banco. Com uma carteira Lightning, está na tua carteira antes de o cliente sair da loja.",
          "Não há estornos abusivos. Um pagamento em Bitcoin confirmado não pode ser revertido pelo cliente semanas depois. Isso também significa responsabilidade — devolve sempre com cuidado (ver capítulo 5).",
          "Ajuda-te a poupar, se quiseres. É o que ouvimos a muitos comerciantes: «o que está em dinheiro, gasto; o que está em bitcoin, fica lá». Não é magia — é atrito na direção certa.",
          "O valor fica na ilha. Quando pagas o fornecedor local em bitcoin, o valor continua cá. Não sai em comissões para plataformas fora da Madeira.",
          "Dá-te opções. Podes guardar, converter para euros, pagar fornecedores ou pagar contas. Sem pedir licença a ninguém.",
        ],
      },
      {
        t: "note",
        title: "E o que é que não muda",
        x: [
          "Continuas a passar fatura como sempre, continuas a pagar IVA como sempre e o teu preço continua a ser em euros. Aceitar Bitcoin é acrescentar uma forma de pagamento, não mudar de negócio.",
        ],
      },
      {
        t: "p",
        x: "Não é preciso acreditar em tudo isto para experimentar. Aceita durante um mês, vê quantos clientes usam, e decide depois com dados teus em vez de opiniões dos outros.",
      },
      { t: "h", x: "Apoiamos os nossos" },
      {
        t: "p",
        x: "Nem todo o bitcoiner que entra paga em Bitcoin nessa visita. A comunidade compensa visitando e recomendando os sítios que aceitam Bitcoin, qualquer que seja o meio de pagamento. Aceitar não é uma aposta no volume de pagamentos em Bitcoin — é um convite para uma comunidade que apoia os seus, e com o tempo isso traduz-se em equipas que conhecem os clientes pelo nome.",
      },
      { t: "h", x: "O dinheiro que fica cá" },
      {
        t: "p",
        x: "Um negócio sozinho a aceitar Bitcoin é uma curiosidade. Vários negócios de uma mesma zona a aceitar e a gastar entre si é outra coisa: é uma economia. É por isso que insistimos tanto na palavra comunidade.",
      },
      {
        alt: "Um anel de ícones à volta do símbolo do Bitcoin: café, mercearia, escola de surf, oficina e padaria.",
        caption:
          "Cafés, padarias, mercearias, oficinas, escolas de surf: negócios onde já podes pagar em Bitcoin na Madeira.",
        src: economiaCircular,
        t: "img",
      },
      { t: "h", x: "E quem espera pelo dinheiro?" },
      {
        t: "p",
        x: "Há uma diferença prática que só se percebe quando se passa por ela: com Bitcoin por Lightning, o dinheiro não fica em trânsito. Chega, é teu, e podes usá-lo já.",
      },
      { id: "timeline", t: "widget" },
      {
        t: "p",
        x: "Os prazos de cartão variam com o banco e o contrato. Se escolheres receber em euros (caminho A, capítulo 4), o pagamento na conta bancária chega tipicamente no dia útil seguinte e o valor em euros fica fixado no momento da venda.",
      },
    ],
    lead: "Dez razões concretas, do balcão para fora.",
    num: 2,
    slug: "porque-aceitar",
    tier: "agora",
    title: "Porquê aceitar Bitcoin",
  },
  {
    blocks: [
      {
        t: "p",
        x: "Quando começares a receber pagamentos, vais reparar que há dois tipos. Não são duas moedas diferentes — é sempre Bitcoin. São dois caminhos para o mesmo sítio:",
      },
      {
        t: "ol",
        x: [
          "Lightning — rápido e muito barato. É o que vais usar quase sempre.",
          "On-chain (a cadeia de blocos) — mais lento e normalmente mais caro.",
        ],
      },
      {
        t: "p",
        x: "Uma comparação que costuma ajudar: o Lightning é uma lancha rápida e barata. O on-chain é um navio de carga — lento e mais caro, mas leva muito mais carga. Ambos mexem no mesmo dinheiro. Para as vendas do dia a dia, o que queres é Lightning.",
      },
      {
        alt: "À esquerda, uma lancha rápida com um raio: Lightning, segundos. À direita, um navio de carga: on-chain, 10 minutos ou mais.",
        caption:
          "Na prática: quase todos os teus clientes vão pagar por Lightning. Vale a pena saber distinguir os dois, porque é a primeira coisa a verificar se um pagamento demorar.",
        src: lightningVsOnchain,
        t: "img",
      },
      { t: "h", x: "Não precisas de escolher" },
      {
        t: "p",
        x: "A tua carteira trata disto sozinha. Quando crias um pedido de pagamento, ela gera um código Lightning por predefinição — que é o que queres em 99% das vendas. O on-chain só aparece se alguém insistir em pagar por esse caminho.",
      },
      {
        t: "note",
        title: "Se só quiseres decorar uma coisa",
        x: [
          "Lightning é o teu dia a dia. On-chain é a exceção, e a exceção pode demorar.",
        ],
      },
      { t: "h", x: "Como distinguir as duas" },
      {
        head: ["", "Lightning", "On-chain"],
        rows: [
          [
            "Velocidade",
            "Quase instantâneo — segundos",
            "10 minutos ou mais, até confirmar",
          ],
          [
            "Custo",
            "Muito baixo, normalmente cêntimos",
            "Mais alto e variável, conforme o trânsito da rede",
          ],
          [
            "Melhor para",
            "Vendas do dia a dia",
            "Valores altos, ou quando o cliente não tem Lightning",
          ],
          [
            "Como reconhecer",
            "O código começa por ln",
            "O endereço começa por bc1, 1 ou 3",
          ],
          ["Quando usar", "Quase sempre", "Só quando for mesmo necessário"],
          [
            "Validade do código",
            "O pedido expira em 5 a 10 minutos",
            "O endereço não expira",
          ],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "Truque de balcão",
        x: [
          "Ensina a tua equipa a olhar para as primeiras duas letras. Se começa por ln, é Lightning e deve chegar de imediato. Se começa por bc1, é on-chain e pode demorar. Só isso resolve metade das dúvidas que aparecem ao balcão.",
        ],
      },
      { t: "h", x: "As duas não se misturam" },
      {
        t: "p",
        x: "Um pagamento Lightning e um pagamento on-chain não se misturam. Se deste ao cliente um código Lightning e ele enviou por on-chain, o pagamento não chega — tem de tentar outra vez pelo caminho certo. É o erro mais comum, e é fácil de resolver quando se sabe.",
      },
      {
        t: "note",
        title: "Atenção ao tempo",
        x: [
          "Os pedidos Lightning expiram passados 5 a 10 minutos. Se o cliente não estiver contigo e for pagar mais tarde, não lhe envies um pedido com prazo — usa um código fixo ou um endereço Lightning (capítulo 5), que estão sempre válidos.",
        ],
      },
      { t: "h", x: "E as taxas, afinal?" },
      {
        t: "p",
        x: "Por Lightning, quem envia paga uns cêntimos de taxa de rede; do teu lado entra o valor que pediste, menos a comissão do serviço que usares (1,5% na Swiss Bitcoin Pay). Não há mensalidade nem aluguer de terminal. No on-chain a taxa de rede é maior e varia — mas continua a ser paga por quem envia.",
      },
      { t: "h", x: "Que valor, que caminho" },
      {
        head: ["Valor", "O que recomendamos"],
        rows: [
          [
            "Até 500 €",
            "Fica na Lightning (as carteiras recomendadas neste guia).",
          ],
          [
            "500 € a 1.000 €",
            "Vale a pena passar para uma carteira feita para valores maiores ou on-chain (por exemplo Blue Wallet ou Aqua).",
          ],
          [
            "Mais de 1.000 €",
            "Recomendamos uma carteira física (hardware wallet).",
          ],
        ],
        t: "table",
      },
    ],
    lead: "Lightning e on-chain: a mesma conta bancária, dois caminhos diferentes.",
    num: 3,
    slug: "lightning-e-on-chain",
    tier: "agora",
    title: "Duas redes, uma moeda: Lightning e on-chain",
  },
  {
    blocks: [
      {
        t: "p",
        x: "A primeira pergunta não é técnica: queres receber euros ou bitcoin? A resposta muda tudo o resto, e nenhuma está errada.",
      },
      {
        head: [
          "Caminho A — em euros",
          "Caminho B — em bitcoin, à maneira simples",
          "Caminho C — em bitcoin, com as chaves contigo",
        ],
        rows: [
          [
            "O cliente paga em Bitcoin, a conversão é automática e recebes euros por transferência. Zero exposição ao preço. Swiss Bitcoin Pay.",
            "Ficas com bitcoin numa carteira gerida por uma empresa. Muito fácil de começar, bom para experimentar. Blink, Wallet of Satoshi.",
            "O dinheiro é só teu, sem intermediário. Exige um pouco mais de cuidado na configuração e nas cópias de segurança. Phoenix, Aqua, BitBox02.",
          ],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "O conselho que damos a quem começa",
        x: [
          "Começa pelo caminho A, o mais fácil. Faz cinco ou seis vendas reais, ganha confiança. Chegar à auto-custódia (caminho C) é onde queremos que todos os comerciantes acabem por chegar — hoje tem mais obstáculos, por isso começamos pelo caminho fácil, e quando estiveres pronto acompanhamos-te nesse passo. Não é preciso decidir tudo hoje, e podes mudar quando quiseres.",
        ],
      },
      { id: "chooser", t: "widget" },
      {
        t: "p",
        x: "Muitos acabam por usar dois ao mesmo tempo: A ou B para o balcão, C para o que guardam.",
      },
      { t: "h", x: "Caminho A — Receber em euros" },
      {
        t: "p",
        x: "Para quem quer aceitar Bitcoin sem ter Bitcoin. É o caminho mais comum entre os comerciantes da Madeira, e o que recomendamos a quem tem contabilidade organizada e não quer complicar.",
      },
      {
        t: "p",
        x: "O cliente paga em Bitcoin, como em qualquer outro sítio. Nos bastidores, o valor é convertido de imediato e tu recebes euros por transferência bancária. Para ti, na prática, é como receber um pagamento normal — só que sem terminal e sem comissão de cartão.",
      },
      { t: "h", x: "Swiss Bitcoin Pay — o caminho rápido" },
      {
        t: "ol",
        x: [
          "Descarrega a aplicação.",
          "Adiciona os dados do teu negócio: NIF, número da conta bancária, morada e nome do negócio.",
          "Demora cerca de 10 minutos.",
          "Pronto. No fim do dia já podes receber pagamentos em Bitcoin.",
        ],
      },
      {
        t: "ul",
        x: [
          "Bitcoin entra, euros saem, automaticamente. Só ficas com Bitcoin se quiseres.",
          "Sem complexidade contabilística: é tratado como qualquer outra venda, em euros.",
          "Não precisas de comprar equipamento. Funciona no telemóvel ou no tablet que já tens.",
          "Flexível para a equipa: um dispositivo partilhado para todos, ou qualquer funcionário gera um pedido de pagamento para a carteira do cliente. Ninguém precisa do telemóvel pessoal do dono.",
          "Podes escolher quanto queres em euros e quanto queres em bitcoin — 100% euros, ou uma parte de cada. Altera-se em qualquer momento.",
          "Os pagamentos entram na tua conta por transferência SEPA, tipicamente no dia útil seguinte. O valor em euros fica fixado no momento da venda.",
          "Ninguém guarda o teu dinheiro pelo caminho — a Swiss Bitcoin Pay não guarda as tuas chaves: é uma solução não-custodial.",
        ],
      },
      {
        head: ["Custo e condições", ""],
        rows: [
          ["Comissão", "1,5%."],
          ["Fidelização", "Nenhuma. Podes parar quando quiseres."],
          [
            "Dados pedidos",
            "NIF, nome do negócio e morada são, em grande parte, informação que já é pública. O número da conta bancária serve para te enviarem os euros.",
          ],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "Como começar",
        x: [
          "Escreve-nos para merchants@freemadeira.org. Vamos ter contigo à loja, configuramos tudo em conjunto e ficamos até fazeres a primeira venda. Não custa nada e não te comprometes a nada.",
        ],
      },
      {
        head: ["A favor", "A pesar"],
        rows: [
          [
            "Zero exposição à variação do preço. Contabilidade igual à de sempre. Não tens de aprender a guardar bitcoin.",
            "Há um serviço no meio, com as suas condições e uma comissão de 1,5%. Precisas de conta bancária para receber. Não ficas com bitcoin nenhum, se era isso que querias.",
          ],
        ],
        t: "table",
      },
      {
        t: "p",
        x: "E se um dia quiseres mudar? Mudas. Podes começar a receber tudo em euros e, daqui a seis meses, decidir guardar 10% em bitcoin. Ou o contrário. A configuração é tua e altera-se num minuto.",
      },
      { t: "h", x: "Caminho B — Receber em bitcoin, à maneira simples" },
      {
        t: "p",
        x: "Uma aplicação no telemóvel, cinco minutos, e já podes receber. Nestas carteiras é uma empresa que guarda o teu bitcoin — chama-se custódia. É como ter dinheiro no banco: prático, mas a chave não é tua. Para o movimento do dia a dia, é um compromisso que muita gente aceita de bom grado.",
      },
      {
        head: ["", "Blink", "Wallet of Satoshi"],
        rows: [
          [
            "Feita para",
            "Negócios com equipa",
            "Negócios de uma pessoa só, ou com a aplicação de ponto de venda para a equipa",
          ],
          ["Saldo em euros", "Sim — podes manter o valor estável", "Não"],
          [
            "Ponto de venda",
            "Sim, por link — funciona em vários telemóveis",
            "Sim, numa aplicação de ponto de venda própria, separada",
          ],
          [
            "Esconder o saldo dos empregados",
            "Sim",
            "Sim, com a aplicação de ponto de venda: quem recebe não toca no saldo nem na carteira principal do dono",
          ],
          ["Endereço Lightning", "Sim, ex. ocafe@blink.sv", "Sim"],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "Dica",
        x: [
          "Se tens empregados a receber pagamentos por ti, tanto a Blink como a aplicação de ponto de venda da Wallet of Satoshi te deixam dar-lhes acesso para receber sem lhes mostrar o saldo nem lhes permitir gastar.",
        ],
      },
      { t: "h", x: "Configurar em cinco minutos" },
      {
        t: "ol",
        x: [
          "Instala a aplicação no telemóvel do negócio.",
          "Cria a conta com o email do negócio — não uses o teu email pessoal.",
          "Define um código de acesso e ativa a impressão digital ou o rosto.",
          "Escolhe o teu endereço Lightning (ex. nomedaloja@blink.sv).",
          "Faz uma transferência de um cêntimo para veres como é.",
        ],
      },
      {
        t: "note",
        title: "O que tens de saber",
        x: [
          "Como é a empresa que guarda o teu bitcoin, o email da conta é a tua porta de entrada. Protege-o com uma palavra-passe forte e autenticação em dois passos. E não deixes acumular lá valores grandes — para poupança, passa para o caminho C.",
        ],
      },
      { t: "h", x: "Caminho C — Receber em bitcoin, com as chaves contigo" },
      {
        t: "p",
        x: "Sem intermediário nenhum. O dinheiro é teu da mesma maneira que as notas na gaveta são tuas — com a mesma liberdade e a mesma responsabilidade. Chama-se auto-custódia. Ninguém pode bloquear, congelar ou perder o teu dinheiro, porque ninguém o tem. Em troca, a cópia de segurança passa a ser um assunto teu: se a perderes, não há apoio ao cliente que a possa recuperar.",
      },
      {
        head: ["Dia a dia", "Poupança"],
        rows: [
          [
            "Carteira no telemóvel: Phoenix ou Aqua. Recebem por Lightning, são rápidas, e as chaves ficam no teu telemóvel. É aqui que entra o dinheiro das vendas.",
            "Carteira física: um BitBox02 ou equivalente, um aparelho do tamanho de uma pen, desligado da internet. É para onde mandas o que não queres gastar.",
          ],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "Onde comprar",
        x: [
          "A FREE Madeira tem uma loja com carteiras físicas e soluções de cópia de segurança: shop.freemadeira.org. Compra sempre a um revendedor de confiança ou diretamente ao fabricante — nunca em segunda mão, nunca em marketplaces.",
        ],
      },
      { t: "h", x: "As doze palavras" },
      {
        t: "p",
        x: "Quando crias uma carteira destas, ela dá-te uma lista de doze ou vinte e quatro palavras. Essas palavras são o teu dinheiro: com elas recuperas tudo em qualquer telemóvel do mundo, mesmo que o teu se parta ou seja roubado.",
      },
      {
        t: "ul",
        x: [
          "Escreve-as à mão, em papel. Duas cópias, em dois sítios diferentes.",
          "Nunca as fotografes e nunca as escrevas no telemóvel, no email ou na nuvem.",
          "Nunca as digas a ninguém. Nem a nós. Ninguém legítimo tas vai pedir.",
          "Testa a recuperação uma vez, com pouco dinheiro, antes de confiares nela a sério.",
        ],
      },
      {
        t: "note",
        title: "Sem rodeios",
        x: [
          "Se perderes as palavras e o aparelho ao mesmo tempo, o dinheiro desaparece. Não há linha de apoio, não há recuperação de palavra-passe, não há nada. É o preço da liberdade — e é por isso que só recomendamos este caminho depois de já teres alguma prática.",
        ],
      },
    ],
    collapseSections: true,
    lead: "Há três caminhos. Nenhum é melhor que os outros — depende do teu negócio.",
    num: 4,
    slug: "escolher-a-solucao",
    tier: "agora",
    title: "Escolher a solução certa para o teu negócio",
  },
];
