import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

/** A full-width photo for a React island, optimised at build time. */
export async function slideImage(src: ImageMetadata) {
  const image = await getImage({
    quality: 70,
    src,
    width: 2048,
    widths: [640, 1024, 1600, 2048],
  });
  return { sizes: "100vw", src: image.src, srcset: image.srcSet.attribute };
}
