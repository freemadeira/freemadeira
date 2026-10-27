import type { Locale } from "@freemadeira/i18n";
import type { ImageMetadata } from "astro";

import atlasLogo from "@/assets/logos/events/atlas.svg";
import bitcoinRunnersLogo from "@/assets/logos/events/bitcoin-runners.png";
import bitcoinWalkLogo from "@/assets/logos/events/bitcoin-walk.png";
import filmScreeningLogo from "@/assets/logos/events/film-screening-poster.jpg";
import footballCupLogo from "@/assets/logos/events/football-cup.svg";
import holecoinerLogo from "@/assets/logos/events/holecoiner.svg";
import megaPlebDinnerLogo from "@/assets/logos/events/mega-pleb-dinner.svg";
import miPrimerBitcoinLogo from "@/assets/logos/events/mi-primer-bitcoin.jpeg";
import noBsSelfDefenceLogo from "@/assets/logos/events/no-bs-self-defence.png";
import riseOfAtlantisLogo from "@/assets/logos/events/rise-of-atlantis.svg";
import womenOfBitcoinLogo from "@/assets/logos/events/women-of-bitcoin.svg";
import freeMadeiraLogo from "@/assets/logos/free-madeira.svg";
import bitcoinFilmfestLogo from "@/assets/logos/partners/bitcoin-filmfest.png";
import marathonLogo from "@/assets/logos/partners/marathon.png";
import raspiBlitzLogo from "@/assets/logos/partners/raspiblitz.svg";
import planBLogo from "@/assets/logos/sponsors/plan-b.svg";
import wasabiLogo from "@/assets/logos/sponsors/wasabi.svg";
import type { Route } from "@/i18n/routes";

type Copy = Record<Locale, string>;

/** An external URL, or one of this site's pages. */
export type Href = string | { route: Route };

export interface SatelliteEvent {
  date: Copy;
  /** Paragraphs; trusted HTML, so they may hold links. */
  description: Copy[];
  extendedDescription?: Copy[];
  /** Where the logo leads when there is no "more info" link; else its own section. */
  link?: Href;
  location: { link?: string; name: Copy | string };
  logo: ImageMetadata;
  moreInfo?: Copy | { href: Href; newTab?: boolean; text: Copy };
  /** The event's name; it stays in English and gives the section its id. */
  name: string;
  organizer: string;
  partnerLogo?: ImageMetadata;
  price: Copy | { category: Copy; price: Copy | string }[];
  route?: { link?: string; name: Copy | string };
  tagline?: Copy;
  time: Copy;
}

const free: Copy = { en: "Free", pt: "Gratuito" };
const freeEntrance: Copy = { en: "Free entrance", pt: "Entrada livre" };
const itsFree: Copy = { en: "It's free!", pt: "É gratuito!" };
const moreInformation: Copy = {
  en: "More information",
  pt: "Mais informações",
};
const joinTelegram: Copy = {
  en: "Join the Telegram group",
  pt: "Junta-te ao grupo no Telegram",
};
const ccif = "Centro Cultural e de Investigação do Funchal";

