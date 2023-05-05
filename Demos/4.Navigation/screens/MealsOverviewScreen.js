import { StyleSheet, FlatList, View } from "react-native";
import { useEffect } from "react";
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

  useEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  });

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
