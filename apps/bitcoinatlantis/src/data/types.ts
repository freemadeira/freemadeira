import type { ImageMetadata } from "astro";

/** Someone shown with a photo: a speaker, author, artist or team member. */
export interface Person {
  bio?: string;
  company?: string;
  image: ImageMetadata;
  name: string;
  nostr?: string;
  role?: string;
  title?: string;
  twitter?: string;
}

/** A sponsor, partner or merchant, linked by its logo. */
export interface Logo {
  logo: ImageMetadata;
  name: string;
  /** Scales the logo against the others in its row, to even out their weight. */
  sizeMultiplier?: number;
  url?: string;
}
