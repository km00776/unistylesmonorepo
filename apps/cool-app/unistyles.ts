import { StyleSheet } from "react-native-unistyles";
import { lightTheme, darkTheme, Theme } from "@km00776/design-tokens";

const appThemes = {
  light: lightTheme,
  // Doing this because darktheme has missing radius
  dark: darkTheme as Theme,
};

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: appThemes,
});
