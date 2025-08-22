import { View } from "react-native";
import SectionHeader from "../common/SectionHeader";
import EmptyListView from "../common/EmptyListView";
import AccountCard from "../accountsScreen/AccountCard";
import { CANDELSTICK_IMAGE, DOLLAR_IMAGE } from "../common/ImportIcons";

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
          icon={<CANDELSTICK_IMAGE height={75} width={75} />}
          titleWidthClass={"w-[60%]"}
        />

        <AccountCard
          type="beginner"
          title="Start with"
          subtitle="Demo"
          description="Trade with virtual capital"
          colors={["#20112E", "#674588"]}
          icon={<DOLLAR_IMAGE height={65} width={65} />}
          titleWidthClass={"w-[45%]"}
        />
      </View>
    </View>
  );
}
