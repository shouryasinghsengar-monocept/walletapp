import { View, Text, Image, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";
import SectionHeader from "../components/common/SectionHeader";

export default function FundsScreen() {
  const fundsOptions = [
    {
      id: 1,
      title: "Deposit",
      subtitle: "Min Deposit is $10.",
      icon: require("./../assets/fundsScreen/Component 1.png"),
    },
    {
      id: 2,
      title: "Withdraw",
      subtitle: "Max withdrawal is $1M.",
      icon: require("./../assets/fundsScreen/Component 4.png"),
    },
    {
      id: 3,
      title: "Transfer",
      subtitle: "Funds Limit: Unlimited",
      icon: require("./../assets/fundsScreen/Component 2.png"),
    },
    {
      id: 4,
      title: "Transactions",
      subtitle: "Recent Transactions",
      icon: require("./../assets/fundsScreen/Component 3.png"),
    },
  ];

  return (
    <ScreenWrapper scrollEnabled={false}>
      <View className="px-6">
        <SectionHeader title="Funds Overview" />

        <View className="flex-row flex-wrap justify-between">
          {fundsOptions.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              className="w-[48%] bg-black rounded-[10px] pl-5 pb-7 mb-4  border border-stone-900 elevation-lg overflow-hidden"
            >
              <View className="flex-row-reverse">
                <Image
                  source={item.icon}
                  className="w-28 h-28 border"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-white text-lg font-medium">
                {item.title}
              </Text>
              <Text className="text-[#FFFFFF80] text-sm mt-1">
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
