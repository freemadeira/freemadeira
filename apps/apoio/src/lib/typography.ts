/**
 * The heading scale, by its size on screen rather than by tag, so a heading
 * can be an h2 for the outline and still look like the design's h4. The same
 * scale as freemadeira.org's.
 */
export const heading = {
  h3: "text-pretty text-[40px] leading-[54px] sm:text-[56px] sm:leading-[64px]",
  h4: "text-pretty text-[32px] leading-[40px] sm:text-[40px] sm:leading-[51px]",
  h5: "text-pretty text-[24px] leading-[32px] sm:text-[32px] sm:leading-normal",
  h6: "text-pretty text-[20px] leading-[150%] sm:text-2xl sm:tracking-normal",
} as const;
