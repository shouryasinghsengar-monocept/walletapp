import ScreenWrapper from "../components/common/ScreenWrapper";
import WalletSwiper from "../components/homeScreen/WalletSwiper";
import QuickAccess from "../components/homeScreen/QuickAccess";
import Accounts from "../components/homeScreen/Accounts";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <WalletSwiper />
      <QuickAccess />
      <Accounts />
    </ScreenWrapper>
  );
}
