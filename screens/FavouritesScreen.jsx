import { useSelector, useStore } from "react-redux";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
export default function FavouritesScreen() {
//   const favoritesMealContext = useContext(FavoritesContext);
const favoritesIds = useSelector((state) => state.favoriteMeals.ids)
  const favoritesMeals = MEALS.filter((meal) =>
    // favoritesMealContext.ids.includes(meal.id)
    favoritesIds.includes(meal.id)
  );
  if (favoritesMeals.length < 1)
    return (
      <View style={styles.noFavsContainer}>
        <Text style={styles.noFavsText}>No Favorites Meals yet.</Text>
      </View>
    );
  return <MealList meals={favoritesMeals} />;
}

const styles = StyleSheet.create({
  noFavsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  noFavsText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
});
