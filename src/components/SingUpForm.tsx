import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import twColors from 'tailwindcss/colors';

import { Spinner } from './Spinner';

export function SingUpForm() {
  const [showPass, setShowPass] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [singUpState, setSingUpState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { navigate } = useNavigation();

  const allFieldsFilledIn = useCallback(() => {
    const { name, email, password } = singUpState;
    const checkName = name.length > 3;
    const checkEmail = email.length > 6;
    const checkPassword = password.length >= 8;
    setDisableSubmit(!(checkName && checkEmail && checkPassword));
  }, [singUpState]);

  useEffect(() => {
    allFieldsFilledIn();
  }, [allFieldsFilledIn]);

  const handleFormField = (value: string, field: keyof typeof singUpState) => {
    setSingUpState((prevState) => ({ ...prevState, [field]: value }));
  };

  const toggleShowPass = () => setShowPass(!showPass);

  const handleSingUp = () => {
    setLoading(true);
    setTimeout(() => {
      setSingUpState({ name: '', email: '', password: '' });
      Toast.show({
        type: 'success',
        position: 'bottom',
        autoHide: true,
        text1: 'Cadastro realizado com sucesso!',
        visibilityTime: 2000,
        onShow: () => {
          navigate('todoList');
        },
      });
      setLoading(false);
    }, 500);
  };

  return (
    <View className="items-center gap-4 justify-between px-4 mt-24 mx-auto w-11/12 max-w-md">
      <Text className="self-start text-gray-100 text-lg">Faça o seu cadastro:</Text>
      <View className="flex-row items-center bg-gray-900 px-2 py-1 border-l border-green-400 rounded-sm w-full">
        <TextInput
          className="bg-gray-900 p-2 placeholder-gray-100 text-gray-100 font-normal focus:outline-none block w-full appearance-none leading-normal"
          placeholder="Qual o seu nome?"
          placeholderTextColor={twColors.gray[100]}
          value={singUpState.name}
          onChangeText={(value) => handleFormField(value, 'name')}
        />
      </View>
      <View className="items-center bg-gray-900 px-2 py-1 border-l border-green-400 rounded-sm w-full">
        <TextInput
          className="bg-gray-900 p-2 placeholder-gray-100 text-gray-100 font-normal focus:outline-none block w-full appearance-none leading-normal"
          placeholder="Digite seu e-mail"
          placeholderTextColor={twColors.gray[100]}
          keyboardType="email-address"
          autoCapitalize="none"
          value={singUpState.email}
          onChangeText={(value) => handleFormField(value, 'email')}
        />
      </View>
      <View className="items-center bg-gray-900 px-2 py-1 border-l border-green-400 rounded-sm w-full relative">
        <TextInput
          className="bg-gray-900 p-2 placeholder-gray-100 text-gray-100 font-normal focus:outline-none block w-full appearance-none leading-normal"
          placeholder="Digite uma senha"
          placeholderTextColor={twColors.gray[100]}
          autoCapitalize="none"
          secureTextEntry={!showPass}
          value={singUpState.password}
          maxLength={24}
          passwordRules="minlength: 8; maxlength: 24;"
          onChangeText={(value) => handleFormField(value, 'password')}
        />
        <TouchableOpacity
          className="absolute w-6 h-full bottom-[5px] items-center justify-center right-2"
          onPress={toggleShowPass}
        >
          {showPass ? (
            <MaterialCommunityIcons name="eye" color={twColors.gray[100]} size={20} />
          ) : (
            <MaterialCommunityIcons name="eye-off" color={twColors.gray[100]} size={20} />
          )}
        </TouchableOpacity>
        <Text className="absolute text-xs italic text-gray-200 -bottom-5 left-0 opacity-90">
          Senha deve possuir de 8 a 24 caracteres.
        </Text>
      </View>
      <View className="flex-row w-full items-center justify-between py-6">
        <View>
          <Text className="text-gray-100 text-base">Já possui cadastro?</Text>
          <View className="flex-row">
            <Text className="text-gray-100 text-base">
              Faça o seu login
              <Text className="text-green-400 text-base" onPress={() => navigate('singIn')}>
                {' '}
                aqui
              </Text>{' '}
              !
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className={`w-[140px] h-10 items-center justify-center ${
            disableSubmit ? 'bg-green-200' : 'bg-green-500'
          } py-2 px-7 rounded-md`}
          disabled={disableSubmit || loading}
          onPress={handleSingUp}
        >
          <View className="relative flex-1 items-center justify-center">
            {loading ? (
              <Spinner size={28} duration={0.7} />
            ) : (
              <Text className="text-gray-100 font-bold">CADASTRAR</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
