import { defaultLocale } from "@freemadeira/i18n";
import { StyleSheet, View } from "react-native";

import { Logo } from "@/components/logo";
import { useLocale } from "@/hooks/use-locale";
import { useTheme } from "@/hooks/use-theme";
import { m } from "@/paraglide/messages.js";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

/** The web build's <head>, rendered at build time in the default locale. */
export function generateMetadata() {
  const locale = defaultLocale;
  return {
    description: m.app_description({}, { locale }),
    title: m.app_name({}, { locale }),
  };
}

export default function Home() {
  const { colors } = useTheme();
  const locale = useLocale();
  return (
    <View style={styles.container}>
      <Logo
        color={colors.foreground}
        label={m.app_name({}, { locale })}
        width={240}
      />
    </View>
  );
}
