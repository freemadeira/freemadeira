/**
 * FREE Madeira's palette, from freemadeira.org's global.css: Supernova
 * yellow, Bridal Heath and Mountain Mist. React Native has no oklch(), so the
 * site's oklch values are converted to hex.
 */
export const palette = {
  bridal: {
    100: "#f6eede",
    200: "#ecdabc",
    300: "#e0bf91",
    400: "#d39f64",
    50: "#fbf7f0",
    500: "#c98746",
    600: "#bb713b",
    700: "#9c5a32",
    800: "#7d482f",
    900: "#663d28",
    950: "#361e14",
  },
  dark: "#090506",
  mountainMist: {
    100: "#e6e6e7",
    200: "#d0d0d1",
    300: "#aeafb2",
    400: "#949598",
    50: "#f5f5f6",
    500: "#6b6d6f",
    600: "#5b5c5f",
    700: "#4e4f50",
    800: "#444546",
    950: "#252527",
  },
  primary: {
    100: "#fffac2",
    200: "#fff187",
    300: "#ffe243",
    400: "#ffcb05",
    50: "#fefce8",
    500: "#efb403",
    600: "#ce8b00",
    700: "#a46204",
    800: "#884c0b",
    900: "#733e10",
    950: "#432005",
  },
  tangerine: "#ff9567",
  white: "#ffffff",
} as const;

export type ColorScheme = "light" | "dark";

export interface Colors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
}

/**
 * The semantic tokens, named like the sites' shadcn tokens. Light mode is the
 * site's; dark mode is the blog's night reading theme (reader-toggle.astro),
 * warm enough that the logo's black outline still shows.
 */
export const colors: Record<ColorScheme, Colors> = {
  dark: {
    background: "#1a1613",
    border: "#3a332b",
    card: "#27221d",
    cardForeground: "#e3d9c8",
    foreground: "#e3d9c8",
    muted: "#29231d",
    mutedForeground: "#a69885",
    primary: palette.primary[400],
    primaryForeground: palette.dark,
    secondary: "#29231d",
    secondaryForeground: "#e3d9c8",
  },
  light: {
    background: palette.white,
    border: palette.mountainMist[200],
    card: palette.white,
    cardForeground: palette.dark,
    foreground: palette.dark,
    muted: palette.bridal[50],
    mutedForeground: palette.mountainMist[500],
    primary: palette.primary[400],
    primaryForeground: palette.dark,
    secondary: palette.bridal[100],
    secondaryForeground: palette.dark,
  },
};
