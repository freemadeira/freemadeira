import { useFonts } from "expo-font";
import { Stack, ThemeProvider } from "expo-router";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { setBackgroundColorAsync } from "expo-system-ui";
import { useEffect } from "react";

import { useTheme } from "@/hooks/use-theme";
import { fontFamilies } from "@/theme/fonts";
import { navigationThemes } from "@/theme/navigation";

// Keep the splash screen up until the fonts are in.
preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts(fontFamilies);
  const { colors, scheme } = useTheme();

  useEffect(() => {
    if (loaded || error) {
      hideAsync();
    }
  }, [loaded, error]);

  // The root view shows behind screens during transitions and the keyboard.
  useEffect(() => {
    setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  if (!(loaded || error)) {
    return null;
  }

  return (
    <ThemeProvider value={navigationThemes[scheme]}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
