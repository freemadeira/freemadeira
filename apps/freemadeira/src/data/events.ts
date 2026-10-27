import type { Locale } from "@freemadeira/i18n";
import type { ImageMetadata } from "astro";

import bitcoinAtlantisImage from "@/assets/images/events/bitcoin-atlantis.png";
import diplomaImage from "@/assets/images/events/diploma.png";
import energySummitImage from "@/assets/images/events/energy-summit.jpg";
import meetupImage from "@/assets/images/events/meetup.jpg";
import { routes } from "@/i18n/routes";

// Until events come from freehub, they are listed here by hand.

const tags = {
  conference: { en: "Conference", pt: "Conferência" },
  course: { en: "Course", pt: "Curso" },
  education: { en: "Education", pt: "Educação" },
  inPerson: { en: "In-person", pt: "Presencial" },
  meetup: { en: "Meetup", pt: "Encontro" },
  online: { en: "Online", pt: "Online" },
} satisfies Record<string, Record<Locale, string>>;

export interface EventCard {
  /** When it happens, as shown on the card. */
  date: Record<Locale, string>;
  description: Record<Locale, string>;
  href?: string | Record<Locale, string>;
  image: ImageMetadata;
  tags: Record<Locale, string>[];
  title: Record<Locale, string>;
}

const meetup = {
  description: {
    en: "Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.",
    pt: "Na última quarta-feira de cada mês, a FREE Madeira organiza um encontro Bitcoin que junta a comunidade. Sabe mais e inscreve-te.",
  },
  image: meetupImage,
  tags: [tags.meetup, tags.inPerson],
  title: {
    en: "FREE Madeira Bitcoin Meetup",
    pt: "Encontro Bitcoin da FREE Madeira",
  },
};

/** Dated events, in Madeira time. */
const upcoming = [
  {
    ...meetup,
    href: "https://www.satlantis.io/events/1697/FREE-Madeira-Bitcoin-Meetup",
    startsAt: "2026-08-26T18:30:00+01:00",
  },
  {
    ...meetup,
    href: "https://www.satlantis.io/events/1698/FREE-Madeira-Bitcoin-Meetup",
    startsAt: "2026-09-30T18:30:00+01:00",
  },
  {
    ...meetup,
    href: "https://www.satlantis.io/events/1699/FREE-Madeira-Bitcoin-Meetup",
    startsAt: "2026-10-28T18:30:00Z",
  },
  {
    ...meetup,
    href: "https://www.satlantis.io/events/1700/FREE-Madeira-Bitcoin-Meetup",
    startsAt: "2026-11-25T18:30:00Z",
  },
];

/** "August 26, 2026, 18:30" or "26 de agosto de 2026, 18:30", Madeira time. */
function formatDate(startsAt: string, locale: Locale): string {
  const date = new Date(startsAt);
  const options = { timeZone: "Atlantic/Madeira" } as const;
  const day = date.toLocaleDateString(locale === "pt" ? "pt-PT" : "en-US", {
    ...options,
    dateStyle: "long",
  });
  const time = date.toLocaleTimeString("pt-PT", {
    ...options,
    timeStyle: "short",
  });
  return `${day}, ${time}`;
}

/**
 * Events that haven't started when the site is built. Pages are prerendered,
 * so one that starts tonight shows until the next deploy.
 */
export function upcomingEvents(now = new Date()): EventCard[] {
  return upcoming
    .filter((event) => new Date(event.startsAt) >= now)
    .map(({ startsAt, ...event }) => ({
      ...event,
      date: { en: formatDate(startsAt, "en"), pt: formatDate(startsAt, "pt") },
    }));
}

/** The events worth planning a visit to Madeira around. */
export const recurringEvents: EventCard[] = [
  {
    date: { en: "Every four years", pt: "De quatro em quatro anos" },
    description: {
      en: "Bitcoin Atlantis gathers the leading voices in Bitcoin for a conference in Madeira, in the middle of the Atlantic. It returns in 2028.",
      pt: "A Bitcoin Atlantis reúne as principais vozes do Bitcoin numa conferência na Madeira, no meio do Atlântico. Regressa em 2028.",
    },
    href: "https://bitcoinatlantis.com/",
    image: bitcoinAtlantisImage,
    tags: [tags.conference, tags.inPerson],
    title: { en: "Bitcoin Atlantis", pt: "Bitcoin Atlantis" },
  },
  {
    date: { en: "Annual", pt: "Anual" },
    description: {
      en: "A focused, in-person event dedicated to real-world projects at the intersection of Bitcoin mining and energy systems. Technical, economic and operational insight on concrete, live initiatives.",
      pt: "Um evento presencial e focado em projetos reais na interseção entre a mineração de Bitcoin e os sistemas energéticos. Uma visão técnica, económica e operacional sobre iniciativas concretas e em curso.",
    },
    href: "https://energysummit.freemadeira.org/",
    image: energySummitImage,
    tags: [tags.conference, tags.inPerson],
    title: { en: "FREE Energy Summit", pt: "FREE Energy Summit" },
  },
  {
    date: {
      en: "Last Wednesday of every month",
      pt: "Última quarta-feira de cada mês",
    },
    description: {
      en: "Join us for an evening of Bitcoin discussion, networking, and learning with fellow enthusiasts, builders, and newcomers alike. Whether you're deep into the ecosystem or just getting started, everyone is welcome at our monthly meetup.",
      pt: "Junta-te a nós para uma noite de conversa sobre Bitcoin, networking e aprendizagem com entusiastas, construtores e recém-chegados. Quer já conheças bem o ecossistema, quer estejas a começar, todos são bem-vindos ao nosso encontro mensal.",
    },
    href: "https://www.satlantis.io/c/74/free-madeira-bitcoin-meetups",
    image: meetupImage,
    tags: [tags.meetup, tags.inPerson],
    title: meetup.title,
  },
  {
    date: { en: "Annual", pt: "Anual" },
    description: {
      en: "A Portuguese adaptation of the internationally recognised 10-week programme developed by My First Bitcoin. This course gives participants a solid understanding of Bitcoin.",
      pt: "Uma adaptação portuguesa do programa de 10 semanas internacionalmente reconhecido, criado pela My First Bitcoin. Este curso dá aos participantes noções sólidas sobre o Bitcoin.",
    },
    href: routes.diplomaBitcoin,
    image: diplomaImage,
    tags: [tags.education, tags.course, tags.online],
    title: { en: "Diploma Bitcoin", pt: "Diploma Bitcoin" },
  },
];
