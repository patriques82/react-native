import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

const CategoriesScreen = () => {
  const renderGridItem = (itemData) => {
    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
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
