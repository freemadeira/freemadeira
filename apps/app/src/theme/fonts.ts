import { SchibstedGrotesk_400Regular } from "@expo-google-fonts/schibsted-grotesk/400Regular";
import { SchibstedGrotesk_500Medium } from "@expo-google-fonts/schibsted-grotesk/500Medium";
import { SchibstedGrotesk_600SemiBold } from "@expo-google-fonts/schibsted-grotesk/600SemiBold";
import { SchibstedGrotesk_700Bold } from "@expo-google-fonts/schibsted-grotesk/700Bold";
import type { FontFamilyDefinition } from "expo-font";

/** The sites' typeface. Pick a weight with `fontWeight`, as in CSS. */
export const fonts = {
  sans: "Schibsted Grotesk",
} as const;

/**
 * The weights the sites use, loaded as one family. Android below 10 loads
 * only the regular face and synthesises the others.
 */
export const fontFamilies: FontFamilyDefinition[] = [
  {
    fontDefinitions: [
      { path: SchibstedGrotesk_400Regular, weight: 400 },
      { path: SchibstedGrotesk_500Medium, weight: 500 },
      { path: SchibstedGrotesk_600SemiBold, weight: 600 },
      { path: SchibstedGrotesk_700Bold, weight: 700 },
    ],
    fontFamily: fonts.sans,
  },
];
