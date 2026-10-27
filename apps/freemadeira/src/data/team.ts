import type { Locale } from "@freemadeira/i18n";
import type { ImageMetadata } from "astro";

import andreLoja from "@/assets/images/advisory-board/andre-loja.jpg";
import carolinaRoovers from "@/assets/images/team/carolina-roovers.jpeg";
import henriqueAlbuquerque from "@/assets/images/team/henrique-albuquerque.jpg";
import inesLouro from "@/assets/images/team/ines-louro.jpg";
import luisaCosta from "@/assets/images/team/luisa-costa.jpeg";
import mafaldaBrazao from "@/assets/images/team/mafalda-brazao.jpg";
import mariliaMarques from "@/assets/images/team/marilia-marques.jpg";
import saraAguiar from "@/assets/images/team/sara-aguiar.jpg";
import type { Social } from "@/data/socials";

/** Bios stay in English on both locales; the role is translated. */
export interface TeamMember {
  firstName: string;
  lastName: string;
  sex: "male" | "female";
  role: Record<Locale, string>;
  picture?: ImageMetadata;
  socials?: Partial<Record<Social, string>>;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    bio: "André Loja is a native of Madeira, father of four, and a dedicated serial entrepreneur committed to fostering innovation and resilience on the archipelago. He founded FREE Madeira, an initiative focused on Bitcoin adoption, education, and community building. In 2024, he launched the first Bitcoin Atlantis Conference, which brought together global Bitcoin leaders to Madeira and highlighted the island’s potential on the international stage. His ventures include Basalto, a Bitcoin investment fund; Monstera Media, a publishing house for Bitcoin literature; and Satsflow, a user-friendly Lightning wallet. He also owns An Island Apart, a leading holiday rental company offering curated stays across Madeira, and helped establish Cowork Funchal, a vibrant coworking space supporting a growing community of remote professionals. Through these projects, André contributes to Madeira’s evolution as a more open, forward-looking, and globally connected island economy.",
    firstName: "André",
    lastName: "Loja",
    picture: andreLoja,
    role: { en: "Founder", pt: "Fundador" },
    sex: "male",
    socials: {
      linkedin: "in/andreloja",
      nostr: "npub1tdc9um9kqfp9cqvjqtwswzsvqzdsgzkpn9swamed3286kfwpaljsrr8r0y",
      x: "andreloja",
    },
  },
  {
    firstName: "Henrique",
    lastName: "Albuquerque",
    picture: henriqueAlbuquerque,
    role: { en: "Head of Education", pt: "Responsável pela Educação" },
    sex: "male",
    socials: {
      nostr: "npub1e6yjcxup0d90x3kvty7m54kc0r4c4smpggsvajvhtlyyeyfrkjtqhcl44p",
      x: "liberspace",
    },
  },
  {
    bio: "She coordinates and delivers projects, connecting people, ideas, and resources — with a clear focus on solving problems and making things happen.",
    firstName: "Mafalda",
    lastName: "Brazão",
    picture: mafaldaBrazao,
    role: { en: "Senior Project Manager", pt: "Gestora de Projetos Sénior" },
    sex: "female",
  },
  {
    firstName: "Luísa",
    lastName: "Costa",
    picture: luisaCosta,
    role: { en: "Project Manager", pt: "Gestora de Projetos" },
    sex: "female",
  },
  {
    firstName: "Sara",
    lastName: "Aguiar",
    picture: saraAguiar,
    role: {
      en: "Head of Marketing and Communications",
      pt: "Responsável de Marketing e Comunicação",
    },
    sex: "female",
    socials: {
      linkedin: "in/sara-veiga-frança-aguiar-aa643b5b",
    },
  },
  {
    bio: "Bitcoin enthusiast working in digital communication, with experience in content creation, video editing, and social media management. Her work aims to deepen Bitcoin education and increase awareness of its economic, technological, and cultural relevance.",
    firstName: "Marília",
    lastName: "Marques",
    picture: mariliaMarques,
    role: { en: "Social Media Manager", pt: "Gestora de Redes Sociais" },
    sex: "female",
    socials: {
      nostr: "npub1lt5sun5fgd2vce2p5yeku9njyka8s6e4e4nkpvncycx84vv8xf9q032gtn",
      x: "mariliasm03",
    },
  },
  {
    bio: "Software developer and Bitcoin enthusiast who enjoys teaching. She builds applications and turns ideas into working software. She has taught coding and now teaches Bitcoin, designing and creating educational content to make Bitcoin more accessible and encourage its adoption as a better form of money.",
    firstName: "Inês",
    lastName: "Louro",
    picture: inesLouro,
    role: {
      en: "Education Builder & Software Developer",
      pt: "Criadora de Conteúdos Educativos e Programadora",
    },
    sex: "female",
    socials: {
      nostr: "npub1yaz5asg4uzj2zckgq2n5sjkwj7u7cdmz0hk2905xgkuc7d5vj98qwyhh3p",
    },
  },
  {
    bio: "A designer who combines creativity and strategy, and supports event coordination by connecting concepts, people, and experiences.",
    firstName: "Carolina",
    lastName: "Roovers",
    picture: carolinaRoovers,
    role: {
      en: "Designer & Project Manager",
      pt: "Designer e Gestora de Projetos",
    },
    sex: "female",
  },
];
