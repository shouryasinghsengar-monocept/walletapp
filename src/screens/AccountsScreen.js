import { View, Text } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";

export default function AccountsScreen() {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-extrabold text-blue-400 text-center">
          AccountsScreen
        </Text>
      </View>
    </ScreenWrapper>
  );
}
