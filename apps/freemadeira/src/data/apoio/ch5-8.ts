import custodiaVsAutocustodia from "@/assets/images/apoio/custodia-vs-autocustodia.webp";

import type { Page } from "./types";

export const ch5to8: Page[] = [
  {
    blocks: [
      { id: "taps", t: "widget" },
      { t: "h", x: "Com o cliente à tua frente" },
      {
        t: "ol",
        x: [
          "Abre a carteira e toca em «Receber».",
          "Escreve o valor da venda. Podes escrever em euros — a app converte sozinha.",
          "Mostra-lhe o ecrã. Ele aponta a câmara ao código QR e confirma no telemóvel dele.",
          "Espera pela confirmação no teu ecrã. Só depois entregas o produto.",
        ],
      },
      {
        t: "note",
        title: "A regra de ouro",
        x: [
          "Confirma sempre no teu telemóvel, nunca no do cliente. O ecrã dele pode dizer «enviado» sem o pagamento ter chegado — e há gente que aproveita isso. Se não viste entrar na tua carteira, ainda não recebeste.",
        ],
      },
      {
        t: "note",
        title: "O que dizer ao cliente",
        x: [
          "«Com certeza, aceitamos Bitcoin. Um momento que já lhe mostro o código.» Se ele hesitar, basta: «É por Lightning, é instantâneo.» Não é preciso mais nada.",
        ],
      },
      { t: "h", x: "Os três enganos da primeira semana" },
      {
        t: "ul",
        x: [
          "Entregar antes de confirmar. É o único erro que te pode custar dinheiro. Ganha o hábito de olhar para o teu ecrã antes de entregar o troco ou o produto.",
          "Criar o pedido cedo demais. Se o cliente ainda está a decidir, o código expira e tens de fazer outro. Faz o pedido só quando souberes o valor final.",
          "Escrever o valor em bitcoin em vez de euros. Escreve sempre em euros — a app converte, e assim nunca te enganas na casa decimal.",
        ],
      },
      { t: "h", x: "Quando o cliente não está contigo" },
      {
        t: "p",
        x: "Para entregas, reservas, encomendas por Instagram ou vendas à distância. Os passos são quase os mesmos — só muda a forma como o código chega às mãos do cliente.",
      },
      {
        t: "ol",
        x: [
          "Cria o pedido de pagamento com o valor certo, como farias ao balcão.",
          "Toca em «Copiar» em vez de mostrar o ecrã.",
          "Cola no WhatsApp, no Instagram, no Messenger ou no email.",
          "O cliente cola na carteira dele e paga. Vês a confirmação do teu lado.",
        ],
      },
      {
        t: "note",
        title: "Cuidado com o relógio",
        x: [
          "Os pedidos Lightning expiram em 5 a 10 minutos. Só envies um quando souberes que a pessoa está do outro lado, pronta a pagar. Se ela vai pagar «logo à tarde», usa antes um código fixo ou o teu endereço Lightning — ver mais abaixo.",
        ],
      },
      {
        t: "p",
        x: "O mesmo método funciona para mover dinheiro entre as tuas próprias carteiras: da carteira do negócio para a carteira de poupança, ou para pagar a um fornecedor que também aceite.",
      },
      { t: "h", x: "Devoluções" },
      {
        t: "p",
        x: "Um pagamento em Bitcoin não se «cancela» — devolve-se, enviando de volta. Duas coisas a combinar com a tua equipa antes de acontecer a primeira:",
      },
      {
        t: "ul",
        x: [
          "Quem autoriza uma devolução, e a partir de que valor.",
          "Devolves o mesmo valor em euros ou a mesma quantidade de bitcoin? A maioria dos comerciantes devolve o equivalente em euros à data da compra. Escolhe uma regra, escreve-a, e aplica-a sempre.",
        ],
      },
      {
        t: "note",
        title: "Ao balcão",
        x: [
          "Se aceitares Bitcoin, deixa isso escrito na montra e no menu. Metade dos pagamentos que não acontecem é só porque o cliente não sabia que podia perguntar.",
        ],
      },
      { t: "h", x: "Quando não és tu a receber" },
      {
        t: "p",
        x: "Tens empregados ao balcão? Não precisas de lhes dar acesso à tua carteira. Há um modo próprio para isso — o modo de caixa. Quem está ao balcão consegue receber pagamentos, mas não vê o teu saldo nem consegue gastar nada. O dinheiro entra diretamente na tua carteira. É o equivalente digital de deixar alguém usar a caixa registadora sem lhe dar a chave do cofre.",
      },
      { t: "h", x: "Na Swiss Bitcoin Pay" },
      {
        t: "p",
        x: "Podes usar um dispositivo partilhado para toda a equipa, ou deixar qualquer funcionário gerar um pedido de pagamento diretamente para a carteira do cliente. Em ambos os casos, ninguém precisa do telemóvel pessoal do dono nem da carteira principal.",
      },
      { t: "h", x: "Na Blink — funciona em vários telemóveis" },
      {
        t: "ol",
        x: [
          "Abre a aplicação Blink.",
          "Toca no menu (as três linhas).",
          "Escolhe «Point of Sale». Se não aparecer, tens primeiro de definir o teu endereço Lightning.",
          "Copia o link que aparece.",
          "Envia esse link aos empregados e guarda-o nos favoritos do telemóvel de cada um.",
          "Pronto. Podes pô-lo em quantos aparelhos precisares.",
        ],
      },
      {
        t: "p",
        x: "Não é uma aplicação — é apenas uma página guardada nos favoritos. Se um empregado sair, apagas o favorito do telemóvel dele e acabou. Muitos negócios preferem ter um telemóvel ou tablet velho dedicado só a isto, sempre à caixa.",
      },
      {
        t: "h",
        x: "Na Wallet of Satoshi — aplicação de ponto de venda própria",
      },
      {
        t: "p",
        x: "A Wallet of Satoshi tem uma aplicação de ponto de venda separada e dedicada. A equipa recebe pagamentos nela sem tocar no saldo nem na carteira principal do dono, e podes até pré-programar os produtos e os preços.",
      },
      {
        t: "note",
        title: "Formar a equipa em dois minutos",
        x: [
          "Diz-lhes três coisas e está feito: (1) escrever o valor, (2) mostrar o código, (3) só entregar depois de o nosso ecrã confirmar. Se aparecer alguma dúvida estranha, é para te chamarem — não para adivinharem.",
        ],
      },
      { t: "h", x: "Receber sem criar um código de cada vez" },
      {
        t: "p",
        x: "Nem sempre dá para largar tudo e pegar no telemóvel. Se estás a cozinhar, a servir ou com as mãos ocupadas, há duas formas de receber sem tocar em nada.",
      },
      { t: "h", x: "Opção 1 — O código impresso" },
      {
        t: "p",
        x: "É um código QR fixo, sem valor associado. Imprimes uma vez, colas na parede ou no balcão, e fica lá para sempre. O cliente lê, escreve o valor no telemóvel dele e paga.",
      },
      {
        t: "ol",
        x: [
          "Abre a carteira.",
          "Procura a opção de código fixo. Na Blink chama-se «Printable Static QR Code», nas definições. Na Wallet of Satoshi o código já é fixo por natureza.",
          "Guarda a imagem ou faz uma captura de ecrã.",
          "Imprime e pendura num sítio bem visível — balcão, montra, mesa, carrinha.",
        ],
      },
      {
        t: "note",
        title: "Atenção",
        x: [
          "Como é o cliente que escreve o valor, confirma sempre no teu ecrã antes de entregar. A maior parte das pessoas é honesta; enganos acontecem a toda a gente. Vinte segundos a verificar evitam uma conversa desagradável.",
        ],
      },
      { t: "h", x: "Opção 2 — O endereço Lightning" },
      {
        t: "p",
        x: "Parece um email — por exemplo ocafe@blink.sv — e funciona como um: está sempre disponível para receber, não expira, e podes dizê-lo em voz alta ou escrevê-lo no menu. Como se diz ao cliente: «Pode enviar para ocafe@blink.sv — são 12,50 €.» E depois confirmas no teu ecrã, como sempre.",
      },
      {
        t: "ul",
        x: [
          "Um endereço Lightning não é um email. Não recebe nem envia mensagens — só dinheiro.",
          "Nem todas as carteiras sabem enviar para endereços Lightning. Se a do cliente não souber, mostra-lhe um código QR normal e resolve-se na mesma.",
        ],
      },
      {
        t: "note",
        title: "Precisas de ajuda a imprimir?",
        x: [
          "Fala connosco. Fazemos-te o autocolante com o código do teu negócio, já com a identidade «Aceitamos Bitcoin».",
        ],
      },
    ],
    lead: "Quatro toques no ecrã. É mesmo só isto.",
    num: 5,
    slug: "receber-um-pagamento",
    tier: "balcao",
    title: "Receber um pagamento, passo a passo",
  },
  {
    blocks: [
      {
        t: "p",
        x: "Os pagamentos por Lightning chegam quase sempre de imediato. Mas de vez em quando alguém diz «já paguei» e tu não vês nada no ecrã. Não te preocupes: o dinheiro não desaparece. Por vezes uma carteira está em manutenção. Segue esta ordem.",
      },
      { id: "triage", t: "widget" },
      { t: "h", x: "Os passos, explicados" },
      { t: "h", x: "Passo 1 — Ver o ecrã do cliente" },
      {
        t: "p",
        x: "Pede-lhe com naturalidade que abra a carteira e te mostre. Procuras um visto verde, um «Pago» ou um «Enviado». Algumas carteiras convertem euros para bitcoin na altura da compra e ficam uns segundos em «A enviar…» — nesse caso, espera mais um pouco.",
      },
      {
        head: ["Vês «Pago» ou «Enviado»", "Não vês nada, ou diz «A enviar…»"],
        rows: [
          ["Passa ao passo 2.", "O pagamento não saiu. Que tente outra vez."],
        ],
        t: "table",
      },
      {
        t: "note",
        title: "O que dizer",
        x: [
          "«Deixe-me só confirmar deste lado, às vezes demora um bocadinho.» Sem drama, sem acusações.",
        ],
      },
      { t: "h", x: "Passo 2 — Ver o tipo de pagamento" },
      {
        t: "p",
        x: "Pede-lhe para tocar no pagamento e olha para o início daquela linha comprida de letras e números.",
      },
      {
        t: "ul",
        x: [
          "Começa por ln → foi Lightning. Se lhe deste um pedido Lightning e mesmo assim não chegou, a causa costuma ser uma destas: o pedido expirou, houve uma falha de rede, ou a carteira dele não conseguiu ligar-se. Nesses casos o dinheiro volta sozinho à carteira dele em pouco tempo. Pede-lhe para verificar o saldo e faz um pedido novo.",
          "Começa por bc1, 1 ou 3 → foi on-chain. Se lhe tinhas dado um pedido Lightning, este pagamento não vai chegar: é um caminho diferente. Terá de tentar de novo por Lightning.",
        ],
      },
      {
        t: "note",
        title: "O que dizer",
        x: ["«Se calhar voltou para trás — pode ver o saldo, se faz favor?»"],
      },
      { t: "h", x: "Passo 3 — O identificador da transação" },
      {
        t: "p",
        x: "Todo o pagamento tem um identificador único (às vezes chamado hash). Se o cliente garante que enviou, o dinheiro não voltou e tu continuas sem ver nada:",
      },
      {
        t: "ol",
        x: [
          "Pede-lhe para tocar no pagamento e procurar essa linha longa de letras e números. Nas carteiras mais comuns é fácil de encontrar.",
          "Se não houver identificador, o pagamento não saiu — o dinheiro continua com ele.",
          "Se houver, verifica primeiro a tua ligação à internet. Se estiver tudo bem do teu lado, pede ao cliente uma cópia da fatura ou do comprovativo, guarda o identificador e envia-os para a FREE até ao fim do dia. Nós falamos diretamente com o prestador do serviço. A Swiss Bitcoin Pay já devolveu dinheiro a comerciantes em situações assim. É muito raro, mas resolve-se.",
        ],
      },
      { t: "h", x: "Passo 4 — Se foi on-chain, respira" },
      {
        t: "p",
        x: "Pagamentos on-chain demoram 10 minutos ou mais, conforme o trânsito da rede. Não está perdido — está à espera de confirmação. Combina com o cliente: ou espera contigo, ou trocam contactos e resolvem quando entrar.",
      },
      {
        t: "note",
        title: "Estamos aqui para isto",
        x: [
          "Se ficares mesmo encravado, escreve para merchants@freemadeira.org ou passa pelo grupo de apoio a comerciantes no WhatsApp (ligação em baixo). Há sempre alguém que já passou pelo mesmo, e já ajudámos muitos comerciantes em situações exatamente destas.",
        ],
      },
    ],
    lead: "É raro. E quase sempre resolve-se em dois minutos.",
    num: 6,
    slug: "pagamento-nao-chegou",
    tier: "balcao",
    title: "E se o pagamento não chegar?",
  },
  {
    blocks: [
      {
        t: "p",
        x: "Todas as carteiras de Bitcoin fazem a mesma coisa: recebem e enviam. A diferença que importa é outra — quem tem a chave. Ou é uma empresa, ou és tu. Não há meio-termo.",
      },
      {
        alt: "À esquerda, uma empresa guarda o dinheiro num cofre: a empresa tem a chave. À direita, uma pessoa com a chave e o cofre: a chave é tua, só tu abres.",
        caption:
          "À esquerda, uma empresa guarda o teu dinheiro e passa-to quando lho pedes. À direita, ninguém está entre ti e o que é teu.",
        src: custodiaVsAutocustodia,
        t: "img",
      },
      {
        t: "p",
        x: "Nenhuma das duas está errada. Muitos comerciantes usam as duas ao mesmo tempo: a custodial para o movimento diário, a de auto-custódia para o que querem guardar. É exatamente o que se faz com a caixa do dia e o cofre. A auto-custódia é também onde queremos que todos os comerciantes acabem por chegar; quando estiveres pronto, acompanhamos-te nesse passo.",
      },
      {
        head: ["", "Custodial", "Auto-custódia"],
        rows: [
          ["Quem tem a chave", "A empresa", "Só tu"],
          ["Exemplos", "Blink, Wallet of Satoshi", "Phoenix, Aqua, BitBox02"],
          ["Começar", "Cinco minutos", "Meia hora, com calma"],
          [
            "Segurança",
            "A empresa trata disso",
            "A cópia de segurança é contigo",
          ],
          [
            "Se correr mal",
            "Falas com o apoio ao cliente",
            "Só as tuas palavras te salvam",
          ],
          [
            "Melhor para",
            "O dia a dia do balcão",
            "Poupança e valores maiores",
          ],
        ],
        t: "table",
      },
      {
        t: "p",
        x: "A pergunta útil não é «qual é melhor?», mas «quanto é que estou disposto a ter em cada uma?». A resposta da maioria dos comerciantes: na custodial só o do dia, e o resto na outra.",
      },
      { t: "h", x: "Cinco hábitos que resolvem quase tudo" },
      {
        t: "ol",
        x: [
          "Põe código no telemóvel e na carteira. Impressão digital ou rosto, se o aparelho tiver. Nada de 1234 nem 0000.",
          "Protege o email da conta. Nas carteiras custodial, quem entra no teu email entra no teu dinheiro. Palavra-passe única e autenticação em dois passos.",
          "Esconde o saldo. Quase todas as carteiras têm um botão em forma de olho. Ao balcão, mantém-no fechado — e usa o modo de caixa para a equipa.",
          "Separa o dia a dia da poupança. Na carteira do balcão fica só o que precisas para o dia. O resto passa para a carteira de poupança, todas as semanas.",
          "Se a carteira te deu palavras, escreve-as em papel. Duas cópias, dois sítios, nunca no telemóvel nem numa fotografia.",
        ],
      },
      {
        t: "note",
        title: "Burlas — a única regra que precisas",
        x: [
          "Ninguém legítimo te pede as tuas palavras de recuperação. Nem o apoio ao cliente da carteira, nem a FREE Madeira, nem alguém que diga que te vem «ajudar a desbloquear». Quem tas pedir está a tentar roubar-te. Sem exceções.",
        ],
      },
      {
        t: "note",
        title: "Rotina de sexta-feira",
        x: [
          "Cinco minutos, sempre no mesmo dia: passar para a poupança o que não precisas no balcão, e confirmar que ninguém que já saiu continua com o link da caixa no telemóvel.",
        ],
      },
    ],
    lead: "A pergunta que separa todas as carteiras em dois grupos.",
    num: 7,
    slug: "quem-guarda-as-chaves",
    tier: "depois",
    title: "Quem guarda as chaves? Manter os teus bitcoins seguros",
  },
  {
    blocks: [
      { t: "h", x: "Converter para euros" },
      {
        t: "p",
        x: "Se precisas de euros para pagar fornecedores, salários ou a renda, converte. Se estiveres no caminho A, isto acontece sozinho. Nos outros casos, a própria carteira costuma ter essa opção, ou podes trocar diretamente com alguém da comunidade.",
      },
      { t: "h", x: "Gastar em negócios locais" },
      {
        t: "p",
        x: "É a que mais gostamos de ver, e a que faz diferença na ilha. São mais de 170 negócios na Madeira — cafés, restaurantes, alojamentos, serviços. Vê no BTC Map quem está perto de ti. Muitas vezes o teu próprio fornecedor já aceita e nenhum dos dois sabia.",
      },
      { t: "h", x: "Guardar uma parte" },
      {
        t: "p",
        x: "Há quem deixe uma percentagem fixa de cada venda a dormir na carteira de poupança e não volte a olhar. Sem calendário, sem verificar o preço todos os dias, sem ansiedade. Se fizeres isto, faz com uma quantia que não te faça falta.",
      },
      { t: "h", x: "Pagar a fornecedores e à equipa" },
      {
        t: "p",
        x: "Se um fornecedor aceitar, podes pagar-lhe diretamente. Alguns comerciantes pagam também uma parte, combinada, a quem trabalha com eles e quer experimentar. Deve ser sempre por acordo, nunca imposto, e a contabilidade continua a ser feita em euros.",
      },
      {
        t: "note",
        title: "Uma palavra sobre o preço",
        x: [
          "O preço do Bitcoin em euros varia. Se guardares uma parte, o valor em euros da tua poupança vai subir e descer. Não recomendamos que ponhas lá dinheiro de que possas precisar no mês seguinte, e não te dizemos quanto deves guardar — isso é decisão tua, e de mais ninguém.",
        ],
      },
      {
        t: "note",
        title: "Vem falar com outros comerciantes",
        x: [
          "O meetup da FREE Madeira é na última quarta-feira de cada mês, às 18:30. Entrada livre. É o sítio certo para ouvir o que os outros fazem — e para reclamares connosco se alguma coisa não estiver a correr bem.",
        ],
      },
    ],
    lead: "Não tens de escolher só uma coisa. A maioria dos comerciantes mistura, e vai ajustando com o tempo.",
    num: 8,
    slug: "o-que-fazer-com-os-bitcoins",
    tier: "depois",
    title: "O que fazer com os bitcoins que recebes",
  },
];
