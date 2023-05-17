import { View, Text } from "react-native";

const ExpensesSummary = ({ expenses, periodText }) => {
  const sum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View>
      <Text>{periodText}</Text>
      <Text>{sum.toFixed(2)} SEK</Text>
    </View>
  );
};

export default ExpensesSummary;
