import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import PROFILE_PIC from "../../assets/homeScreen/ProfileImage.svg";

export default function ScreenWrapper({ children, scrollEnabled = true }) {
  const userId = "A232121u";

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(userId);

    if (Platform.OS === "android") {
      ToastAndroid.show("Copied to clipboard!", ToastAndroid.SHORT);
    } else {
      Alert.alert("Success", `User ID ${userId} copied!`);
    }
  };

  return (
    <View className={`flex-1 bg-[#0e0e0e]  `}>
      <View className="flex-row items-center justify-between mt-6 px-8 pb-6">
        <View className="flex-row items-center">
          <View className="w-35 h-35 rounded-full">
            <PROFILE_PIC height={35} width={35} />
          </View>

          <View className="ml-3">
            <View className="flex-row items-center">
              <Text className="text-white font-semibold text-lg">Zee</Text>
              <View className="ml-2 bg-[#1F1400] px-2 py-1 rounded-full">
                <Text className="text-[#F7DA62] text-[10px]">Unverified</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="flex-row items-baseline">
                <Text className="text-gray-400 text-[12px]">ID: </Text>
                <Text className="text-gray-400 text-[16px] font-semibold">
                  {userId}
                </Text>
              </View>
              <TouchableOpacity onPress={copyToClipboard} className="ml-2">
                <Ionicons name="copy-outline" size={15} color="#9b5cff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity className="p-3 bg-black rounded-full">
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="mb-24"
        contentContainerStyle={{
          paddingBottom: 40,
          rowGap: 30,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
      >
        {children}
      </ScrollView>
    </View>
  );
}
