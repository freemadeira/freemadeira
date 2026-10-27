import { locales, toLocale } from "@freemadeira/i18n";
import type { Locale } from "@freemadeira/i18n";

import { links } from "@/data/organisation";
import { routes } from "@/i18n/routes";
import { m } from "@/paraglide/messages.js";

/** A top-level header link: dark text with an underline on hover. */
export const menuItemClass =
  "cursor-pointer border-b border-b-transparent pb-2 text-dark hover:border-b-dark focus-visible:outline-none focus-visible:border-b-dark active:border-b-dark";

export interface NavLink {
  href: string;
  label: string;
}

/** The header's links, shared by the desktop bar and the mobile menu. */
export function navigation(currentLocale: string | undefined) {
  const locale: Locale = toLocale(currentLocale);
  const t = { locale };
  return {
    about: {
      items: [
        { href: routes.about[locale], label: m.nav_free_madeira({}, t) },
        { href: routes.team[locale], label: m.nav_team({}, t) },
        { href: routes.partnerships[locale], label: m.nav_partnerships({}, t) },
        { href: routes.madeira[locale], label: m.nav_madeira({}, t) },
      ],
      label: m.nav_about({}, t),
    },
    bitcoinAtlantis: {
      href: links.bitcoinAtlantis,
      label: m.nav_bitcoin_atlantis({}, t),
    },
    learn: { href: links.learn, label: m.nav_learn({}, t) },
    otherLocale: locales.find((other) => other !== locale) ?? locale,
    shop: { href: links.shop, label: m.nav_shop({}, t) },
  };
}
