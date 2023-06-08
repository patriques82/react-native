import axios from "axios";

const rootUrl =
  "https://expenses-app-b98b8-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = async (expense) => {
  const resp = await axios.post(`${rootUrl}/expenses.json`, expense);
  const id = resp.data.name;
  return id;
};

export const getExpenses = async () => {
  const resp = await axios.get(`${rootUrl}/expenses.json`);
  const expenses = [];
  for (const id in resp.data) {
    const amount = resp.data[id].amount;
    const date = new Date(resp.data[id].date);
    const description = resp.data[id].description;
    expenses.push({ id, amount, date, description });
  }
  return expenses;
};

export const updateExpense = async (id, expense) => {
  await axios.put(`${rootUrl}/expenses/${id}.json`, expense);
};

export const deleteExpense = async (id) => {
  await axios.delete(`${rootUrl}/expenses/${id}.json`);
};
