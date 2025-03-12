import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import MealDetail from "../MealDetails";

export default function MealItem(props) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealOverview", {
      mealId: props.id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable andriond_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed ? styles.pressed : null} onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <MealDetail duration={props.duration} complexity={props.complexity} affordability={props.affordability} />
        </View>
      </Pressable>
    </View>
  );
}
const platform = Platform.OS;
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: platform === "android" ? "hidden" : "visible",
        
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  detailItem: {
    fontSize: 12
  },
  pressed: {
    opacity: 0.5,
  }
});
