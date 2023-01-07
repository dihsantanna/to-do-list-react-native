import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { Spinner } from '@components/Spinner';
import { TodoForm } from '@components/TodoForm';

export function TodoList() {
  const [loading, setLoading] = useState(false);

  // Lógica para carregar os dados aqui
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleAddToDo = async (todo: string) => {
    setLoading(true);
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        Toast.show({
          type: 'success',
          text1: todo,
          position: 'bottom',
          visibilityTime: 2000,
          autoHide: true,
        });
        resolve();
      }, 3000),
    );
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="w-screen h-full bg-gray-800">
        <View className="items-center justify-center mx-auto my-5 h-8">
          {loading && <Spinner duration={0.7} />}
        </View>
        <KeyboardAvoidingView>
          <TodoForm addToDo={handleAddToDo} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
