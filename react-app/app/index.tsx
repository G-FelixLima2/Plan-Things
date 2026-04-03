import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "@/components/Buttons/Button";

export default function index() {
  function handleLogin(){
    console.log("Login")
  }
  return (
    <View style={style.Container}>
      <Text style={style.Titulo}>Plan Things</Text>

      <View style={style.ContainerMinor}>
        
        <Image source={require('@/assets/shoeske.webp')} style={style.Imagem} />

        <View>
          <Button title="Entrar" onPress={handleLogin} />
          <hr />
          <Button title="Cadastrar" onPress={handleLogin} />
        </View>
      </View>

    </View>
  );
}

const style = StyleSheet.create({

  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  

  ContainerMinor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  Titulo: {
    fontSize: 32,
    fontWeight: 700,
    color: '#023E8A',

    marginTop: 20,
  },

  Imagem: {
    height: 400,
    width: "100%",
    resizeMode: 'contain',
    marginBottom: 10,
  }

})
