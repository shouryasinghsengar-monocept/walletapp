import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;
const CARD_SPACING = (width - CARD_WIDTH) / 2;

const walletData = [
  {
    id: "1",
    walletId: "12832U",
    balance: "00.0",
    currency: "USD",
    change: "+0.00 (+0%)",
  },
  {
    id: "2",
    walletId: "22832X",
    balance: "245.7",
    currency: "USD",
    change: "+12.45 (+5%)",
  },
  {
    id: "3",
    walletId: "32832Z",
    balance: "500.0",
    currency: "USD",
    change: "-5.00 (-1%)",
  },
];

export default function WalletSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const [hiddenStates, setHiddenStates] = useState({});

  const toggleHidden = (id) => {
    setHiddenStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    setCurrentIndex(index);
  };

  const renderWalletCard = ({ item, index }) => {
    const isActive = index === currentIndex;

    return (
      <View style={{ width: CARD_WIDTH }}>
        <LinearGradient
          colors={["#9b5cff", "#7b2ff7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradientBox,
            isActive ? styles.activeCard : styles.inactiveCard,
          ]}
        >
          {/* Wallet ID + Currency */}
          <View className="flex-row justify-between items-center mb-[5px]">
            <Text className="text-white text-sm font-medium">
              Wallet ID: {item.walletId}
            </Text>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => {}}
            >
              <Text className="text-white text-sm font-medium">
                {item.currency}
              </Text>
              <Ionicons
                name="caret-down"
                size={10}
                color="#e0d5f5"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View className="flex-row items-baseline mb-2">
            <Text className="text-white text-5xl font-bold tracking-widest">
              $
            </Text>
            <Text className="text-white text-5xl font-bold tracking-widest">
              {hiddenStates[item.id]
                ? `${"*".repeat(String(item.balance).length)}`
                : `${item.balance}`}
            </Text>
            <TouchableOpacity
              onPress={() => toggleHidden(item.id)}
              className="ml-2 pt-1"
            >
              <Ionicons
                name={hiddenStates[item.id] ? "eye-off" : "eye"}
                size={13}
                color="white"
              />
            </TouchableOpacity>
          </View>

          {/* Change */}
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white text-xs font-medium mb-1">
                Last 24 hours
              </Text>
              <View className="flex-row items-center">
                <Ionicons
                  name="trending-up"
                  size={15}
                  color="#44EC60"
                  style={{ marginRight: 4 }}
                />
                <Text className="text-[#44EC60] text-base font-semibold">
                  {item.change}
                </Text>
              </View>
            </View>

            <TouchableOpacity className="bg-black px-5 py-3 rounded-full  ">
              <Text className="text-white text-xs font-semibold">Withdraw</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View className="items-center justify-center">
      {/* Swiper */}
      <FlatList
        data={walletData}
        renderItem={renderWalletCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: CARD_SPACING,
          columnGap: 16,
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Pagination Dots */}
      <View className="flex-row mt-5">
        {walletData.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-gray-300 " : "bg-gray-600"
            }`}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBox: {
    borderRadius: 20,
    paddingHorizontal: 38,
    paddingTop: 28,
    paddingBottom: 21,
    flex: 1,
  },
  activeCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    opacity: 1,
  },
  inactiveCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    opacity: 0.4,
  },
});
