import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const ExpensesSummary = ({ expenses, periodText }) => {
  const sum = expenses.reduce((prev, expense) => expense.amount + prev, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodText}</Text>
      <Text style={styles.sum}>{sum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary500,
  },
});

export default ExpensesSummary;
