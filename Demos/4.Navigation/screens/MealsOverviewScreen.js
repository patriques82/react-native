import { StyleSheet, Text, View } from "react-native";

// https://reactnavigation.org/docs/route-prop/

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {categoryId} </Text>
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
