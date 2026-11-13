import type { Theme } from "expo-router";

import { colors } from "@/theme/colors";
import type { ColorScheme } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

function navigationTheme(scheme: ColorScheme): Theme {
  const palette = colors[scheme];
  return {
    colors: {
      background: palette.background,
      border: palette.border,
      card: palette.card,
      notification: palette.primary,
      primary: palette.primary,
      text: palette.foreground,
    },
    dark: scheme === "dark",
    fonts: {
      bold: { fontFamily: fonts.sans, fontWeight: "700" },
      heavy: { fontFamily: fonts.sans, fontWeight: "700" },
      medium: { fontFamily: fonts.sans, fontWeight: "500" },
      regular: { fontFamily: fonts.sans, fontWeight: "400" },
    },
  };
}

/** React Navigation's themes, so headers, tabs and screens wear the brand. */
export const navigationThemes: Record<ColorScheme, Theme> = {
  dark: navigationTheme("dark"),
  light: navigationTheme("light"),
};
