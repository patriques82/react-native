import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View } from "react-native";

import IconButton from "../components/UI/IconButton";
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

  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <View>
      <IconButton
        icon="trash"
        size={36}
        color={GlobalStyles.colors.error500}
        onPress={deleteHandler}
      />
    </View>
  );
};

export default ManageExpense;
