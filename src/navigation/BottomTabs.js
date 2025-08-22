import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ToolsScreen from "../screens/ToolsScreen";
import AccountsScreen from "../screens/AccountsScreen";
import FundsScreen from "../screens/FundsScreen";
import GROWTH_ICON from "../assets/homeScreen/Growth.svg";
import Analytics from "../screens/Analytics";

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View className="absolute bottom-2 left-0 right-0 items-center">
      <View className="flex-row bg-black w-[95%] h-[81px]  rounded-full px-4">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          let iconName;
          if (route.name === "Home") iconName = "apps";
          else if (route.name === "Tools") iconName = "globe";
          else if (route.name === "Analytics") iconName = "bar-chart";
          else if (route.name === "Accounts") iconName = "wallet";
          else if (route.name === "Funds") iconName = "card";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Middle tab special styling
          if (route.name === "Analytics") {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className="absolute left-[53%] top-[-25px] -translate-x-1/2 bg-black p-4 rounded-full items-center justify-center  "
              >
                <View className="bg-[#9b5cff] p-4 rounded-full items-center justify-center ">
                  <GROWTH_ICON width={35} height={35} />
                </View>
                {isFocused && (
                  <View className="bg-[#9b5cff] h-[3px] w-[95%] absolute bottom-[-12] rounded-full px-4 " />
                )}
              </TouchableOpacity>
            );
          }

          if (route.name === "Skip") {
            return <View key={route.key} className="flex-1" />;
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              className="flex-1 items-center justify-center"
            >
              <Ionicons
                name={iconName}
                size={25}
                color={isFocused ? "#FFFFFF99" : "#FFFFFF4D"}
              />
              <Text
                className={`mt-1 text-[12px] font-semibold ${
                  isFocused ? "text-[#FFFFFF99]" : "text-[#FFFFFF4D]"
                }`}
              >
                {label}
              </Text>
              {isFocused && (
                <View className="bg-[#9b5cff] h-[3px] w-[60%] absolute bottom-0 rounded-full px-4 " />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tools" component={ToolsScreen} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Skip" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Funds" component={FundsScreen} />
    </Tab.Navigator>
  );
}
