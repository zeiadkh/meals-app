import { View, Text, StyleSheet } from "react-native";
export default function List({ data }) {
  return data.map((ingrediant) => (
    <View key={ingrediant} style={styles.listItem}>
      <Text style={styles.itemText}>{ingrediant}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        maringHorizontal: 12,
        backgroundColor: "#e2b497",
    },
    itemText: {
        color: "#351401",
        textAlign: "center",
    }
});
