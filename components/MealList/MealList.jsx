import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
function RenderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }
export default function MealList({meals}){
    return  <View style={styles.container}>
    <FlatList
    data={meals}
    keyExtractor={(item) => item.id}
    renderItem={RenderMealItem}
  />
  </View>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });