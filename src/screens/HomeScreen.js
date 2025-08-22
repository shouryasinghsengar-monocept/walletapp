import React from "react";
import { ScrollView } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";
import WalletSwiper from "../components/homeScreen/WalletSwiper";
import QuickAccess from "../components/homeScreen/QuickAccess";
import Accounts from "../components/homeScreen/Accounts";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        className="mb-24"
        contentContainerStyle={{
          paddingBottom: 40,
          rowGap: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <WalletSwiper />
        <QuickAccess />
        <Accounts />
      </ScrollView>
    </ScreenWrapper>
  );
}
