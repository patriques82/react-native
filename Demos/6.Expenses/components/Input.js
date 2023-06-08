import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Input = ({ label, invalid, style, textInputConfig }) => {
  const multiline = textInputConfig?.multiline;
  const inputStyle = [styles.input];
  if (multiline) {
    inputStyle.push(styles.multiline);
  }
  if (invalid) {
    inputStyle.push(styles.errorInput);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.errorLabel]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.primary100,
    fontSize: 18,
    padding: 6,
    borderRadius: 6,
    color: colors.primary700,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  errorLabel: {
    color: colors.error500,
  },
  errorInput: {
    backgroundColor: colors.error50,
  },
});

export default Input;
