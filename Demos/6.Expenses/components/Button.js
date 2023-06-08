import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Button = ({ children, pressHandler, style, mode }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.container, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bordeRadius: 4,
    padding: 8,
    backgroundColor: colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.primary100,
    borderRadius: 4,
  },
});

export default Button;
