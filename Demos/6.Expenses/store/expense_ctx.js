import { createContext, useReducer } from "react";

export const ExpenseCtx = createContext({
  expenses: [],
  addExpense: ({ id, description, amount, date }) => {},
  setExpenses: ([]) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload.reverse();
    case "UPDATE":
      const index = state.findIndex((exp) => exp.id === action.payload.id);
      const expense = state[index];
      const updatedExpense = { ...expense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[index] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((exp) => exp.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseCtxProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const updateExpense = (id, expense) => {
    dispatch({ type: "UPDATE", payload: { id, data: expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses,
    addExpense,
    setExpenses,
    updateExpense,
    deleteExpense,
  };

  return <ExpenseCtx.Provider value={value}>{children}</ExpenseCtx.Provider>;
};

export default ExpenseCtxProvider;
