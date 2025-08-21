import { StatusBar, Text, View } from "react-native";
import "./../../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar style="light" />
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
