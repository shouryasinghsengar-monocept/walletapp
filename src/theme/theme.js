import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
} from "react-native-paper";

// ✅ Shared tokens (sync with tailwind.config.js)
const sharedColors = {
  primary: "#9b5cff",
  secondary: "#888888",
  success: "#4caf50",
  error: "#ff4d4d",
};

export const lightTheme = {
  ...PaperLightTheme,
  roundness: 12,
  colors: {
    ...PaperLightTheme.colors,
    ...sharedColors,
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#000000",
  },
};

export const darkTheme = {
  ...PaperDarkTheme,
  roundness: 12,
  colors: {
    ...PaperDarkTheme.colors,
    ...sharedColors,
    background: "#000000",
    surface: "#1a1a1a",
    text: "#ffffff",
  },
};
