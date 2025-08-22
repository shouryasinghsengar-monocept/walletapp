import { Text, View } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";

export default function Analytics() {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center ">
        <Text className="text-3xl font-extrabold text-blue-400 text-center">
          Analytics
        </Text>
      </View>
    </ScreenWrapper>
  );
}
