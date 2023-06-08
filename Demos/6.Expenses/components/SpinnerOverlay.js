import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const SpinnerOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary700,
  },
});

export default SpinnerOverlay;