/** The week of events around the 2024 conference, in the 2024 site's order. */
export const satelliteEvents: SatelliteEvent[] = [
  {
    date: { en: "March 2nd", pt: "2 de março" },
    description: [
      {
        en: "One-day music festival in a beautiful garden within walking distance from the Conference main venue.",
        pt: "Festival de música de um dia, num jardim lindíssimo a poucos passos do recinto principal da Conferência.",
      },
    ],
    extendedDescription: [
      {
        en: "Count on Theo Katzman, Joe Martin, The Higher Low, and local band NAPA to liven up your night!",
        pt: "Conta com Theo Katzman, Joe Martin, The Higher Low e a banda local NAPA para animar a tua noite!",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/7FdRyeNsCWFwv9XD6",
      name: "Quinta Magnólia",
    },
    logo: atlasLogo,
    moreInfo: {
      href: { route: "atlasMusicFestival" },
      text: moreInformation,
    },
    name: "Atlas Music Festival",
    organizer: "FREE Madeira",
    price: { en: "29€", pt: "29€" },
    time: { en: "6 pm – 1 am", pt: "18h – 1h" },
  },
  {
    date: { en: "February 27th", pt: "27 de fevereiro" },
    description: [
      {
        en: "Tee off with visionaries at the Bitcoin Atlantis Golf Challenge!",
        pt: "Dá a primeira tacada ao lado de visionários no torneio de golfe do Bitcoin Atlantis!",
      },
    ],
    extendedDescription: [
      {
        en: "Get ready for an unparalleled experience. Whether you're a pro or just here for the vibes, this satellite event is a hole-in-one opportunity you won't want to miss!",
        pt: "Prepara-te para uma experiência sem igual. Sejas profissional ou estejas só pelo ambiente, este evento satélite é uma oportunidade hole-in-one que não vais querer perder!",
      },
      {
        en: "Golf tournament with a maximum of 72 participants.",
        pt: "Torneio de golfe com um máximo de 72 participantes.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/JxmkrG3pRywCpNGH7",
      name: "Santo da Serra Golf Club",
    },
    logo: holecoinerLogo,
    moreInfo: { href: { route: "holecoiner" }, text: moreInformation },
    name: "Holecoiner",
    organizer: "FREE Madeira",
    price: { en: "145€", pt: "145€" },
    tagline: {
      en: "Bitcoin Atlantis Golf Challenge",
      pt: "Torneio de golfe do Bitcoin Atlantis",
    },
    time: { en: "9 am – 3 pm", pt: "9h – 15h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "Stay ahead in the Bitcoin game! Discover the projects and startups of tomorrow, gain insights into cutting-edge technologies and innovative solutions, and draw inspiration from visionary leaders at the Bitcoin Atlantis pitch competition.",
        pt: "Mantém-te na linha da frente do Bitcoin! Descobre os projetos e as startups de amanhã, conhece tecnologias de ponta e soluções inovadoras, e inspira-te em líderes visionários na competição de pitches do Bitcoin Atlantis.",
      },
    ],
    extendedDescription: [
      {
        en: "At Bitcoin Atlantis 2024, we not only highlight the leading Bitcoin enterprises and trailblazers but also passionately support the next wave of Bitcoin startups. These innovators will be given a chance to introduce, refine, and gather attention for their startups during a special pitch session at the conference.",
        pt: "No Bitcoin Atlantis 2024, não só damos destaque às principais empresas e pioneiros do Bitcoin, como apoiamos com entusiasmo a próxima vaga de startups Bitcoin. Estes inovadores terão a oportunidade de apresentar, aperfeiçoar e dar visibilidade às suas startups numa sessão de pitches especial durante a conferência.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/P2kXgDHA6WBJZ6X4A",
      name: ccif,
    },
    logo: riseOfAtlantisLogo,
    moreInfo: {
      href: { route: "riseOfAtlantis" },
      text: moreInformation,
    },
    name: "Rise of Atlantis",
    organizer: "FREE Madeira & Layer4Talent",
    price: itsFree,
    tagline: {
      en: "Startup Pitch Competition",
      pt: "Competição de pitches de startups",
    },
    time: { en: "3 pm – 6:30 pm", pt: "15h – 18h30" },
  },
  {
    date: { en: "March 4th", pt: "4 de março" },
    description: [
      {
        en: "Enjoy Madeira's beautiful sights from the sea.",
        pt: "Aprecia as belas paisagens da Madeira a partir do mar.",
      },
    ],
    extendedDescription: [
      {
        en: "After a few days filled with innovative insights into the world of Bitcoin, we invite all participants to embark on a unique experience. Let yourself be carried away by the gentle ocean breeze as you relax and take in the magnificent panoramic views of the island. Join us on this special maritime journey, where the magic of the digital world meets the serenity of nature. If the weather allows you will be able to swim. So don't forget to bring your swimming suit!",
        pt: "Depois de uns dias cheios de ideias inovadoras sobre o mundo do Bitcoin, convidamos todos os participantes a embarcar numa experiência única. Deixa-te levar pela brisa suave do oceano enquanto relaxas e aprecias as magníficas vistas panorâmicas da ilha. Junta-te a nós nesta viagem marítima especial, onde a magia do mundo digital se encontra com a serenidade da natureza. Se o tempo permitir, poderás dar um mergulho. Não te esqueças do fato de banho!",
      },
      {
        en: "Limited to boat capacity!",
        pt: "Limitado à lotação do barco!",
      },
    ],
    location: {
      link: "https://www.google.com/maps/place/VMT+Madeira+-+Catamaran+Trips/@32.646053,-16.909912,17z/data=!4m6!3m5!1s0xc606007c2d1c0d1:0x3a7396fc9a9c26de!8m2!3d32.6460235!4d-16.9080307!16s%2Fg%2F1yddddl1n?entry=ttu",
      name: { en: "Meeting Point", pt: "Ponto de encontro" },
    },
    logo: freeMadeiraLogo,
    moreInfo: {
      href: "https://drive.google.com/file/d/1jZ4Gpuj4PBn6Pv6XcOq3VRC2TyxMml_N/view?usp=sharing",
      newTab: true,
      text: { en: "Important information", pt: "Informações importantes" },
    },
    name: "Catamaran Trip",
    organizer: "FREE Madeira",
    price: [
      { category: { en: "Adults", pt: "Adultos" }, price: "35€" },
      {
        category: {
          en: "Children 5–12 years old",
          pt: "Crianças dos 5 aos 12 anos",
        },
        price: "17,50€",
      },
      {
        category: {
          en: "Children up to 4 years old",
          pt: "Crianças até aos 4 anos",
        },
        price: free,
      },
    ],
    tagline: {
      en: "Post-conference maritime journey",
      pt: "Viagem marítima pós-conferência",
    },
    time: {
      en: "5 pm – 8 pm (be at the Meeting Point at 4.30 pm)",
      pt: "17h – 20h (comparência no ponto de encontro às 16h30)",
    },
  },
  {
    date: { en: "March 3rd", pt: "3 de março" },
    description: [
      {
        en: 'A Typical Madeiran dinner, with the traditional dish "Espetada" and the lovely company of Bitcoin Atlantis Plebs!',
        pt: "Um jantar tipicamente madeirense, com a tradicional «Espetada» e a agradável companhia dos plebs do Bitcoin Atlantis!",
      },
    ],
    extendedDescription: [
      {
        en: "Madeira is full of traditions, come discover one of them.",
        pt: "A Madeira está cheia de tradições: vem descobrir uma delas.",
      },
      {
        en: 'Special performance by <a href="https://twitter.com/kiritmagic" target="_blank" rel="noreferrer">the_magician</a>. He will be captivating the audience with close-up performances. Bitcoin donations can be seamlessly made via Lightning ⚡, allowing spectators to determine the worth of the magical experience, an innovative concept known as #proofofmagic 🧙',
        pt: 'Atuação especial de <a href="https://twitter.com/kiritmagic" target="_blank" rel="noreferrer">the_magician</a>, que vai cativar o público com números de magia de perto. Os donativos em bitcoin fazem-se facilmente via Lightning ⚡, e cada espectador decide quanto vale a experiência mágica, um conceito inovador conhecido como #proofofmagic 🧙',
      },
      {
        en: "Maximum of 500 participants.",
        pt: "Máximo de 500 participantes.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/CdSfV8SV4xidB1Ji6",
      name: 'Restaurante "O Lagar"',
    },
    logo: megaPlebDinnerLogo,
    moreInfo: {
      en: "Limited tickets available.",
      pt: "Bilhetes limitados.",
    },
    name: "Mega Pleb Dinner",
    organizer: "FREE Madeira",
    price: [
      { category: { en: "Adults", pt: "Adultos" }, price: "50€" },
      {
        category: {
          en: "Children (4–10 years old)",
          pt: "Crianças (dos 4 aos 10 anos)",
        },
        price: "25€",
      },
      {
        category: {
          en: "Layer 3 ticket holders",
          pt: "Titulares de bilhete Layer 3",
        },
        price: free,
      },
    ],
    time: { en: "7 pm", pt: "19h" },
  },
  {
    date: { en: "March 1st", pt: "1 de março" },
    description: [
      {
        en: "Monthly FREE Madeira Bitcoin meetup turns party.",
        pt: "O meetup mensal de Bitcoin da FREE Madeira transforma-se em festa.",
      },
    ],
    extendedDescription: [
      {
        en: "Every month FREE Madeira organises a bitcoin meetup. This time we'll welcome all Bitcoin Atlantis attendees for a Special Meetup, in a very special place!",
        pt: "Todos os meses, a FREE Madeira organiza um meetup de bitcoin. Desta vez, recebemos todos os participantes do Bitcoin Atlantis num Meetup Especial, num sítio muito especial!",
      },
      {
        en: "The view is stunning and among bitcoiners, we'll all be in great company. You can dine and mingle, or drop by later for a drink.",
        pt: "A vista é deslumbrante e, entre bitcoiners, estaremos todos em ótima companhia. Podes jantar e conviver, ou aparecer mais tarde para uma bebida.",
      },
      {
        en: "Live Music: DJ António Loja, Roger 9000 and Satoshi Rockamoto!",
        pt: "Música ao vivo: DJ António Loja, Roger 9000 e Satoshi Rockamoto!",
      },
    ],
    link: "https://www.meetup.com/madeira-bitcoin-meetup-group/events/297068040/",
    location: {
      link: "https://maps.app.goo.gl/CXJRXMdeB48hp3id6",
      name: "Nini Design Center",
    },
    logo: freeMadeiraLogo,
    name: "Special Meetup Party",
    organizer: "FREE Madeira",
    price: freeEntrance,
    time: { en: "7 pm - 1 am", pt: "19h – 1h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "Bitcoin introduction for newbies.",
        pt: "Introdução ao Bitcoin para principiantes.",
      },
    ],
    extendedDescription: [
      {
        en: "This event is directed to locals and will be carried entirely in Portuguese.",
        pt: "Este evento destina-se a residentes e decorre inteiramente em português.",
      },
    ],
    location: {
      link: "https://www.google.com/maps/place/Centro+Cultural+e+de+Investiga%C3%A7%C3%A3o+do+Funchal/@32.6544384,-16.9014058,17z",
      name: ccif,
    },
    logo: freeMadeiraLogo,
    moreInfo: {
      href: { route: "bemVindoAoBitcoin" },
      text: moreInformation,
    },
    name: "Bem-vindo ao Bitcoin",
    organizer: "FREE Madeira",
    price: free,
    tagline: { en: "Welcome to Bitcoin", pt: "Introdução ao Bitcoin" },
    time: { en: "9 am – 6 pm", pt: "9h – 18h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      { en: "Brunch & Network", pt: "Brunch e networking" },
      { en: "Powered by Marathon", pt: "Com o apoio da Marathon" },
    ],
    extendedDescription: [
      {
        en: "You're warmly invited to join us at the Bitcoin Atlantis Women of Bitcoin Brunch, an event celebrating and uniting women embracing the revolutionary technology of Bitcoin. Nestled in an elegant setting at Nini Design Center, this brunch is more than just a gathering – it's a vibrant community coming together to share, learn, and inspire.",
        pt: "Estás convidada para o Women of Bitcoin Brunch do Bitcoin Atlantis, um evento que celebra e une as mulheres que abraçam a tecnologia revolucionária do Bitcoin. Num espaço elegante, no Nini Design Center, este brunch é mais do que um encontro: é uma comunidade vibrante que se junta para partilhar, aprender e inspirar.",
      },
      {
        en: "We're excited to present a discussion led by esteemed voices in the Bitcoin field in addition to a warm and inviting environment to network and connect. Whether you're just starting your Bitcoin journey or you're a seasoned professional, there's something here for everyone. This is your opportunity to meet with like-minded women, hear inspiring success stories, and be part of a nurturing network dedicated to empowering women in Bitcoin.",
        pt: "Temos o prazer de apresentar uma conversa conduzida por vozes de referência no mundo do Bitcoin, num ambiente acolhedor para criar contactos e ligações. Quer estejas a dar os primeiros passos no Bitcoin, quer sejas uma profissional experiente, há aqui algo para todas. É a tua oportunidade de conhecer mulheres com os mesmos interesses, ouvir histórias de sucesso inspiradoras e fazer parte de uma rede dedicada a capacitar as mulheres no Bitcoin.",
      },
      {
        en: "Join us for a day of learning, connection, and empowerment. Let's make a lasting impact in the Bitcoin world together!",
        pt: "Junta-te a nós para um dia de aprendizagem, ligação e capacitação. Vamos, juntas, deixar uma marca duradoura no mundo do Bitcoin!",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/CXJRXMdeB48hp3id6",
      name: "Nini Design Center",
    },
    logo: womenOfBitcoinLogo,
    moreInfo: {
      href: "https://t.me/+vSAyHBZt6gg0MWYy",
      newTab: true,
      text: joinTelegram,
    },
    name: "Women of Bitcoin",
    organizer: "Natalie Brunell, Valerie B Love and Rachel Geyer",
    partnerLogo: marathonLogo,
    price: {
      en: "Free entrance, save your seat!",
      pt: "Entrada livre, reserva o teu lugar!",
    },
    time: { en: "10 am – 12 pm", pt: "10h – 12h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "Independent Bitcoin Education",
        pt: "Educação Bitcoin independente",
      },
    ],
    extendedDescription: [
      {
        en: "Independent, impartial, community-led education will change the world. It already has. Join us and meet others on the mission. We'll share best practices, learn from each other and speed up the timeline.",
        pt: "A educação independente, imparcial e liderada pela comunidade vai mudar o mundo. Já mudou. Junta-te a nós e conhece outras pessoas com a mesma missão. Vamos partilhar boas práticas, aprender uns com os outros e acelerar o caminho.",
      },
    ],
    link: "https://miprimerbitcoin.io/tickets/",
    location: {
      link: "https://maps.app.goo.gl/7dhwtHnPGcHjo3UU6",
      name: "Porto Mare Hotel",
    },
    logo: miPrimerBitcoinLogo,
    name: "Mi Primer Bitcoin Unconference",
    organizer: "Mi Primer Bitcoin",
    price: [
      { category: { en: "Early Bird", pt: "Early Bird" }, price: "21€" },
      { category: { en: "Pre Sale", pt: "Pré-venda" }, price: "30€" },
      { category: { en: "Last Minute", pt: "Última hora" }, price: "40€" },
    ],
    time: { en: "11 am – 6 pm", pt: "11h – 18h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "The PlanB Exam is a 100 Question – 1h exam to test your bitcoin knowledge.",
        pt: "O PlanB Exam é um exame de 100 perguntas, com 1 hora de duração, para testar os teus conhecimentos de bitcoin.",
      },
    ],
    extendedDescription: [
      {
        en: "This certificate will help you access specific PlanB features such as advanced courses, Internship offer, seminaries and more.",
        pt: "Este certificado dá-te acesso a vantagens específicas da PlanB, como cursos avançados, ofertas de estágio, seminários e muito mais.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/P2kXgDHA6WBJZ6X4A",
      name: ccif,
    },
    logo: planBLogo,
    moreInfo: {
      href: "https://planb.network/",
      newTab: true,
      text: moreInformation,
    },
    name: "The PlanB Exam",
    organizer: "PlanB Network",
    price: freeEntrance,
    time: { en: "11 am – 12 am", pt: "11h – 12h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "Sundown beats by the ocean shore.",
        pt: "Música ao pôr do sol, à beira-mar.",
      },
    ],
    extendedDescription: [
      {
        en: "We're setting the stage for an unforgettable conference kick-off. Get ready for an evening where the ocean's rhythm meets DJ Merceeira's, DJ Rootzoll's and DJ Valerie B Love's tracks. Feel the sea breeze, let loose, and get into the groove as the day fades out. Be part of the story—it's going to be epic!",
        pt: "Estamos a preparar um arranque inesquecível para a conferência. Prepara-te para um fim de tarde em que o ritmo do oceano se junta às músicas do DJ Merceeira, do DJ Rootzoll e da DJ Valerie B Love. Sente a brisa do mar, descontrai e entra no ritmo enquanto o dia se despede. Faz parte da história: vai ser épico!",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/4oRryn7LomJcaqkj6",
      name: "Barreirinha Bar Café",
    },
    logo: freeMadeiraLogo,
    name: "Bitcoin Bar Café",
    organizer: "FREE Madeira",
    price: itsFree,
    tagline: {
      en: "Bitcoin Atlantis Opening Party",
      pt: "Festa de abertura do Bitcoin Atlantis",
    },
    time: { en: "6 pm – 11 pm", pt: "18h – 23h" },
  },
  {
    date: { en: "February 28th", pt: "28 de fevereiro" },
    description: [
      {
        en: "Whether you're a dedicated RaspiBlitz full node runner or simply someone who appreciates the power of open-source collaboration, join the meetup for talks and discussions.",
        pt: "Quer corras um full node RaspiBlitz, quer simplesmente aprecies o poder da colaboração open source, junta-te ao meetup para palestras e conversas.",
      },
    ],
    extendedDescription: [
      {
        en: "Hosted by: rootzoll & openoms",
        pt: "Apresentado por: rootzoll e openoms",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/ywbiUtQ7fYa6meYz6",
      name: "Three House",
    },
    logo: raspiBlitzLogo,
    name: "RaspiBlitz Meetup",
    organizer: "RaspiBlitz",
    price: freeEntrance,
    tagline: { en: "Meetup Party", pt: "Meetup e festa" },
    time: { en: "4 pm – 7 pm", pt: "16h – 19h" },
  },
  {
    date: { en: "March 1st", pt: "1 de março" },
    description: [
      {
        en: "Join us for a memorable 5 km social run amidst the breathtaking coastline of Madeira.",
        pt: "Junta-te a nós para uma corrida social de 5 km, memorável, ao longo da deslumbrante costa da Madeira.",
      },
    ],
    extendedDescription: [
      {
        en: "This special run pays homage to the legacy of Hal Finney while celebrating the inaugural Bitcoin Atlantis conference. The route, tracing a picturesque coastal path, will be set at an easy pace suitable for all abilities. Lace up your running shoes and join us for a wellness-filled experience blending tribute, community, and the scenic beauty of Madeira.",
        pt: "Esta corrida especial presta homenagem ao legado de Hal Finney e celebra a primeira edição da conferência Bitcoin Atlantis. O percurso, por um pitoresco caminho costeiro, será feito a um ritmo tranquilo, ao alcance de todos. Calça as sapatilhas e junta-te a nós numa experiência de bem-estar que junta homenagem, comunidade e a beleza natural da Madeira.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/3pLNg6NGFzZyb1t69",
      name: "Lido Beach Complex, Funchal",
    },
    logo: bitcoinRunnersLogo,
    moreInfo: {
      href: "https://t.me/BitcoinRunnersMadeira",
      newTab: true,
      text: joinTelegram,
    },
    name: "Hal Finney Seaside Run",
    organizer: "Bitcoin Runners",
    price: freeEntrance,
    route: {
      link: "https://www.strava.com/routes/3193947855091795180",
      name: {
        en: "An out and back along the stunning coastal path",
        pt: "Ida e volta pelo deslumbrante caminho costeiro",
      },
    },
    time: { en: "07:30 am", pt: "7h30" },
  },
  {
    date: { en: "March 4th", pt: "4 de março" },
    description: [
      {
        en: "A run to the top of Madeira.",
        pt: "Uma corrida até ao topo da Madeira.",
      },
    ],
    extendedDescription: [
      {
        en: 'Embark on an exhilarating run/fast hike with us as we traverse the breathtaking Pico do Areeiro – Pico Ruivo trail, leading to the pinnacle of Madeira and the third-highest point in Portugal at 1,862 meters. A must for the adventurous, this iconic 12 km trail boasts the renowned "tunnel" and offers spectacular views that define Madeira. Join us for an unforgettable journey to a new ‘all time high’.',
        pt: "Embarca connosco numa corrida/caminhada rápida emocionante pelo deslumbrante trilho Pico do Areeiro – Pico Ruivo, que leva ao ponto mais alto da Madeira e ao terceiro mais alto de Portugal, a 1862 metros. Imperdível para os mais aventureiros, este trilho icónico de 12 km tem o famoso «túnel» e vistas espetaculares que definem a Madeira. Junta-te a nós numa viagem inesquecível rumo a um novo ‘all time high’.",
      },
      {
        en: "Maximum 21 participants.",
        pt: "Máximo de 21 participantes.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/rgAjmsZBmtumYBnr9",
      name: {
        en: "Meeting Point – Conference Venue",
        pt: "Ponto de encontro – recinto da conferência",
      },
    },
    logo: bitcoinRunnersLogo,
    moreInfo: {
      href: "https://t.me/BitcoinRunnersMadeira",
      newTab: true,
      text: joinTelegram,
    },
    name: "Hal Finney Mountain Run",
    organizer: "Bitcoin Runners",
    price: {
      en: "Transfer (BUS) – 21€ per participant",
      pt: "Transporte (autocarro) – 21€ por participante",
    },
    route: {
      link: "https://visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/atividades/trail-running/pico-do-areeiro-pico-ruivo/",
      name: "Pico Arieiro – Pico Ruivo",
    },
    time: {
      en: "10 am @ the Meeting Point",
      pt: "10h no ponto de encontro",
    },
  },
  {
    date: { en: "March 4th", pt: "4 de março" },
    description: [
      {
        en: "A walking meetup with a simple purpose – you put down your phone and pick up the brains of people walking next to you.",
        pt: "Um meetup a pé com um objetivo simples: pousas o telemóvel e aproveitas as ideias de quem caminha ao teu lado.",
      },
    ],
    extendedDescription: [
      {
        en: "All the conversations focus on money, macroeconomics, geopolitics, philosophy, environment, etc. from the Bitcoin perspective.",
        pt: "As conversas giram em torno de dinheiro, macroeconomia, geopolítica, filosofia, ambiente, etc., na perspetiva do Bitcoin.",
      },
      {
        en: "It's a low-difficulty walk in nature, with a duration of 3 to 4 hours.",
        pt: "É uma caminhada na natureza de baixa dificuldade, com 3 a 4 horas de duração.",
      },
      {
        en: "There will be 2 hikes: one in the morning and one in the afternoon.",
        pt: "Haverá 2 caminhadas: uma de manhã e outra à tarde.",
      },
      {
        en: "Transport to the walk location will be provided for free.",
        pt: "O transporte até ao local da caminhada é gratuito.",
      },
    ],
    link: "https://bitcoinwalk.org/madeira/",
    location: {
      link: "https://maps.app.goo.gl/1L1e7uddvWS7FvvaA",
      name: {
        en: "Meeting Point - Entrance of the Stadium",
        pt: "Ponto de encontro – entrada do estádio",
      },
    },
    logo: bitcoinWalkLogo,
    name: "BitcoinWalk Madeira",
    organizer: "BitcoinWalk",
    price: free,
    route: {
      link: "https://walkmeguide.com/pt/madeira/trail/73/santo-da-serra-levada-da-serra-do-faial/",
      name: "Levada da Serra do Faial",
    },
    time: {
      en: "9 am and 4 pm @ the Meeting Point",
      pt: "9h e 16h no ponto de encontro",
    },
  },
  {
    date: { en: "March 4th", pt: "4 de março" },
    description: [
      {
        en: "Get to know Bitcoin Cinema!",
        pt: "Fica a conhecer o cinema Bitcoin!",
      },
    ],
    extendedDescription: [
      {
        en: "Movie-themed event from Bitcoin FilmFest, screening what’s best, fresh and upcoming in this space. Watch and debate films, meet artists and bitcoin culture in Madeiran cinematic theatre.",
        pt: "Um evento de cinema do Bitcoin FilmFest, com o melhor, o mais recente e o que aí vem neste universo. Vê e debate filmes, conhece artistas e a cultura bitcoin numa sala de cinema madeirense.",
      },
    ],
    location: {
      link: "https://www.google.com/maps/place/Centro+Cultural+e+de+Investiga%C3%A7%C3%A3o+do+Funchal/@32.6544384,-16.9014058,17z",
      name: ccif,
    },
    logo: bitcoinFilmfestLogo,
    name: "Bitcoin FilmFest Mini",
    organizer: "Bitcoin FilmFest",
    price: freeEntrance,
    time: { en: "3 pm – 7 pm", pt: "15h – 19h" },
  },
  {
    date: { en: "March 1st", pt: "1 de março" },
    description: [
      {
        en: "Learn why everything gets more expensive, what happens next and how Bitcoin works.",
        pt: "Percebe porque é que tudo fica mais caro, o que vem a seguir e como funciona o Bitcoin.",
      },
    ],
    extendedDescription: [
      {
        en: "Shooter has been making films since he was 8 years old. He spent the last year traveling the world to make No More Inflation.",
        pt: "O Shooter faz filmes desde os 8 anos. Passou o último ano a viajar pelo mundo para fazer o No More Inflation.",
      },
      {
        en: "Join him in the cinema to watch 25 minutes of his film and to have a discussion. With inspiring stories, high profile interviews and extremely high production quality, this is an event you don’t want to miss!",
        pt: "Junta-te a ele no cinema para ver 25 minutos do filme e participar numa conversa. Com histórias inspiradoras, entrevistas de grande destaque e uma qualidade de produção altíssima, é um evento a não perder!",
      },
    ],
    link: "https://bitcoinshooter.com/cinema/",
    location: {
      link: "https://maps.app.goo.gl/Ps4N5ZUrAXMnRLWc7",
      name: "NOS Cinemas Forum Madeira",
    },
    logo: filmScreeningLogo,
    name: "No More Inflation",
    organizer: "Bitcoin Shooter",
    price: [
      { category: { en: "Super Early", pt: "Super Early" }, price: "22€" },
      { category: { en: "Early Bird", pt: "Early Bird" }, price: "33€" },
      { category: { en: "Regular", pt: "Normal" }, price: "44€" },
      {
        category: { en: "Layer 1 Attendees", pt: "Participantes Layer 1" },
        price: { en: "Free (up to 100)", pt: "Gratuito (até 100)" },
      },
    ],
    tagline: {
      en: "Film Premiere At The Cinema",
      pt: "Estreia do filme no cinema",
    },
    time: { en: "8 pm – 9 pm", pt: "20h – 21h" },
  },
  {
    date: { en: "March 4th", pt: "4 de março" },
    description: [
      {
        en: "Come and show off your football skills at the Bitcoin Atlantis Football Cup!",
        pt: "Vem mostrar os teus dotes futebolísticos na Atlantis Football Cup do Bitcoin Atlantis!",
      },
    ],
    extendedDescription: [
      {
        en: "Proof of Work is the name of the game so if you have what it takes to win, then register your interest now.",
        pt: "Aqui o jogo é Proof of Work: se tens o que é preciso para ganhar, inscreve-te já.",
      },
      {
        en: "Like Bitcoin, there is no second best, so we are super excited to find out who will lift the cup in 2024!",
        pt: "Tal como no Bitcoin, não há segundo melhor, por isso mal podemos esperar para saber quem vai levantar a taça em 2024!",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/h3nRbbJz1dNDtBP68",
      name: "Associação Cultural, Desportiva e Recreativa de São Martinho",
    },
    logo: footballCupLogo,
    moreInfo: {
      href: "https://t.me/+C6ispoC-4JtjOWU0",
      newTab: true,
      text: joinTelegram,
    },
    name: "Atlantis Football Cup",
    organizer: "Coach Carbon  - Josiah",
    price: freeEntrance,
    time: { en: "10 am – 1 pm", pt: "10h – 13h" },
  },
  {
    date: { en: "February 29th", pt: "29 de fevereiro" },
    description: [
      {
        en: "Learn simple and effective self-defence techniques distilled from about 21 years of practising various martial arts, combat sports and self-defence systems.",
        pt: "Aprende técnicas de defesa pessoal simples e eficazes, destiladas de cerca de 21 anos de prática de várias artes marciais, desportos de combate e sistemas de defesa pessoal.",
      },
    ],
    extendedDescription: [
      {
        en: "Do not expect flashy moves. The goal is to help you significantly increase your and your loved ones' security, in an hour, by passing on pragmatic knowledge and practising easy-to-learn moves that can be further practised at home. Situational awareness, confrontation avoidance, de-escalation, use of everyday carry tools as force multipliers and home defence will be covered too.",
        pt: "Não esperes movimentos espetaculares. O objetivo é ajudar-te a aumentar significativamente a tua segurança e a dos teus, numa hora, transmitindo conhecimento prático e treinando movimentos fáceis de aprender, que podes continuar a praticar em casa. Também vamos abordar a consciência situacional, como evitar confrontos, a desescalada, o uso de objetos do dia a dia como multiplicadores de força e a defesa da casa.",
      },
      {
        en: "No previous experience is required. Likewise no special outfit. It will be a light technical training and practising in a more realistic way by wearing normal clothes/items is recommended.",
        pt: "Não é preciso experiência prévia, nem roupa especial. Será um treino técnico ligeiro, e recomenda-se praticar de forma mais realista, com a roupa e os objetos do dia a dia.",
      },
      {
        en: "After the event, there will be a group heading to Barreirinha Bar Café to join Bitcoin Atlantis Opening Party. Armed with all that knowledge it will be probably the most secure ever walking tour of downtown Funchal.",
        pt: "No fim, um grupo segue para o Barreirinha Bar Café para a festa de abertura do Bitcoin Atlantis. Armados com todo esse conhecimento, será provavelmente o passeio mais seguro de sempre pela baixa do Funchal.",
      },
      {
        en: "Before going to the event please check for any updates on Nostr. If in unlikely case there were any changes to the event, an update would be posted on Nostr.",
        pt: "Antes de ires, procura atualizações no Nostr. No caso pouco provável de haver alterações ao evento, serão publicadas no Nostr.",
      },
      {
        en: "Participants are requested to not take photos or recordings.",
        pt: "Pede-se aos participantes que não tirem fotografias nem façam gravações.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/c9saL6d8cAYTSNH56",
      name: { en: "Santa Catarina Park", pt: "Parque de Santa Catarina" },
    },
    logo: noBsSelfDefenceLogo,
    moreInfo: {
      href: "https://njump.me/npub1kt3zf9yrvf9su558yfepw9mzvqax6yc57gwqecp035jal2ktk30shk98al",
      newTab: true,
      text: { en: "More info on nostr", pt: "Mais informações no nostr" },
    },
    name: "No BS Self-Defence",
    organizer: "Marcus Satbard",
    price: {
      en: "V4V (Value for Value: got value, feel encouraged to give the value, LN-BTC & CASH-EUR accepted)",
      pt: "V4V (Value for Value: se tiraste valor, sente-te à vontade para retribuir; aceita-se LN-BTC e numerário em EUR)",
    },
    tagline: {
      en: "Theory & Light Technical Practice in a Park",
      pt: "Teoria e prática técnica ligeira num parque",
    },
    time: { en: "6:30 pm – 7:30 pm", pt: "18h30 – 19h30" },
  },
  {
    date: { en: "February 27th", pt: "27 de fevereiro" },
    description: [
      {
        en: "Join us for an unforgettable gathering of like-minded individuals at our upcoming Cypherpunk BBQ!",
        pt: "Junta-te a nós num encontro inesquecível de pessoas com ideias afins no nosso Cypherpunk BBQ!",
      },
    ],
    extendedDescription: [
      {
        en: "Immerse yourself in a vibrant atmosphere where privacy advocates and tech enthusiasts come together to celebrate the power of decentralization and cryptography.",
        pt: "Mergulha num ambiente vibrante onde defensores da privacidade e entusiastas de tecnologia se juntam para celebrar o poder da descentralização e da criptografia.",
      },
      {
        en: "Savor delicious barbecue delights while engaging in thoughtful discussions about the future of digital freedom and security.",
        pt: "Saboreia um delicioso churrasco enquanto participas em conversas interessantes sobre o futuro da liberdade e da segurança digitais.",
      },
      {
        en: "This is your chance to connect with fellow pioneers who share your passion for protecting individual liberties through innovative technologies.",
        pt: "É a tua oportunidade de conhecer outros pioneiros que partilham a tua paixão por proteger as liberdades individuais através de tecnologias inovadoras.",
      },
    ],
    location: {
      link: "https://maps.app.goo.gl/LCsyX8ezuVh8y18WA",
      name: "Cowork Funchal",
    },
    logo: wasabiLogo,
    name: "Cypherpunk BBQ",
    organizer: "Wasabi Wallet",
    price: free,
    time: { en: "5 pm", pt: "17h" },
  },
];
