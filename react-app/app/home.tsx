import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';
import { Navbar } from '@/components/navbar';
import { BottomNavHome } from '@/components/BottomNav/BottomNavHome';

export default function Home() {
  const router = useRouter();

  return (
    <View style={style.Container}>
      <Navbar />

      <View style={style.ContainerImperator}>
        <Text style={style.Text}>Você ainda não criou nenhum plano.</Text>
        <Button title="Criar Plano" onPress={() => router.push('/CreatePlan')} />
      </View>

      <BottomNavHome />
    </View>
  );
}

const style = StyleSheet.create({
  
  Container: {
    backgroundColor: '#fff',

    width: '100%',
    height: '100%',
  },

  ContainerImperator: {
    backgroundColor: '#fff',

    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    fontSize: 30,
    fontWeight: 700,
    color: '#6c6c6c',

    textAlign: 'center',
  }
  
})