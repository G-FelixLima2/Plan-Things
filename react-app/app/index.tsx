import { Text, View, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={style.container}>
      <Text style={style}> sim </Text>
    </View> 
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },


})
