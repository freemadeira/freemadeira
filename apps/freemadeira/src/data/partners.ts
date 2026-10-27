import energy21 from "@/assets/partners/21-energy.svg";
import bitcoinBrabant from "@/assets/partners/bitcoin-brabant.svg";
import cryptosteel from "@/assets/partners/cryptosteel.svg";
import openSats from "@/assets/partners/opensats.svg";
import paystand from "@/assets/partners/paystand.svg";
import vulcan21 from "@/assets/partners/vulcan21.svg";
import zaprite from "@/assets/partners/zaprite.svg";

/** `width` overrides the default logo width, for logos with odd proportions. */
export const partners = [
  {
    href: "https://www.paystand.org/",
    logo: paystand,
    name: "Paystand",
    width: "w-56 sm:w-64",
  },
  { href: "https://opensats.org/", logo: openSats, name: "OpenSats" },
  {
    href: "https://zaprite.com/",
    logo: zaprite,
    name: "Zaprite",
    width: "w-32 sm:w-40",
  },
  { href: "https://cryptosteel.com/", logo: cryptosteel, name: "Cryptosteel" },
  {
    href: "https://21energy.com/",
    logo: energy21,
    name: "21 Energy",
    width: "w-32 sm:w-40",
  },
  {
    href: "https://bitcoinbrabant.com/",
    logo: bitcoinBrabant,
    name: "Bitcoin Brabant",
    width: "w-36 sm:w-48",
  },
  {
    href: "https://vulcan21.com/",
    logo: vulcan21,
    name: "Vulcan21",
    width: "w-14 sm:w-20",
  },
];
