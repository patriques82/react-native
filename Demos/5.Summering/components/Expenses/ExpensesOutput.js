import { View, Text, FlatList } from "react-native";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <View>
        <Text>Last 7 days</Text>
        <Text>198 SEK</Text>
      </View>
      <FlatList />
    </View>
  );
};

export default ExpensesOutput;
