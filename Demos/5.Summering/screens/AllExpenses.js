import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesCtx } from "../store/expenses_ctx";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesCtx);
  return <ExpensesOutput expenses={expensesCtx.expenses} periodText="Total" />;
};

export default AllExpenses;
