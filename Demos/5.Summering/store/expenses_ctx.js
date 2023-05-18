import { createContext } from "react";

export const ExpensesCtx = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, amount, date }) => {},
});

const ExpensesCtxProvider = ({ children }) => {
  return <ExpensesCtx.Provider>{children}</ExpensesCtx.Provider>;
};

export default ExpensesCtxProvider;
