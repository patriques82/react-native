import { useContext, useEffect, useState } from "react";
import { subDays, isWithinInterval } from "date-fns";

import { ExpenseCtx } from "../store/expense_ctx";
import ExpensesOutput from "../components/ExpensesOutput";
import * as http from "../util/http";
import SpinnerOverlay from "../components/SpinnerOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpenseCtx);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        const expenses = await http.getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not get expenses, please try later!");
      }
      setFetching(false);
    };
    getAllExpenses();
  }, []);

  if (error && !fetching) {
    return (
      <ErrorOverlay
        errorMessage={error}
        confirmHandler={() => setError(null)}
      />
    );
  }

  if (fetching) {
    return <SpinnerOverlay />;
  }

  const today = new Date();
  const weekInterval = { start: subDays(today, 7), end: today };
  const weekExpenses = expensesCtx.expenses.filter((exp) => {
    return isWithinInterval(exp.date, weekInterval);
  });

  return (
    <ExpensesOutput
      expenses={weekExpenses}
      periodText="Last 7 days"
      fallbackText="No registered expenses this week"
    />
  );
};

export default RecentExpensesScreen;
