import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
export default function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Pressable andriond_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed ? styles.pressed : null}>
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{props.duration}m</Text>
            <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
        </View>
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
