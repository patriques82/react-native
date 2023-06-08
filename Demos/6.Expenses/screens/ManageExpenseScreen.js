import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/IconButton";
import colors from "../constants/colors";
import { ExpenseCtx } from "../store/expense_ctx";
import ExpensesForm from "../components/ExpensesForm";
import * as http from "../util/http";
import SpinnerOverlay from "../components/SpinnerOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

const ManageExpenseScreen = ({ route }) => {
  const [sendingRequest, setSendingRequest] = useState(false);
  const [error, setError] = useState(null);

  const expenseCtx = useContext(ExpenseCtx);
  const navigation = useNavigation();

  const expenseId = route.params?.expenseId;
  const expense = expenseCtx.expenses.find((exp) => exp.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  const removeHandler = async () => {
    setSendingRequest(true);
    try {
      await http.deleteExpense(expenseId);
      expenseCtx.deleteExpense(expenseId);
      navigation.goBack();
    } catch (error) {
      setSendingRequest(false);
      setError("Could not delete expense, please try later!");
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expense) => {
    setSendingRequest(true);
    try {
      if (expenseId) {
        expenseCtx.updateExpense(expenseId, expense);
        await http.updateExpense(expenseId, expense);
      } else {
        const id = await http.storeExpense(expense);
        expenseCtx.addExpense({ id, ...expense });
      }
      navigation.goBack();
    } catch (error) {
      setSendingRequest(false);
      setError("Could not save expense, please try later!");
    }
  };

  if (error && !sendingRequest) {
    return (
      <ErrorOverlay
        errorMessage={error}
        confirmHandler={() => setError(null)}
      />
    );
  }

  if (sendingRequest) {
    return <SpinnerOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpensesForm
        confirmButtonLabel={expenseId ? "Update" : "Add"}
        cancelHandler={cancelHandler}
        confirmHandler={confirmHandler}
        defaultValues={expense}
      />
      {expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={colors.error500}
            pressHandler={removeHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpenseScreen;
