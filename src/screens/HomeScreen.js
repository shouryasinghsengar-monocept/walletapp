import React from "react";
import { ScrollView } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";
import WalletSwiper from "../components/homeScreen/WalletSwiper";
import QuickAccess from "../components/homeScreen/QuickAccess";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 20,
          rowGap: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <WalletSwiper />
        <QuickAccess />
      </ScrollView>
    </ScreenWrapper>
  );
}
