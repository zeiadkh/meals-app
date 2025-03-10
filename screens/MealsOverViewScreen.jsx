import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function RenderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }
  useLayoutEffect (() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
      data={displayMeals}
      keyExtractor={(item) => item.id}
      renderItem={RenderMealItem}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
