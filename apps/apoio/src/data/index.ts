import { ch1to4 } from "./ch1-4";
import { ch5to8 } from "./ch5-8";
import { ch9to11 } from "./ch9-11";
import { glossary, migration } from "./extra";
import type { Page } from "./types";

export const CHAPTERS: Page[] = [...ch1to4, ...ch5to8, ...ch9to11];
export const PAGES: Page[] = [...CHAPTERS, migration, glossary];

export const TIERS = [
  {
    id: "agora",
    label: "Para ler agora",
    note: "Capítulos 1 a 4: o essencial, e como escolher a solução certa.",
  },
  {
    id: "balcao",
    label: "Para ter à mão ao balcão",
    note: "Capítulos 5 e 6: os que a equipa consulta. Vale a pena imprimir só estes e deixá-los junto à caixa.",
  },
  {
    id: "depois",
    label: "Para depois",
    note: "Capítulos 7 a 11: segurança, contabilidade e divulgação, quando já tiveres as primeiras vendas.",
  },
] as const;

export const findPage = (slug: string) => PAGES.find((p) => p.slug === slug);
