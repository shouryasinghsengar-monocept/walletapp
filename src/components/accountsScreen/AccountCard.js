import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AccountCard = ({
  type, // "pro" | "beginner"
  title,
  subtitle,
  description,
  colors,
  icon,
  titleWidthClass = "w-[60%]",
  handleOnPress = () => {
    console.log(`${title + " " + subtitle} clicked !`);
  },
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-1 w-48 h-30"
      onPress={handleOnPress}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          borderRadius: 16,
          padding: 16,
        }}
      >
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-gray-300 text-xs">
            {type === "pro" ? "*For Pro Traders" : "*For Beginners"}
          </Text>
          <View className="absolute right-[-15] top-[-15] rotate-[19deg] size-16 ">
            {icon}
          </View>
        </View>

        <View className="mb-2 ">
          <Text
            className={`text-white text-lg font-normal ${titleWidthClass} `}
          >
            {title}
          </Text>
          <Text className="text-purple-400 text-lg font-bold">{subtitle}</Text>
        </View>

        <Text className="text-gray-400 text-sm font-medium">{description}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AccountCard;
