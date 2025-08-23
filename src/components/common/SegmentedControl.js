import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SegmentedControl({ tabs, selected, onChange }) {
  return (
    <View className="flex-row rounded-[12px] border border-stone-800 overflow-hidden p-1">
      {tabs.map((tab) => {
        const isActive = selected === tab;
        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onChange(tab)}
            className="flex-1 justify-around"
            activeOpacity={0.9}
          >
            {isActive ? (
              <LinearGradient
                colors={["rgba(78, 51, 104, 0.5)", "rgba(48, 18, 77, 0.5)"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
              >
                <Text className="text-base font-semibold text-white">
                  {tab}
                </Text>
              </LinearGradient>
            ) : (
              <View className="py-3 items-center justify-center bg-transparent ">
                <Text className="text-base font-semibold text-[##FFFFFF80]">
                  {tab}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
