import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import Button from "./Button";

const ErrorOverlay = ({ errorMessage, confirmHandler }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured!</Text>
      <Text style={styles.text}>{errorMessage}</Text>
      <Button pressHandler={confirmHandler}>Ok</Button>
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
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ErrorOverlay;
