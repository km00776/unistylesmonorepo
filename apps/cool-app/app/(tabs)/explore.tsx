import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function TabTwoScreen() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create(({ color, font, spacing, radius }) => ({
  container: {
    flex: 1,
    backgroundColor: color,
  },
}));
