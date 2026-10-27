import type { Locale } from "@freemadeira/i18n";

import { routes } from "@/i18n/routes";

type Copy = Record<Locale, string>;

export interface Faq {
  /** Trusted HTML: a paragraph, or titled paragraphs. */
  answer: Copy | { body: Copy; title: Copy }[];
  question: Copy;
}

export interface FaqTopic {
  questions: Faq[];
  topic: Copy;
}

const { atlasMusicFestival, home, plan, satelliteEvents } = routes;
const email = (address: string) => `<a href="mailto:${address}">${address}</a>`;

/** The 2024 FAQ, by topic. */
export const faqs: FaqTopic[] = [
  {
    questions: [
      {
        answer: {
          en: "Bitcoin Atlantis is a Bitcoin-only conference in the middle of the Atlantic, in Madeira Island. A three-day experience happening at Marítimo Stadium that will bring together bitcoiners, companies, investors, and some of the most innovative projects in this ecosystem.",
          pt: "O Bitcoin Atlantis é uma conferência exclusivamente sobre Bitcoin no meio do Atlântico, na ilha da Madeira. Uma experiência de três dias no Estádio do Marítimo que junta bitcoiners, empresas, investidores e alguns dos projetos mais inovadores deste ecossistema.",
        },
        question: {
          en: "What is Bitcoin Atlantis?",
          pt: "O que é o Bitcoin Atlantis?",
        },
      },
      {
        answer: {
          en: "No. Bitcoin Atlantis is a Bitcoin-only event.",
          pt: "Não. O Bitcoin Atlantis é um evento exclusivamente sobre Bitcoin.",
        },
        question: {
          en: "Will other cryptocurrencies be discussed at the conference?",
          pt: "Vão ser discutidas outras criptomoedas na conferência?",
        },
      },
      {
        answer: [
          {
            body: {
              en: "You have gone down the rabbit hole and are well aware of Bitcoin's potential to reshape the financial world. You want to keep up to date with the latest developments in the field, interact with like-minded people, and look for new opportunities in technology investment, among others.",
              pt: "Já entraste na toca do coelho e conheces bem o potencial do Bitcoin para transformar o mundo financeiro. Queres estar a par das últimas novidades, conviver com pessoas com os mesmos interesses e procurar novas oportunidades de investimento em tecnologia, entre outras.",
            },
            title: { en: "Bitcoiners", pt: "Bitcoiners" },
          },
          {
            body: {
              en: "You want to know more about Bitcoin, its potential to improve societies the world over and how this technology impacts the development of new digital tools.",
              pt: "Queres saber mais sobre o Bitcoin, o seu potencial para melhorar sociedades em todo o mundo e o impacto desta tecnologia no desenvolvimento de novas ferramentas digitais.",
            },
            title: { en: "Beginners", pt: "Principiantes" },
          },
          {
            body: {
              en: "You are not yet familiar with Bitcoin but have a taste for technology or financial investment. You are curious to understand how Bitcoin can impact the local economy and how you can benefit from this technology.",
              pt: "Ainda não conheces bem o Bitcoin, mas tens interesse por tecnologia ou investimento. Tens curiosidade em perceber o impacto que o Bitcoin pode ter na economia local e como podes beneficiar desta tecnologia.",
            },
            title: { en: "Locals", pt: "Residentes" },
          },
          {
            body: {
              en: "We are a family-friendly event, with activities for grown-ups and children! Madeira Island is perfect for a family vacation. Bring your family and enjoy both Madeira and Bitcoin Atlantis!",
              pt: "Somos um evento para toda a família, com atividades para graúdos e miúdos! A ilha da Madeira é perfeita para umas férias em família. Traz a tua família e aproveita a Madeira e o Bitcoin Atlantis!",
            },
            title: { en: "Families", pt: "Famílias" },
          },
        ],
        question: {
          en: "Who is Bitcoin Atlantis for?",
          pt: "A quem se destina o Bitcoin Atlantis?",
        },
      },
      {
        answer: {
          en: `Bitcoin Atlantis 2024 will happen from the 1st to the 3rd of March in Funchal. Some <a href="${satelliteEvents.en}">Satellite Events</a> will happen in the days around the Conference (both before and after). <a href="${home.en}#programme">Check the programme</a> for more information.`,
          pt: `O Bitcoin Atlantis 2024 decorre de 1 a 3 de março, no Funchal. Alguns <a href="${satelliteEvents.pt}">eventos satélite</a> acontecem nos dias à volta da conferência (antes e depois). <a href="${home.pt}#programme">Consulta o programa</a> para mais informações.`,
        },
        question: {
          en: "When and where is Bitcoin Atlantis happening?",
          pt: "Quando e onde se realiza o Bitcoin Atlantis?",
        },
      },
      {
        answer: {
          en: "All payments will be made in Bitcoin.",
          pt: "Todos os pagamentos são feitos em Bitcoin.",
        },
        question: {
          en: "What payment methods will be available at the event?",
          pt: "Que métodos de pagamento vão estar disponíveis no evento?",
        },
      },
      {
        answer: {
          en: "Everyone starts from the beginning. There will be a Bitcoin ATM where you can exchange your fiat tokens for the best money humanity has engineered. If you're a resident in Madeira you can buy the Layer 1 ticket and get 21€ back in bitcoin (in a Bolt Card).",
          pt: "Toda a gente começa do início. Vai haver uma ATM de Bitcoin onde podes trocar os teus tokens fiat pelo melhor dinheiro que a humanidade já criou. Se és residente na Madeira, podes comprar o bilhete Layer 1 e receber 21€ de volta em bitcoin (num Bolt Card).",
        },
        question: {
          en: "What if I don't have bitcoin?",
          pt: "E se eu não tiver bitcoin?",
        },
      },
      {
        answer: {
          en: "Yes, it will be possible to buy or charge a Bolt Card in designated places located in the venue.",
          pt: "Sim, vai ser possível comprar ou carregar um Bolt Card em locais assinalados no recinto.",
        },
        question: {
          en: "Can I buy or charge a Bolt Card at the Venue?",
          pt: "Posso comprar ou carregar um Bolt Card no recinto?",
        },
      },
      {
        answer: {
          en: "Yes, free wi-fi will be available throughout the venue.",
          pt: "Sim, vai haver wi-fi gratuito em todo o recinto.",
        },
        question: {
          en: "Will there be free Wi-Fi?",
          pt: "Vai haver Wi-Fi gratuito?",
        },
      },
      {
        answer: {
          en: 'Yes, please <a href="https://forms.gle/xe782H5k82khTP5ZA">fill in this form</a> and someone from the Bitcoin Atlantis team will contact you. Thank you :)',
          pt: 'Sim, <a href="https://forms.gle/xe782H5k82khTP5ZA">preenche este formulário</a> e alguém da equipa do Bitcoin Atlantis vai entrar em contacto contigo. Obrigado :)',
        },
        question: {
          en: "Can I be a volunteer at Bitcoin Atlantis?",
          pt: "Posso ser voluntário no Bitcoin Atlantis?",
        },
      },
    ],
    topic: { en: "General", pt: "Geral" },
  },
  {
    questions: [
      {
        answer: {
          en: `Bitcoin Atlantis will happen on March 1st, 2nd, and 3rd, from 9 a.m. to 6 p.m. We are also having several Satellite Events outside the conference days that you may want to participate in. For more information check the <a href="${satelliteEvents.en}">Satellite Events Programme</a>.`,
          pt: `O Bitcoin Atlantis decorre a 1, 2 e 3 de março, das 9h às 18h. Também temos vários eventos satélite fora dos dias da conferência em que podes querer participar. Para mais informações, consulta o <a href="${satelliteEvents.pt}">programa de eventos satélite</a>.`,
        },
        question: {
          en: "How long is the Conference?",
          pt: "Quanto tempo dura a conferência?",
        },
      },
      {
        answer: {
          en: "Absolutely! Many Satellite Events will be scheduled on different days, before and after the conference. Besides that, Madeira Island is worth staying longer! There are many activities and places to explore on the island. If you can, schedule a 1-week stay. Between the conference, the views, the food, and the weather, you will wish you'd stayed longer!",
          pt: "Sem dúvida! Muitos eventos satélite estão marcados para outros dias, antes e depois da conferência. Além disso, a ilha da Madeira merece uma estadia mais longa! Há muitas atividades e sítios para explorar na ilha. Se puderes, fica uma semana. Entre a conferência, as vistas, a comida e o clima, vais querer ter ficado mais tempo!",
        },
        question: {
          en: "Should I stay longer than the Conference days?",
          pt: "Devo ficar mais tempo do que os dias da conferência?",
        },
      },
      {
        answer: {
          en: `Ideally, you should stay in Funchal, closer to the conference venue – Marítimo Stadium. We have various partners with special prices for Bitcoin Atlantis attendees, please check them out <a href="${plan.en}#accommodation">here</a>.`,
          pt: `O ideal é ficares no Funchal, mais perto do recinto da conferência, o Estádio do Marítimo. Temos vários parceiros com preços especiais para os participantes do Bitcoin Atlantis: consulta-os <a href="${plan.pt}#accommodation">aqui</a>.`,
        },
        question: {
          en: "Where should I stay in Madeira?",
          pt: "Onde devo ficar na Madeira?",
        },
      },
    ],
    topic: { en: "Agenda", pt: "Agenda" },
  },
  {
    questions: [
      {
        answer: {
          en: "Satellite Events are parallel events to the Conference, made for bitcoiners, but with a leisure nature. These events may or may not be organized by the Bitcoin Atlantis Team.",
          pt: "Os eventos satélite são eventos paralelos à conferência, pensados para bitcoiners, mas de caráter lúdico. Podem ou não ser organizados pela equipa do Bitcoin Atlantis.",
        },
        question: {
          en: "What are Satellite Events?",
          pt: "O que são eventos satélite?",
        },
      },
      {
        answer: {
          en: `Satellite Events are happening before, after and through the days of the Conference, from February 27th to March 5th, around Madeira Island. For more information check the <a href="${satelliteEvents.en}">Satellite Events</a> page.`,
          pt: `Os eventos satélite decorrem antes, depois e durante os dias da conferência, de 27 de fevereiro a 5 de março, por toda a ilha da Madeira. Para mais informações, consulta a página de <a href="${satelliteEvents.pt}">eventos satélite</a>.`,
        },
        question: {
          en: "When and where are the Satellite Events happening?",
          pt: "Quando e onde decorrem os eventos satélite?",
        },
      },
      {
        answer: {
          en: `Each Satellite Event has its own ticket and admission, you can check more details and prices <a href="${satelliteEvents.en}">here</a>. Some are free to participate. Layer 3 tickets include access to the Mega Pleb Dinner and Atlas Music Festival.`,
          pt: `Cada evento satélite tem o seu próprio bilhete e regras de entrada; consulta mais detalhes e preços <a href="${satelliteEvents.pt}">aqui</a>. Alguns são gratuitos. Os bilhetes Layer 3 incluem acesso ao Mega Pleb Dinner e ao Atlas Music Festival.`,
        },
        question: {
          en: "Does the Conference ticket include access to the Satellite Events?",
          pt: "O bilhete da conferência inclui acesso aos eventos satélite?",
        },
      },
      {
        answer: {
          en: `Please check the <a href="${satelliteEvents.en}">Satellite Events</a> page for more information regarding each event.`,
          pt: `Consulta a página de <a href="${satelliteEvents.pt}">eventos satélite</a> para mais informações sobre cada evento.`,
        },
        question: {
          en: "Are Satellite Events free?",
          pt: "Os eventos satélite são gratuitos?",
        },
      },
    ],
    topic: { en: "Satellite Events", pt: "Eventos satélite" },
  },
  {
    questions: [
      {
        answer: {
          en: `Atlas Music Festival is a 1-night Satellite Event dedicated to music. It will happen on the 2nd of March in Quinta Magnólia from 6 pm to 1 am. Tickets cost 29€ and are available <a href="${atlasMusicFestival.en}">here</a>.`,
          pt: `O Atlas Music Festival é um evento satélite de uma noite dedicado à música. Decorre a 2 de março, na Quinta Magnólia, das 18h à 1h. Os bilhetes custam 29€ e estão disponíveis <a href="${atlasMusicFestival.pt}">aqui</a>.`,
        },
        question: {
          en: "What is the Atlas Music Festival?",
          pt: "O que é o Atlas Music Festival?",
        },
      },
      {
        answer: {
          en: "Theo Katzman, Joe Martin, The Higher Low and NAPA are already confirmed. More announcements will happen in the following weeks. Please subscribe to our newsletter and follow us on social media for more updates.",
          pt: "Theo Katzman, Joe Martin, The Higher Low e NAPA já estão confirmados. Haverá mais anúncios nas próximas semanas. Subscreve a nossa newsletter e segue-nos nas redes sociais para mais novidades.",
        },
        question: {
          en: "Who will be playing at Atlas Music Festival?",
          pt: "Quem vai tocar no Atlas Music Festival?",
        },
      },
      {
        answer: {
          en: "Children up to 5 years old can enter for free at the Festival.",
          pt: "As crianças até aos 5 anos entram gratuitamente no festival.",
        },
        question: {
          en: "Do I have to buy tickets for my children?",
          pt: "Tenho de comprar bilhete para os meus filhos?",
        },
      },
    ],
    topic: { en: "Atlas Music Festival", pt: "Atlas Music Festival" },
  },
  {
    questions: [
      {
        answer: {
          en: "The Layer 1 ticket is exclusive to Madeira residents. One of our goals is to promote Bitcoin locally, so we are welcoming all locals with a special price! Proof of residency will be mandatory for accreditation.",
          pt: "O bilhete Layer 1 é exclusivo para residentes na Madeira. Um dos nossos objetivos é promover o Bitcoin localmente, por isso recebemos todos os residentes com um preço especial! O comprovativo de residência é obrigatório na acreditação.",
        },
        question: {
          en: "For whom are Layer 1 tickets intended?",
          pt: "A quem se destinam os bilhetes Layer 1?",
        },
      },
      {
        answer: {
          en: "A Layer 1/Layer 2 ticket gives you General Access to the Conference: Main Stage, Open Source Stage, Food Court, Lounge Area, Exhibition Hall, Kids Area, art exhibitions, live music and other surprises to come! Please subscribe to our newsletter to know more.",
          pt: "Um bilhete Layer 1/Layer 2 dá-te acesso geral à conferência: palco principal, palco Open Source, zona de restauração, lounge, área de exposição, espaço para crianças, exposições de arte, música ao vivo e outras surpresas! Subscreve a nossa newsletter para saberes mais.",
        },
        question: {
          en: "I have a General Admission (Layer 1/Layer 2) ticket. What can I access with my ticket?",
          pt: "Tenho um bilhete de entrada geral (Layer 1/Layer 2). A que tenho acesso com o meu bilhete?",
        },
      },
      {
        answer: {
          en: "A Layer 3 ticket gives you access to all General Admission features and also allows you to access the VIP lounge, be in the first row at both stages, participate in the Mega Pleb Dinner, and enter the Atlas Music Festival. Food & beverages on us in the dedicated lounge area, sponsor perks and more surprises to come! Please subscribe to our newsletter to know more.",
          pt: "Um bilhete Layer 3 dá-te acesso a tudo o que inclui a entrada geral e ainda ao lounge VIP, à primeira fila nos dois palcos, ao Mega Pleb Dinner e ao Atlas Music Festival. Comida e bebida por nossa conta no lounge dedicado, vantagens dos patrocinadores e mais surpresas! Subscreve a nossa newsletter para saberes mais.",
        },
        question: {
          en: "I have a Layer 3 ticket. What can I access with my ticket?",
          pt: "Tenho um bilhete Layer 3. A que tenho acesso com o meu bilhete?",
        },
      },
      {
        answer: {
          en: "Kids up to 16 years old have free General Access to the Conference. Note that they still have to pass through accreditation. Check the Kids Area section to see how they can participate in the Conference.",
          pt: "As crianças até aos 16 anos têm acesso geral gratuito à conferência. Atenção que têm na mesma de passar pela acreditação. Consulta a secção do espaço para crianças para veres como podem participar na conferência.",
        },
        question: {
          en: "Do I have to buy tickets for my children?",
          pt: "Tenho de comprar bilhete para os meus filhos?",
        },
      },
      {
        answer: {
          en: "To have free General Access to the Conference, your child will have to be 16 years old on March 1st.",
          pt: "Para ter acesso geral gratuito à conferência, o teu filho tem de ter 16 anos a 1 de março.",
        },
        question: {
          en: "My child is turning 17 on the previous days of the Conference. Do I have to buy a ticket for them?",
          pt: "O meu filho faz 17 anos nos dias antes da conferência. Tenho de lhe comprar bilhete?",
        },
      },
      {
        answer: {
          en: "Tickets are sent to you via email, right after you purchase them. If you decide not to share your email address with us, you can download the ticket(s) at the moment of the purchase.",
          pt: "Os bilhetes são enviados por email logo após a compra. Se preferires não partilhar o teu email connosco, podes descarregar o(s) bilhete(s) no momento da compra.",
        },
        question: {
          en: "When will I receive my ticket for the conference?",
          pt: "Quando recebo o meu bilhete para a conferência?",
        },
      },
      {
        answer: { en: "No.", pt: "Não." },
        question: {
          en: "Is there an Industry Pass for Bitcoin Atlantis 2024?",
          pt: "Há um passe profissional (Industry Pass) para o Bitcoin Atlantis 2024?",
        },
      },
      {
        answer: {
          en: "No. If you can't attend the conference you can give away or sell your ticket to someone else.",
          pt: "Não. Se não puderes ir à conferência, podes oferecer ou vender o teu bilhete a outra pessoa.",
        },
        question: {
          en: "Are the tickets linked to a person?",
          pt: "Os bilhetes são nominais?",
        },
      },
      {
        answer: {
          en: "Tickets are non-refundable but, as they are not linked to an individual, you can give them away or resell them to someone else.",
          pt: "Os bilhetes não são reembolsáveis mas, como não são nominais, podes oferecê-los ou revendê-los a outra pessoa.",
        },
        question: {
          en: "Are the tickets refundable?",
          pt: "Os bilhetes são reembolsáveis?",
        },
      },
      {
        answer: {
          en: "When you check in at the conference, and we can confirm you are a resident, you'll be given a Bolt Card with 21€ in bitcoin.",
          pt: "Quando fizeres o check-in na conferência e confirmarmos que és residente, recebes um Bolt Card com 21€ em bitcoin.",
        },
        question: {
          en: "I bought a Layer 1 ticket (Madeira residents); how can I have my 21€ back in bitcoin?",
          pt: "Comprei um bilhete Layer 1 (residentes na Madeira); como recebo os meus 21€ de volta em bitcoin?",
        },
      },
      {
        answer: {
          en: "The 21€ in Bitcoin can be spent anywhere that accepts Bitcoin, including at the conference. After the conference is finished, you can send the remaining sats to your own lightning wallet.",
          pt: "Os 21€ em Bitcoin podem ser gastos em qualquer sítio que aceite Bitcoin, incluindo na conferência. Depois da conferência, podes enviar os sats que sobrarem para a tua carteira lightning.",
        },
        question: {
          en: "I bought a Layer 1 ticket (Madeira residents), where and when will I be able to spend the 21€ in bitcoin?",
          pt: "Comprei um bilhete Layer 1 (residentes na Madeira); onde e quando posso gastar os 21€ em bitcoin?",
        },
      },
      {
        answer: {
          en: `Yes, you are able to upgrade your ticket. Send us an e-mail to ${email("info@bitcoinatlantis.com")}.`,
          pt: `Sim, podes fazer upgrade do teu bilhete. Envia-nos um email para ${email("info@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "Can I upgrade my tickets?",
          pt: "Posso fazer upgrade dos meus bilhetes?",
        },
      },
      {
        answer: {
          en: "Yes, as they are not linked to an individual, you can transfer them to someone else.",
          pt: "Sim, como não são nominais, podes transferi-los para outra pessoa.",
        },
        question: {
          en: "Can I transfer my tickets to someone else?",
          pt: "Posso transferir os meus bilhetes para outra pessoa?",
        },
      },
      {
        answer: {
          en: "Yes, just choose bitcoin as a payment method at checkout.",
          pt: "Sim, basta escolheres bitcoin como método de pagamento no checkout.",
        },
        question: {
          en: "Can I pay for my tickets in bitcoin?",
          pt: "Posso pagar os bilhetes em bitcoin?",
        },
      },
      {
        answer: {
          en: "You go to the Ticket Office or the Accreditation Booth, and the team scan your ticket and gives you the corresponding wristband. This wristband is for the 3 days of the event, please keep it on your wrist until the end of the Conference.",
          pt: "Diriges-te à bilheteira ou ao balcão de acreditação, onde a equipa lê o teu bilhete e te entrega a pulseira correspondente. A pulseira serve para os 3 dias do evento: mantém-na no pulso até ao fim da conferência.",
        },
        question: {
          en: "How does the accreditation work?",
          pt: "Como funciona a acreditação?",
        },
      },
    ],
    topic: { en: "Tickets", pt: "Bilhetes" },
  },
  {
    questions: [
      {
        answer: {
          en: `Layer 3 tickets include access to the Mega Pleb Dinner and Atlas Music Festival. Your conference wristband will grant you access to both of these events. To access other Satellite Events, you will have to register for each event. Please check the <a href="${satelliteEvents.en}">Satellite Events</a> page to find out how to register.`,
          pt: `Os bilhetes Layer 3 incluem acesso ao Mega Pleb Dinner e ao Atlas Music Festival. A pulseira da conferência dá-te acesso a ambos. Para outros eventos satélite, tens de te inscrever em cada um. Consulta a página de <a href="${satelliteEvents.pt}">eventos satélite</a> para saberes como.`,
        },
        question: {
          en: "I have a Layer 3 Ticket, how do I access the Satellite Events?",
          pt: "Tenho um bilhete Layer 3; como acedo aos eventos satélite?",
        },
      },
      {
        answer: {
          en: "Your conference wristband will give you access to the festival.",
          pt: "A pulseira da conferência dá-te acesso ao festival.",
        },
        question: {
          en: "I have a Layer 3 Ticket, how do I access Atlas Music Festival?",
          pt: "Tenho um bilhete Layer 3; como acedo ao Atlas Music Festival?",
        },
      },
      {
        answer: {
          en: `No. If you wish to take part in the Holecoiner Golf Challenge you must pay a registration fee. Find out more <a href="${satelliteEvents.en}#holecoiner">here</a>.`,
          pt: `Não. Para participares no torneio de golfe Holecoiner tens de pagar uma taxa de inscrição. Sabe mais <a href="${satelliteEvents.pt}#holecoiner">aqui</a>.`,
        },
        question: {
          en: "Is the Holecoiner Golf Challenge participation included for the Layer 3 Tickets owners?",
          pt: "A participação no torneio de golfe Holecoiner está incluída para quem tem bilhete Layer 3?",
        },
      },
    ],
    topic: { en: "Layer 3 Tickets", pt: "Bilhetes Layer 3" },
  },
  {
    questions: [
      {
        answer: {
          en: "The Marítimo Stadium will have several spaces dedicated to improving your Bitcoin Atlantis Experience: Satoshi Stage by NYDIG, Open Source Stage, Food Court, Pleb Lounge, Exhibition Hall, Art Gallery, Workshop Spaces, Wolf Lounge, Kids Block, Media Room, Podcast Studios, Private Meeting Rooms, and much more!",
          pt: "O Estádio do Marítimo vai ter vários espaços pensados para melhorar a tua experiência no Bitcoin Atlantis: Satoshi Stage by NYDIG, palco Open Source, zona de restauração, Pleb Lounge, área de exposição, galeria de arte, espaços de workshop, Wolf Lounge, espaço para crianças, sala de imprensa, estúdios de podcast, salas de reunião privadas e muito mais!",
        },
        question: {
          en: "What spaces are available at the Conference?",
          pt: "Que espaços há na conferência?",
        },
      },
      {
        answer: {
          en: "The Kids Area is prepared to receive your children (from 1 to 16 years old), while you are enjoying the rest of the Conference. There will be tutors, much play and Bitcoin educational moments! The space will be divided into two rooms, for two different age groups: from 1 to 6 years old and from 7 to 16 years old. There is no prior registration and there will be a capacity limit for each room.",
          pt: "O espaço para crianças está preparado para receber os teus filhos (dos 1 aos 16 anos) enquanto aproveitas o resto da conferência. Vai haver monitores, muita brincadeira e momentos educativos sobre Bitcoin! O espaço divide-se em duas salas, para duas faixas etárias: dos 1 aos 6 anos e dos 7 aos 16 anos. Não há inscrição prévia e cada sala tem lotação limitada.",
        },
        question: {
          en: "What is the Kids Area and what will happen in this space?",
          pt: "O que é o espaço para crianças e o que acontece lá?",
        },
      },
      {
        answer: {
          en: `The Exhibition Hall is a business fair, where you can share your business services or products (Bitcoin only!) and be in direct contact with the conference participants. A great opportunity to connect with new customers and do some networking. This space will be available for the public on the conference days, from 9 am to 6 pm. To become an exhibitor and have access to booth prices, please contact us at ${email("info@bitcoinatlantis.com")}.`,
          pt: `A área de exposição é uma feira de negócios onde podes dar a conhecer os serviços ou produtos da tua empresa (só Bitcoin!) e contactar diretamente com os participantes da conferência. Uma ótima oportunidade para chegar a novos clientes e fazer networking. O espaço está aberto ao público nos dias da conferência, das 9h às 18h. Para seres expositor e conheceres os preços dos stands, contacta-nos em ${email("info@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "What is the Exhibition Hall and how can I become an Exhibitor?",
          pt: "O que é a área de exposição e como posso ser expositor?",
        },
      },
      {
        answer: {
          en: `Meeting rooms are perfect for taking advantage of the Conference days to connect with partners or simply meet in person with your team. You can book a meeting room in the morning/afternoon block, from 9 am – 1 pm and 2 pm – 6 pm. To book a private room, please contact us at ${email("info@bitcoinatlantis.com")}.`,
          pt: `As salas de reunião são perfeitas para aproveitar os dias da conferência e reunir com parceiros ou simplesmente encontrar-te pessoalmente com a tua equipa. Podes reservar uma sala no bloco da manhã ou da tarde, das 9h às 13h e das 14h às 18h. Para reservar uma sala privada, contacta-nos em ${email("info@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "How can I book a Private Meeting Room?",
          pt: "Como posso reservar uma sala de reunião privada?",
        },
      },
      {
        answer: {
          en: `The podcast studio is a private room equipped with audio gear. It's booked upon request and subject to availability. You can book 2 hour blocks. For more information, please contact us at ${email("info@bitcoinatlantis.com")}.`,
          pt: `O estúdio de podcast é uma sala privada equipada com material de áudio. A reserva é feita a pedido e sujeita a disponibilidade, em blocos de 2 horas. Para mais informações, contacta-nos em ${email("info@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "Can I book the Podcast Studio?",
          pt: "Posso reservar o estúdio de podcast?",
        },
      },
    ],
    topic: { en: "Venue", pt: "Recinto" },
  },
  {
    questions: [
      {
        answer: {
          en: `The Marítimo Stadium is prepared for your circulation if you have reduced mobility or are in a wheelchair. Feel free to contact us for more details, at ${email("info@bitcoinatlantis.com")}.`,
          pt: `O Estádio do Marítimo está preparado para a circulação de pessoas com mobilidade reduzida ou em cadeira de rodas. Para mais detalhes, contacta-nos em ${email("info@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "Is the venue reduced-mobility-friendly?",
          pt: "O recinto está adaptado a pessoas com mobilidade reduzida?",
        },
      },
      {
        answer: {
          en: "Animals are not permitted in the venue, unless it's an assistance animal.",
          pt: "Não são permitidos animais no recinto, exceto animais de assistência.",
        },
        question: {
          en: "Can I bring an animal to the conference?",
          pt: "Posso levar um animal à conferência?",
        },
      },
    ],
    topic: { en: "Accessibility", pt: "Acessibilidade" },
  },
  {
    questions: [
      {
        answer: {
          en: `Please complete <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2QOQWOY7IaGVvE_h8u7bqNZCqJDVnlO4lyN7Xzz2OlL0j4w/viewform">this form</a> to apply for a free press pass for the Bitcoin Atlantis Conference, in Funchal, Madeira. For more information please contact ${email("press@bitcoinatlantis.com")}.`,
          pt: `Preenche <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2QOQWOY7IaGVvE_h8u7bqNZCqJDVnlO4lyN7Xzz2OlL0j4w/viewform">este formulário</a> para pedir um passe de imprensa gratuito para a conferência Bitcoin Atlantis, no Funchal, Madeira. Para mais informações, contacta ${email("press@bitcoinatlantis.com")}.`,
        },
        question: {
          en: "How can I apply for a Press Pass?",
          pt: "Como posso pedir um passe de imprensa?",
        },
      },
    ],
    topic: { en: "Press", pt: "Imprensa" },
  },
];
