import { Text } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
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
    </ScreenWrapper>
  );
}
