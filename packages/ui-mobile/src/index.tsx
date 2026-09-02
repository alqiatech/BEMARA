import type { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Image, StyleSheet, View } from "react-native";

import { bemaraColors, bemaraTypography } from "@bemara/design-tokens";

export const bemaraMobileTheme = {
  colors: bemaraColors,
  typography: bemaraTypography.mobile,
} as const;

export const bemaraMobileStyles = StyleSheet.create({
  screen: {
    backgroundColor: bemaraColors.ivory,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  } satisfies ViewStyle,
  title: {
    color: bemaraColors.blackPlum,
    fontFamily: "Questrial",
    fontSize: 34,
    lineHeight: 40,
  } satisfies TextStyle,
  body: {
    color: bemaraColors.blackPlum,
    fontFamily: "Questrial",
    fontSize: 15,
    lineHeight: 24,
  } satisfies TextStyle,
  icon: {
    height: 56,
    width: 56,
  } satisfies ImageStyle,
});

export interface BemaraMobileMarkProps {
  source: ImageSourcePropType;
}

export function BemaraMobileMark({ source }: BemaraMobileMarkProps) {
  return (
    <View accessibilityLabel="BEMARA" accessible>
      <Image source={source} style={bemaraMobileStyles.icon} />
    </View>
  );
}
