import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      <StatusBar style="light" />

      <Text className="text-3xl font-extrabold text-blue-400 mb-4 text-center">
        Hello Booming Bulls 👋
      </Text>

      <Text className="text-xl font-bold text-white mb-2 text-center">
        Shourya this side 🚀
      </Text>

      <Text className="text-lg text-gray-300 text-center leading-6">
        The starter app is all set up and ready to roll on both iOS and Android.
        Rest is on the way — stay tuned in!
      </Text>
    </View>
  );
}
