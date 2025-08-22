import { View } from "react-native";
import React from "react";

export default function ScreenWrapper({ children, style }) {
  return (
    <View className={`flex-1 bg-[#0e0e0e] px-8 ${style || ""}`}>
      {children}
    </View>
  );
}
