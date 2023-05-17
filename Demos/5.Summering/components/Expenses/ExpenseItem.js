import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text>{description}</Text>
          <Text>{date.toString()}</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});

export default ExpenseItem;
