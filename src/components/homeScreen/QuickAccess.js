import { View, Text, TouchableOpacity } from "react-native";
import {
  ACCOUNTS_ICON,
  ADD_ICON,
  DEPOSITS_ICON,
  GET_FUND_ICON,
  WITHDRAWALS_ICON,
} from "./../common/ImportIcons";
import SectionHeader from "../common/SectionHeader";

const quickAccessItems = [
  { label: "Get Funded", icon: <GET_FUND_ICON height={24} width={24} /> },
  { label: "Deposits", icon: <DEPOSITS_ICON height={24} width={24} /> },
  { label: "Withdrawals", icon: <WITHDRAWALS_ICON height={24} width={24} /> },
  { label: "Accounts", icon: <ACCOUNTS_ICON height={24} width={24} /> },
  { label: "Add", icon: <ADD_ICON height={24} width={24} /> },
];

export default function QuickAccess() {
  return (
    <View className="px-8">
      <SectionHeader
        title="Quick Access"
        rightText="Customize"
        onRightTextPress={() => console.log("Customize tapped")}
      />

      <View className="flex-row justify-between">
        {quickAccessItems.map((item, index) => (
          <View key={index} className="items-center justify-center">
            <TouchableOpacity className="w-16 h-16 rounded-full bg-[#2C1E3980] items-center justify-center">
              {item.icon}
            </TouchableOpacity>
            <Text className="text-white text-xs font-medium  mt-3">
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
