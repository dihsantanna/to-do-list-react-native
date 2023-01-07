import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import twColors from 'tailwindcss/colors';

interface TodoFormProps {
  addToDo: (todo: string) => Promise<void>;
}

export function TodoForm({ addToDo }: TodoFormProps) {
  const [todo, setTodo] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToDo = async () => {
    try {
      setIsAdding(true);
      await addToDo(todo);
      setTodo('');
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <View className="flex-row w-11/12 max-w-md items-center justify-between px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3 mx-auto">
      <TextInput
        className="bg-gray-900 text-gray-100 font-light focus:outline-none block w-4/5 appearance-none leading-normal py-3 pr-3"
        placeholder="Adicione uma nova tarefa ..."
        placeholderTextColor={twColors.gray[500]}
        value={todo}
        onChangeText={setTodo}
        editable={!isAdding}
      />
      <TouchableOpacity
        onPress={handleAddToDo}
        className="focus:outline-none w-1/5 flex items-center justify-center"
        disabled={isAdding}
      >
        <Text className="drop-shadow-sm text-green-400 text-xs font-semibold ">ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}
