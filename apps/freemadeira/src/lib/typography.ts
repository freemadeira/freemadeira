/**
 * The heading scale, by its size on screen rather than by tag, so a heading
 * can be an h2 for the outline and still look like the design's h4.
 */
export const heading = {
  h1: "font-medium text-[56px] leading-[64px] sm:text-[104px] sm:leading-[120px]",
  h3: "text-[40px] leading-[54px] sm:text-[56px] sm:leading-[64px]",
  h4: "text-[32px] leading-[40px] sm:text-[40px] sm:leading-[51px]",
  h5: "text-[24px] leading-[32px] sm:text-[32px] sm:leading-normal",
  h6: "text-[20px] leading-[150%] sm:text-2xl sm:tracking-normal",
} as const;

export type HeadingSize = keyof typeof heading;

/** The page gutter around every section; the inner width varies. */
export const containerWrapper =
  "mx-auto w-full max-w-[1536px] px-4 sm:px-8 md:px-10 xl:px-12";
