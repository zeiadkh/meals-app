import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
export default function MealDetailsScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${mealData.title} Details`,
    });
  }, [navigation, mealData]);
  const mealData = MEALS.find((meal) => meal.id === route.params.mealId);
  navigation.setOptions({
    title: `${mealData.title} Details`,
  });
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
    marginBottom: 32
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
