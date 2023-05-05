import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  });

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text>Ingredients</Text>

          <Text>Steps</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailsScreen;
