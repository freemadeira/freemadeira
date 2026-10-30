/**
 * The heading scale, by its size on screen rather than by tag, so a heading
 * can be an h2 for the outline and still look like the design's h4.
 *
 * The h1 is 56px on phones and 104px from sm, but never wider than 16% of
 * its column (an `@container`), so the longest title word ("Partnerships",
 * six times the font size) fits at every width.
 */
export const heading = {
  h1: "font-medium text-pretty text-[length:min(3.5rem,16cqi)] leading-[1.143] sm:text-[length:min(6.5rem,16cqi)] sm:leading-[1.154]",
  h3: "text-pretty text-[40px] leading-[54px] sm:text-[56px] sm:leading-[64px]",
  h4: "text-pretty text-[32px] leading-[40px] sm:text-[40px] sm:leading-[51px]",
  h5: "text-pretty text-[24px] leading-[32px] sm:text-[32px] sm:leading-normal",
  h6: "text-pretty text-[20px] leading-[150%] sm:text-2xl sm:tracking-normal",
} as const;

export type HeadingSize = keyof typeof heading;

/** The page gutter around every section; the inner width varies. */
export const containerWrapper =
  "mx-auto w-full max-w-[1536px] px-4 sm:px-8 md:px-10 xl:px-12";
