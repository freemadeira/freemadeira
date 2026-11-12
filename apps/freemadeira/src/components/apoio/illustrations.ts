import type { SvgComponent } from "astro/types";

import Coin from "@/assets/illustrations/coin.svg";
import FingerTouch from "@/assets/illustrations/finger-touch.svg";
import HandCoin from "@/assets/illustrations/hand-coin.svg";
import HighFive from "@/assets/illustrations/high-five.svg";
import Madeira from "@/assets/illustrations/madeira.svg";
import NamasteB from "@/assets/illustrations/namaste-b.svg";
import NostrMobile from "@/assets/illustrations/nostr-mobile.svg";
import OrangeFile from "@/assets/illustrations/orange-file.svg";
import Planet from "@/assets/illustrations/planet.svg";
import PortalHands from "@/assets/illustrations/portal-hands.svg";
import TelegramLady from "@/assets/illustrations/telegram-lady.svg";

/** The illustration in each page's door, by page slug. */
const bySlug: Record<string, SvgComponent> = {
  "bem-vindo": HighFive,
  "dar-a-conhecer-o-negocio": Madeira,
  "escolher-a-solucao": PortalHands,
  faq: TelegramLady,
  "faturacao-e-impostos": OrangeFile,
  glossario: OrangeFile,
  "lightning-e-on-chain": Planet,
  "o-que-fazer-com-os-bitcoins": Coin,
  "pagamento-nao-chegou": TelegramLady,
  "porque-aceitar": Coin,
  "praticar-e-glossario": NamasteB,
  "quem-guarda-as-chaves": HandCoin,
  "receber-um-pagamento": FingerTouch,
  "wallet-of-satoshi-antiga": NostrMobile,
};

export function illustrationFor(slug: string): SvgComponent {
  return bySlug[slug] ?? Coin;
}
