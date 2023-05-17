import { Text } from "react-native";

const ManageExpense = ({ route }) => {
  const expenseId = route.params?.expenseId;
  console.log(expenseId);
  return <Text>ManageExpense Screen</Text>;
};

export default ManageExpense;
