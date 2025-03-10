import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function IconButton({name, color, onPressHandler}) {
  return (
    <View>
      <Pressable onPress = {onPressHandler} style={({pressed}) => pressed && styles.pressed}>
          <Ionicons name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  
  pressed: {
    opacity: 0.7,
  },
});
