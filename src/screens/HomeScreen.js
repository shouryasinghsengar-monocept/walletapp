import React from "react";
import { ScrollView } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";
import WalletSwiper from "../components/homeScreen/WalletSwiper";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 20,
          marginTop: 30,
          rowGap: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <WalletSwiper />
      </ScrollView>
    </ScreenWrapper>
  );
}
