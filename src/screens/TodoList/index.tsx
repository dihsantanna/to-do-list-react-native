import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function TodoList() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 flex-col bg-gray-900 items-center justify-center">
      <Text className="text-gray-100 absolute top-12 text-3xl">Todo List</Text>

      <TouchableOpacity onPress={() => navigate('singIn')}>
        <Text className="text-green-400 m-2">Sing In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('singUp')}>
        <Text className="text-green-400 m-2">Sing Up</Text>
      </TouchableOpacity>
    </View>
  );
}
