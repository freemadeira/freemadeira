import type { Locale } from "@freemadeira/i18n";

type Copy = Record<Locale, string>;

export interface ProgrammeBlock {
  curator: string;
  /** The block's number, from 0, which is also its height in the timechain. */
  height: number;
  mainSpeaker: string;
  time: "afternoon" | "morning";
  title: Copy;
}

export interface ProgrammeDay {
  blocks: ProgrammeBlock[];
  date: Copy;
  day: number;
}

/** The Satoshi Stage programme of 2024: two blocks a day, each with a curator. */
export const programme: ProgrammeDay[] = [
  {
    blocks: [
      {
        curator: "Preston Pysh",
        height: 0,
        mainSpeaker: "Jack Mallers",
        time: "morning",
        title: { en: "Intro to Bitcoin", pt: "Introdução ao Bitcoin" },
      },
      {
        curator: "Daniel Prince",
        height: 1,
        mainSpeaker: "Michael Saylor",
        time: "afternoon",
        title: { en: "Economies in Transition", pt: "Economias em transição" },
      },
    ],
    date: { en: "1st of March", pt: "1 de março" },
    day: 1,
  },
  {
    blocks: [
      {
        curator: "Troy Cross",
        height: 2,
        mainSpeaker: "Daniel Batten",
        time: "morning",
        title: { en: "Energy Abundance", pt: "Abundância energética" },
      },
      {
        curator: "Alex Gladstein",
        height: 3,
        mainSpeaker: "Jack Dorsey",
        time: "afternoon",
        title: { en: "Global Opportunities", pt: "Oportunidades globais" },
      },
    ],
    date: { en: "2nd of March", pt: "2 de março" },
    day: 2,
  },
  {
    blocks: [
      {
        curator: "André Loja",
        height: 4,
        mainSpeaker: "Giacomo Zucco",
        time: "morning",
        title: { en: "Madeira", pt: "Madeira" },
      },
      {
        curator: "Jeff Booth",
        height: 5,
        mainSpeaker: "Jeff Booth",
        time: "afternoon",
        title: { en: "After Transition", pt: "Depois da transição" },
      },
    ],
    date: { en: "3rd of March", pt: "3 de março" },
    day: 3,
  },
];
