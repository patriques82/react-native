import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };
    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
