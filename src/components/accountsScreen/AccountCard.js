import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
      className="w-[50%] h-30"
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
        <View className="flex-row justify-between items-center mb-3 relative">
          <Text className="text-gray-300 text-xs">
            {type === "pro" ? "*For Pro Traders" : "*For Beginners"}
          </Text>

          {/* Positioned Image */}
          <Image
            source={icon} // or {icon} if it's passed as a prop
            className="absolute right-[-15px] top-[-15px] rotate-[19deg] w-16 h-16"
            resizeMode="contain"
          />
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
