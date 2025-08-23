import { View, Text } from "react-native";
import BottomSheet from "../common/BottomSheet";
import AccountCard from "./AccountCard";

export default function AccountsCreationModal({ visible, setVisible }) {
  return (
    <BottomSheet visible={visible} onClose={() => setVisible(false)}>
      <Text className="text-2xl font-medium text-white mb-3">
        Your trading journey is 2 steps away...
      </Text>
      <Text className="text-gray-400 text-sm font-medium mb-4">
        Choose your trade account type
      </Text>
      <View className="flex-row justify-between gap-x-3">
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
    </BottomSheet>
  );
}
