import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import colors from "../constants/colors";

const ExpensesOutput = ({ expenses, periodText, fallbackText }) => {
  let content = (
    <View style={styles.textContainer}>
      <Text style={styles.infoText}>{fallbackText}</Text>
    </View>
  );
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodText={periodText} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: colors.primary700,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    color: "white",
    fontSize: 16,
  },
});

export default ExpensesOutput;
