import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function TabTwoScreen() {
  return <View style={styles.container} />;
}

// callback gets the theme object as the first (and only) arg:
const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
}));
