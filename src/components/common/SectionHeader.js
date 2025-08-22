import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SectionHeader = ({
  title = "",
  rightText = "",
  onRightTextPress = () => {},
  rightIconName = "",
  rightIconSize = 20,
  rightIconColor = "#A855F7", // Tailwind's purple-400
  onRightIconPress = () => {},
}) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      {/* Left: Section Title */}
      <Text className="text-white text-2xl font-medium">{title}</Text>

      {/* Right: One of (Text Button | Icon | Nothing) */}
      {rightText ? (
        <TouchableOpacity
          onPress={onRightTextPress}
          className="flex-row items-center"
        >
          <Text className="text-purple-400 text-sm font-medium underline">
            {rightText}
          </Text>
          <Text className="text-purple-400 text-sm font-medium"> &gt;</Text>
        </TouchableOpacity>
      ) : rightIconName ? (
        <TouchableOpacity onPress={onRightIconPress}>
          <Ionicons
            name={rightIconName}
            size={rightIconSize}
            color={rightIconColor}
          />
        </TouchableOpacity>
      ) : (
        <View /> // Nothing on right
      )}
    </View>
  );
};

export default SectionHeader;
