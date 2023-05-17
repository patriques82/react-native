import { Pressable, Text, View } from "react-native";

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date.toString()}</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
