import { View } from "react-native";
import SectionHeader from "../common/SectionHeader";
import EmptyListView from "../common/EmptyListView";

export default function Accounts() {
  return (
    <View className="px-8">
      <SectionHeader
        title="Accounts"
        rightText="Create a new account"
        onRightTextPress={() => console.log("Create a new account tapped")}
      />
      <EmptyListView />
    </View>
  );
}
