import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseCtx } from "../store/expense_ctx";

const AllExpensesScreen = () => {
  const { expenses } = useContext(ExpenseCtx);
  return (
    <ExpensesOutput
      expenses={expenses}
      periodText="Total"
      fallbackText="No registered expenses"
    />
  );
};

export default AllExpensesScreen;
