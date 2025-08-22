import { View } from "react-native";
import SectionHeader from "../common/SectionHeader";
import EmptyListView from "../common/EmptyListView";
import AccountCard from "../accountsScreen/AccountCard";

export default function Accounts() {
  return (
    <View className="px-8">
      <SectionHeader
        title="Accounts"
        rightText="Create a new account"
        onRightTextPress={() => console.log("Create a new account tapped")}
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
    </View>
  );
}
