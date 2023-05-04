import { StyleSheet, FlatList, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem.js";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  const category = CATEGORIES.find((category) => category.id === categoryId);
  if (category) {
    navigation.setOptions({
      title: category.title,
    });
  } else {
    navigation.setOptions({
      title: "Unknown category",
    });
  }

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
