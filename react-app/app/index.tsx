import { Text, View, StyleSheet, Image } from "react-native";
import { Button, ButtonMinor } from "@/components/Button";
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  function handleLogin(){
    router.push('/home');
  }

  function handleRegister(){
    router.push('/home');
  }

  return (
    <View style={style.Container}>
      <Text style={style.Titulo}>Plan Things</Text>

      <View style={style.ContainerMinor}>
        
        <Image source={require('@/assets/shoeske.webp')} style={style.Imagem} />

       
          <Button title="Entrar" onPress={handleLogin} />
          <ButtonMinor title="Cadastrar" onPress={handleRegister} />
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

    width: '100%',
    height: '100%',
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
    width: '100%',
    textAlign: 'center',

    marginTop: 20,
  },

  Imagem: {
    height: 400,
    width: "100%",
    resizeMode: 'contain',
    marginBottom: 10,
  },

})
