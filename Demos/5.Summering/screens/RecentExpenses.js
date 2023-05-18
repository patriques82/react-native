import { useContext } from "react";
import { isWithinInterval, subDays } from "date-fns";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesCtx } from "../store/expenses_ctx";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesCtx);
  const today = new Date();
  const weekInterval = { start: subDays(today, 7), end: today };
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    return isWithinInterval(expense.date, weekInterval);
  });

  return <ExpensesOutput expenses={recentExpenses} periodText="Last 7 days" />;
};

export default RecentExpenses;
