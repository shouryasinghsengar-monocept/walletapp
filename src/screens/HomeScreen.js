import { Text, View } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center border-2 border-red-500">
        <Text className="text-3xl font-extrabold text-blue-400 text-center">
          HomeScreen
        </Text>
      </View>
    </ScreenWrapper>
  );
}
