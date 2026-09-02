import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { bemaraColors } from "@bemara/design-tokens";
import { getDictionary } from "@bemara/i18n";
import { BemaraMobileMark, bemaraMobileStyles } from "@bemara/ui-mobile";

import bemaraIcon from "../assets/brand/bemara-icon.png";

const copy = getDictionary("es-MX");

export default function MobileHome() {
  return (
    <SafeAreaView style={bemaraMobileStyles.screen}>
      <View style={{ gap: 28 }}>
        <BemaraMobileMark source={bemaraIcon} />
        <View style={{ gap: 12 }}>
          <Text style={bemaraMobileStyles.title}>{copy["mobile.home.title"]}</Text>
          <Text style={bemaraMobileStyles.body}>{copy["mobile.home.body"]}</Text>
        </View>
        <ImageBackground
          imageStyle={{ opacity: 0.12, resizeMode: "contain" }}
          source={bemaraIcon}
          style={{
            backgroundColor: bemaraColors.silkCream,
            borderColor: "rgba(36, 24, 32, 0.12)",
            borderRadius: 22,
            borderWidth: 1,
            minHeight: 220,
            overflow: "hidden",
            padding: 22,
          }}
        >
          <Text style={[bemaraMobileStyles.body, { color: bemaraColors.bordeauxNoir }]}>
            {copy["personal.shell.title"]}
          </Text>
          <Text style={[bemaraMobileStyles.title, { fontSize: 28, lineHeight: 34, marginTop: 16 }]}>
            {copy["personal.shell.body"]}
          </Text>
        </ImageBackground>
        <Pressable
          accessibilityRole="button"
          style={{
            alignItems: "center",
            backgroundColor: bemaraColors.bordeauxNoir,
            borderRadius: 8,
            minHeight: 48,
            justifyContent: "center",
            paddingHorizontal: 18,
          }}
        >
          <Text style={{ color: bemaraColors.ivory, fontSize: 14, fontWeight: "700" }}>
            {copy["mobile.lena.prompt"]}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
