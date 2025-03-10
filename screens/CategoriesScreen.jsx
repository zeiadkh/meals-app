import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

export default function CategoriesScreen({navigation}) {
  function RenderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={RenderCategoryItem}
      numColumns={2}
    />
  );
}
