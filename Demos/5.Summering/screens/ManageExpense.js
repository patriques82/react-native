import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageExpense = ({ route }) => {
  const navigation = useNavigation();
  const expenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId !== undefined ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  return <Text>ManageExpense Screen</Text>;
};

export default ManageExpense;
