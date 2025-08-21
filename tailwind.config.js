/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#9b5cff",
        secondary: "#888888",
        success: "#4caf50",
        error: "#ff4d4d",
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        surface: {
          light: "#f5f5f5",
          dark: "#1a1a1a",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
