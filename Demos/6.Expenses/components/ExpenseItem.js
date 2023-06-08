import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, amount, date }) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: id });
  };
  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={[styles.textBase, styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{formattedDate}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: colors.primary500,
    fontWeight: "bold",
  },
});

export default ExpenseItem;
