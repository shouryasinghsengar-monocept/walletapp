import { View, Text, TouchableOpacity } from "react-native";

export default function EmptyListView({
  heading = "No items to display",
  subHeading = "Create a new account or unarchive",
  actionLinkText = null,
  handleAction = () => {
    console.log("Link clickd !!");
  },
}) {
  return (
    <View
      className={`border border-dashed border-[#FFFFFF40] rounded-xl items-center justify-center ${actionLinkText ? "p-12" : "p-8"}`}
    >
      <Text className="text-white text-base font-medium mb-1">{heading}</Text>
      <Text className="text-[#FFFFFF66] text-xs font-medium">{subHeading}</Text>
      {actionLinkText && (
        <TouchableOpacity onPress={handleAction}>
          <Text className="text-[#9070D1] text-sm font-medium mt-3">
            {actionLinkText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
