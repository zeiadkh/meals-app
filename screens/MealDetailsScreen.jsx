// import { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";
export default function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch();
  // const isMealFavorite = favoriteMealContext.ids.includes(mealId);
  const isMealFavorite = favoriteMealIds.includes(mealId);
  const mealData = MEALS.find((meal) => meal.id === mealId);
  function changeFavoriteStatusHandler() {
    if (isMealFavorite) {
      // favoriteMealContext.remove(mealId);
      dispatch(removeFavorite({id: mealId}))
    } else {
      // favoriteMealContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}))
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `${mealData.title} Details`,
      headerRight: () => {
        return (
          <IconButton
            name={isMealFavorite ? "star" : "star-outline"}
            color="white"
            onPressHandler={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, mealData, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetail
        duration={mealData.duration}
        complexity={mealData.complexity}
        affordability={mealData.affordability}
        style={{ color: "white" }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text="Ingredients" />
          <List data={mealData.ingredients} />
          <Subtitle text="Steps" />
          <List data={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 8,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
