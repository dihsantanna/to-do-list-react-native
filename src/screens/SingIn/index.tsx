import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function SingIn() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 flex-col bg-gray-900 items-center justify-center">
      <Text className="text-gray-100 absolute top-12 text-3xl">Sing In</Text>

      <TouchableOpacity onPress={() => navigate('singUp')}>
        <Text className="text-green-400 m-2">Sing Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('todoList')}>
        <Text className="text-green-400 m-2">Todo List</Text>
      </TouchableOpacity>
    </View>
  );
}
