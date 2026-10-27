import alexanderMann from "@/assets/avatars/alexander-mann.jpg";
import andiPitt from "@/assets/avatars/andi-pitt.jpg";
import bradMills from "@/assets/avatars/brad-mills.jpg";
import dPlusPlus from "@/assets/avatars/d-plus-plus.jpg";
import jamesLavish from "@/assets/avatars/james-lavish.jpg";
import kasperRisbjerg from "@/assets/avatars/kasper-risbjerg.jpg";
import martellFox from "@/assets/avatars/martell-fox.jpg";
import mikeJarmuz from "@/assets/avatars/mike-jarmuz.jpg";
import nicholasSafford from "@/assets/avatars/nicholas-safford.jpg";
import oleg from "@/assets/avatars/oleg.jpg";
import tankredHase from "@/assets/avatars/tankred-hase.jpg";
import vikasChoudhary from "@/assets/avatars/vikas-choudhary.jpg";

import type { Person } from "./types";

/** Host and jury of the 2024 Rise of Atlantis pitch competition. */
export const riseOfAtlantisTeam: Record<"host" | "jury", Person[]> = {
  host: [
    {
      company: "Layer 4 Talent",
      image: martellFox,
      name: "Martell Fox",
    },
  ],
  jury: [
    {
      company: "Timechain",
      image: alexanderMann,
      name: "Alexander Mann",
    },
    {
      company: "Ego Death Capital",
      image: andiPitt,
      name: "Andi Pitt",
    },
    {
      company: "Angel investor",
      image: bradMills,
      name: "Brad Mills",
    },
    {
      company: "Entropy",
      image: dPlusPlus,
      name: "D++",
    },
    {
      company: "Bitcoin Opportunity Fund",
      image: jamesLavish,
      name: "James Lavish",
    },
    {
      company: "Ikea Ventures",
      image: kasperRisbjerg,
      name: "Kasper Risbjerg",
    },
    {
      company: "Lightning Ventures",
      image: mikeJarmuz,
      name: "Mike Jarmuz",
    },
    {
      company: "New Layer Capital",
      image: nicholasSafford,
      name: "Nicholas Safford",
    },
    {
      company: "Fulgur Ventures",
      image: oleg,
      name: "Oleg",
    },
    {
      company: "Onion Mill LLC",
      image: tankredHase,
      name: "Tankred Hase",
    },
    {
      company: "Theya",
      image: vikasChoudhary,
      name: "Vikas Choudhary",
    },
  ],
};
