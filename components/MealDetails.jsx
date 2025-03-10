import { View, Text, StyleSheet } from "react-native";
export default function MealDetail({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, style]}>{duration}m</Text>
      <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});
