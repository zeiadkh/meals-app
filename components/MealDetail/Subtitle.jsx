import {View, StyleSheet, Text} from 'react-native'

export default function Subtitle({text}){
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{text}:</Text>
      </View>
}

const styles = StyleSheet.create({
subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 4,
  },
})