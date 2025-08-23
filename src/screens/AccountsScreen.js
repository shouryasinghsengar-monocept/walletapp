import { View, TextInput } from "react-native";
import ScreenWrapper from "../components/common/ScreenWrapper";
import SectionHeader from "../components/common/SectionHeader";
import SegmentedControl from "../components/common/SegmentedControl";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import EmptyListView from "../components/common/EmptyListView";
import AccountsCreationModal from "../components/accountsScreen/AccountsCreationModal";

export default function AccountsScreen() {
  const [selected, setSelected] = useState("Real");
  const [openAccountCreationModal, setOpenAccountCreationModal] =
    useState(false);

  return (
    <ScreenWrapper>
      <View className="px-6">
        <SectionHeader
          title="Accounts Overview"
          rightIconName="filter"
          rightIconColor="#FFFFFFBF"
        />
        <SegmentedControl
          tabs={["Real", "Demo", "Archived"]}
          selected={selected}
          onChange={setSelected}
        />
        <View className="flex-row items-center border border-stone-800 rounded-full px-4 py-2 my-6 w-full">
          <Ionicons name="search-outline" size={20} color="#FFFFFF40" />
          <TextInput
            placeholder="Search account"
            placeholderTextColor="#FFFFFF40"
            className="flex-1 ml-2 text-white"
          />
        </View>
        <EmptyListView
          actionLinkText={"+ Create a new account"}
          handleAction={() => setOpenAccountCreationModal(true)}
        />
        <AccountsCreationModal
          visible={openAccountCreationModal}
          setVisible={setOpenAccountCreationModal}
        />
      </View>
    </ScreenWrapper>
  );
}
