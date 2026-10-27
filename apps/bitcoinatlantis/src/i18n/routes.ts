import type { LocalizedPaths } from "@freemadeira/i18n";

/**
 * Every page's path per locale. A new page gets its entry here first.
 *
 * Brand names stay in both slugs; the generic words around them are
 * translated, so the old English paths can redirect to /en.
 */
export const routes = {
  artGallery: { en: "/en/art-gallery", pt: "/galeria-de-arte" },
  atlanticBazaar: {
    en: "/en/atlantic-bazaar-merch-store",
    pt: "/atlantic-bazaar-loja",
  },
  atlasMusicFestival: {
    en: "/en/atlas-music-festival",
    pt: "/atlas-festival-de-musica",
  },
  bemVindoAoBitcoin: {
    en: "/en/bem-vindo-ao-bitcoin",
    pt: "/bem-vindo-ao-bitcoin",
  },
  bookCorner: { en: "/en/book-corner", pt: "/cantinho-dos-livros" },
  faq: { en: "/en/faq", pt: "/perguntas-frequentes" },
  holecoiner: {
    en: "/en/holecoiner-golf-challenge",
    pt: "/holecoiner-torneio-de-golfe",
  },
  home: { en: "/en", pt: "/" },
  kidsBlock: { en: "/en/kids-block", pt: "/espaco-criancas" },
  layer3: { en: "/en/layer-3", pt: "/bilhete-layer-3" },
  megaPlebDinner: {
    en: "/en/mega-pleb-dinner-speakers",
    pt: "/mega-pleb-dinner-oradores",
  },
  photoGallery: { en: "/en/photo-gallery", pt: "/galeria-de-fotos" },
  plan: { en: "/en/plan", pt: "/planear" },
  recap: { en: "/en/recap", pt: "/retrospetiva" },
  riseOfAtlantis: {
    en: "/en/rise-of-atlantis-pitch-competition",
    pt: "/rise-of-atlantis-competicao-de-pitches",
  },
  satelliteEvents: { en: "/en/satellite-events", pt: "/eventos-satelite" },
  sketches: { en: "/en/sketches", pt: "/esbocos" },
  speakers: { en: "/en/speakers", pt: "/oradores" },
  timechain: { en: "/en/timechain", pt: "/timechain-calendario" },
  venueMap: { en: "/en/venue-map", pt: "/mapa-do-recinto" },
  why: { en: "/en/why", pt: "/porque" },
} as const satisfies Record<string, LocalizedPaths>;

export type Route = keyof typeof routes;
