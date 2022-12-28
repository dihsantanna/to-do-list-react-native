import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SingUp() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sing Up</Text>

      <TouchableOpacity onPress={() => navigate('singIn')}>
        <Text style={styles.button}>Sing Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('todoList')}>
        <Text style={styles.button}>Todo List</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ccc',
    position: 'absolute',
    top: 50,
    fontSize: 30,
  },
  button: {
    color: 'lime',
    margin: 10,
  },
});
