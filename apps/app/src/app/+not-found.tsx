import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Text } from "@/components/text";
import { useLocale } from "@/hooks/use-locale";
import { useTheme } from "@/hooks/use-theme";
import { m } from "@/paraglide/messages.js";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 16,
    justifyContent: "center",
    padding: 24,
  },
  link: {
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 24,
  },
});

export default function NotFound() {
  const { colors } = useTheme();
  const locale = useLocale();
  return (
    <View style={styles.container}>
      <Text role="heading" style={styles.title} weight="bold">
        {m.not_found_title({}, { locale })}
      </Text>
      <Link href="/">
        <Text
          style={[styles.link, { textDecorationColor: colors.primary }]}
          weight="medium"
        >
          {m.not_found_home({}, { locale })}
        </Text>
      </Link>
    </View>
  );
}
