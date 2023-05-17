import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";

const ManageExpense = ({ route }) => {
  const navigation = useNavigation();
  const expenseId = route.params?.expenseId;
  const isEditing = expenseId !== undefined;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  const cancelHandler = () => {
    console.log("cancel");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  const confirmHandler = () => {
    console.log("confirm");
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
      <IconButton
        icon="trash"
        size={36}
        color={GlobalStyles.colors.error500}
        onPress={deleteHandler}
      />
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
});

export default ManageExpense;
