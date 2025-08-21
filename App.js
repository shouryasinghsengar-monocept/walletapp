import { ApolloProvider } from "@apollo/client";
import client from "./src/apollo/client";

import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/theme/theme";
import "./global.css";

export default function App() {
  const navigationRef = useRef(null);
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={lightTheme}>
          <BottomSheetModalProvider>
            <NavigationContainer ref={navigationRef}>
              <Navigation />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
}
