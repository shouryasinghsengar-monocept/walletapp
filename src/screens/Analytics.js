import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Analytics() {
  const phoneNumber = "+919717838216";
  const email = "singhshourya2004@gmail.com";

  return (
    <View className="flex-1 items-center justify-center px-6 bg-[#0e0e0e]">
      {/* Greeting */}
      <Text className="text-5xl mb-2">👋</Text>
      <Text className="text-2xl font-bold text-white">Hi, I’m</Text>
      <Text className="text-3xl font-extrabold text-purple-400">
        Shourya Singh Sengar
      </Text>

      {/* Tagline */}
      <Text className="text-base text-neutral-400 mt-2 italic">
        ☕ Love coffee & code 💻
      </Text>

      {/* Divider */}
      <View className="h-[1px] bg-neutral-800 w-2/3 my-6" />

      {/* Contact Info */}
      <View className="gap-4">
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          className="flex-row items-center gap-2"
        >
          <Ionicons name="call-outline" size={20} color="#a855f7" />
          <Text className="text-white text-base">{phoneNumber}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:${email}`)}
          className="flex-row items-center gap-2"
        >
          <Ionicons name="mail-outline" size={20} color="#a855f7" />
          <Text className="text-white text-base">{email}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
