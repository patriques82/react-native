import { View, Text, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, periodText }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodText={periodText} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
