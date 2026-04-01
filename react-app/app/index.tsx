import { Text, View, StyleSheet, Image } from "react-native";

export default function index() {
  return (
    <View style={style.ContainerPrime}>
        <Image source={require("@/assets/feature-collaboration.png")} 
        style={style.illustration} />

      <Text style={style.title}>Texto muito bacana de Introdução</Text>

        <button style={style.button1}>Entrar</button>
        <button style={style.button2}>Cadastrar</button>

    </View>
  );
}

const style = StyleSheet.create ({
  ContainerPrime: {
    justifyContent: "center",
    alignItems: "center",
  },

  illustration: {
    width: "100%",
    height: 330,
    borderColor: "#000",
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
  },

  button1: {
    backgroundColor: "blue",
    borderRadius: 5,
    borderWidth: 0,
    fontSize: 20,
    color: "#fff",
    margin: 10,

    width: 200,
    height: 30,
  },

  button2: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4c4c4c",
    fontSize: 20,
    color: "#3c3c3c",
    margin: 10,

    width: 200,
    height: 30,
  },

})
