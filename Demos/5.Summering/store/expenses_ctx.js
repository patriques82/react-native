import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const ExpensesCtx = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = uuidv4();
      return [{ id, ...action.payload }, ...state];
    case "UPDATE":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};

const ExpensesCtxProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };
  return <ExpensesCtx.Provider>{children}</ExpensesCtx.Provider>;
};

export default ExpensesCtxProvider;
