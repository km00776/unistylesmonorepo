import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function TabTwoScreen() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create(({ theme }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.color.primary,
  },
}));
