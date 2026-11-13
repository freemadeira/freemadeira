import { useColorScheme } from "react-native";

import { useHydrated } from "@/hooks/use-hydrated";
import { colors } from "@/theme/colors";
import type { ColorScheme, Colors } from "@/theme/colors";

/** The device's colour scheme and its colours; light on the web until hydrated. */
export function useTheme(): { colors: Colors; scheme: ColorScheme } {
  const hydrated = useHydrated();
  const system = useColorScheme();
  const scheme = hydrated && system === "dark" ? "dark" : "light";
  return { colors: colors[scheme], scheme };
}
