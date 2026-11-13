import { Text as NativeText, StyleSheet } from "react-native";
import type { TextProps as NativeTextProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { fonts } from "@/theme/fonts";

const weights = {
  bold: "700",
  medium: "500",
  regular: "400",
  semibold: "600",
} as const;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.sans,
    fontSize: 16,
  },
});

type TextProps = NativeTextProps & {
  weight?: keyof typeof weights;
};

/** Text in the brand's typeface and the theme's foreground colour. */
export function Text({ style, weight = "regular", ...props }: TextProps) {
  const { colors } = useTheme();
  return (
    <NativeText
      style={[
        styles.text,
        { color: colors.foreground, fontWeight: weights[weight] },
        style,
      ]}
      {...props}
    />
  );
}
