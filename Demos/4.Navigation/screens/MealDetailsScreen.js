import { Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  if (!meal) {
    throw Error("No such meal");
  }

  navigation.setOptions({
    title: meal.title,
  });

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default MealDetailsScreen;
