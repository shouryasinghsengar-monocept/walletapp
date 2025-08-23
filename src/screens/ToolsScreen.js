import { Text, View } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";

export default function ToolsScreen() {
  return (
    <ScreenWrapper scrollEnabled={false}>
      <View className="flex-1 items-center justify-center ">
        <Text className="text-3xl font-extrabold text-blue-400 text-center">
          ToolsScreen
        </Text>
      </View>
    </ScreenWrapper>
  );
}
