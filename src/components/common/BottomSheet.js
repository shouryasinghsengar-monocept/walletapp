import { Modal, View, TouchableOpacity, Platform } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function BottomSheet({ visible, onClose, children }) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView
        intensity={Platform.OS === "ios" ? 40 : 100}
        tint="dark"
        style={{ flex: 1 }}
      >
        {/* Container to separate overlay and content */}
        <View style={{ flex: 1 }}>
          {/* Tap outside to close */}
          {/* <TouchableOpacity
            activeOpacity={1}
            onPress={onClose}
            style={{ flex: 1 }}
          /> */}

          {/* Modal Content */}
          <View className="absolute bottom-0 w-full rounded-t-3xl bg-black px-6 pb-16 pt-2 ">
            {/* Handle */}
            <View className="w-28 h-1 bg-[#9070D140] rounded-full self-center mb-2" />

            {/* Cross button */}
            <TouchableOpacity
              className="w-8 h-8 self-end justify-center items-center "
              onPress={onClose} // now this will work
            >
              <Ionicons name="close" size={30} color="#FFFFFF40" />
            </TouchableOpacity>

            {children}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
