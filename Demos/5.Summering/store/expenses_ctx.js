import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2023-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2023-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2023-01-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-12-01"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-02-19"),
  },
  {
    id: "e10  ",
    description: "Another book",
    amount: 18.59,
    date: new Date("2023-02-18"),
  },
];

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
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const expense = state[index];
      const updatedExpense = { ...expense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[index] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesCtxProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  return <ExpensesCtx.Provider>{children}</ExpensesCtx.Provider>;
};

export default ExpensesCtxProvider;
