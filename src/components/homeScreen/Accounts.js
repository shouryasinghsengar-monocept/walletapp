import { View } from "react-native";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import EmptyListView from "../common/EmptyListView";
import AccountCard from "../accountsScreen/AccountCard";
import AccountsCreationMoal from "./../accountsScreen/AccountsCreationModal";

export default function Accounts() {
  const [openAccountCreationModal, setOpenAccountCreationModal] =
    useState(false);

  return (
    <View className="px-8">
      <SectionHeader
        title="Accounts"
        rightText="Create a new account"
        onRightTextPress={() => setOpenAccountCreationModal(true)}
      />
      <EmptyListView />
      <View className="flex-row justify-between mt-4 gap-x-3">
        <AccountCard
          type="pro"
          title="Create a new"
          subtitle="Live account"
          description="Deposit and trade profits"
          colors={["#4E3368", "#30124D"]}
          icon={require("./../../assets/homeScreen/CANDELSTICK.png")}
          titleWidthClass={"w-[70%]"}
        />

        <AccountCard
          type="beginner"
          title="Start with"
          subtitle="Demo"
          description="Trade with virtual capital"
          colors={["#20112E", "#674588"]}
          icon={require("./../../assets/homeScreen/DOLLAR.png")}
          titleWidthClass={"w-[70%]"}
        />
      </View>
      <AccountsCreationMoal
        visible={openAccountCreationModal}
        setVisible={setOpenAccountCreationModal}
      />
    </View>
  );
}
