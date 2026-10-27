import facebook from "@/assets/socials/facebook.svg";
import github from "@/assets/socials/github.svg";
import instagram from "@/assets/socials/instagram.svg";
import linkedin from "@/assets/socials/linkedin.svg";
import nostr from "@/assets/socials/nostr.svg";
import telegram from "@/assets/socials/telegram.svg";
import x from "@/assets/socials/x.svg";
import youtube from "@/assets/socials/youtube.svg";

export const socialNetworks = {
  facebook: {
    baseUrl: "https://www.facebook.com/",
    icon: facebook,
    name: "Facebook",
  },
  github: { baseUrl: "https://github.com/", icon: github, name: "GitHub" },
  instagram: {
    baseUrl: "https://www.instagram.com/",
    icon: instagram,
    name: "Instagram",
  },
  linkedin: {
    baseUrl: "https://www.linkedin.com/",
    icon: linkedin,
    name: "LinkedIn",
  },
  nostr: { baseUrl: "https://njump.me/", icon: nostr, name: "Nostr" },
  telegram: { baseUrl: "https://t.me/", icon: telegram, name: "Telegram" },
  x: { baseUrl: "https://x.com/", icon: x, name: "X" },
  youtube: {
    baseUrl: "https://www.youtube.com/@",
    icon: youtube,
    name: "YouTube",
  },
} as const;

export type Social = keyof typeof socialNetworks;

export const freeMadeiraNpub =
  "npub1etgqcj9gc6yaxttuwu9eqgs3ynt2dzaudvwnrssrn2zdt2useaasfj8n6e";

/** FREE Madeira's accounts, in the order the footer shows them. */
export const freeMadeiraSocials: [Social, string][] = [
  ["x", "FREEMadeiraOrg"],
  ["nostr", freeMadeiraNpub],
  ["youtube", "freemadeira"],
  ["telegram", "freemadeira"],
  ["facebook", "freemadeira"],
  ["instagram", "freemadeiraorg"],
  ["github", "freemadeira"],
  ["linkedin", "company/freemadeira"],
];
