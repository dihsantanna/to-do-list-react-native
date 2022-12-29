import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SingUp() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 flex-col bg-gray-900 items-center justify-center">
      <Text className="text-gray-100 absolute top-12 text-3xl">Sing Up</Text>

      <TouchableOpacity onPress={() => navigate('singIn')}>
        <Text className="text-green-400 m-2">Sing In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('todoList')}>
        <Text className="text-green-400 m-2">Todo List</Text>
      </TouchableOpacity>
    </View>
  );
}
