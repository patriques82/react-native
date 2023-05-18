import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";
import { ExpensesCtx } from "../store/expenses_ctx";

const ManageExpense = ({ route }) => {
  const navigation = useNavigation();
  const expenseId = route.params?.expenseId;
  const isEditing = expenseId !== undefined;
  const expenseCtx = useContext(ExpensesCtx);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const deleteHandler = () => {
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(expenseId, {
        description: "Testing...",
        amount: 99.99,
        date: new Date(),
      });
    } else {
      expenseCtx.addExpense({
        description: "Testing...",
        amount: 99.99,
        date: new Date(),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHandler}
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
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpense;
