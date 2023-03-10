import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import twColors from 'tailwindcss/colors';

import { Spinner } from './Spinner';

export function SingInForm() {
  const [showPass, setShowPass] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [singInState, setSingInState] = useState({
    email: '',
    password: '',
  });

  const { navigate } = useNavigation();

  const allFieldsFilledIn = useCallback(() => {
    const { email, password } = singInState;
    const checkEmail = email.length > 6;
    const checkPassword = password.length >= 8;
    setDisabledSubmit(!(checkEmail && checkPassword));
  }, [singInState]);

  useEffect(() => {
    allFieldsFilledIn();
  }, [allFieldsFilledIn]);

  const toggleShowPass = () => setShowPass(!showPass);

  const handleFormField = (value: string, field: keyof typeof singInState) => {
    setSingInState((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSingIn = () => {
    Toast.hide();
    setLoading(true);
    setTimeout(() => {
      setSingInState({ email: '', password: '' });
      Toast.show({
        type: 'success',
        position: 'bottom',
        autoHide: true,
        text1: 'Login realizado com sucesso!',
        visibilityTime: 2000,
        onShow: () => {
          navigate('todoList');
        },
      });
      setLoading(false);
    }, 500);
  };

  return (
    <View className="items-center flex-col gap-4 justify-between px-4 mt-24 mx-auto w-11/12 max-w-md">
      <Text className="self-start text-gray-100 text-lg">Faça o seu login:</Text>
      <View className="items-center bg-gray-900 px-2 py-1 border-l border-green-400 rounded-sm w-full">
        <TextInput
          className="bg-gray-900 p-2 placeholder-gray-100 text-gray-100 font-normal focus:outline-none block w-full appearance-none leading-normal"
          placeholder="Digite seu e-mail"
          placeholderTextColor={twColors.gray[100]}
          keyboardType="email-address"
          autoCapitalize="none"
          value={singInState.email}
          onChangeText={(value) => handleFormField(value, 'email')}
        />
      </View>
      <View className="items-center bg-gray-900 px-2 py-1 border-l border-green-400 rounded-sm w-full relative">
        <TextInput
          className="bg-gray-900 p-2 placeholder-gray-100 text-gray-100 font-normal focus:outline-none block w-full appearance-none leading-normal"
          placeholder="Digite sua senha"
          placeholderTextColor={twColors.gray[100]}
          autoCapitalize="none"
          secureTextEntry={!showPass}
          maxLength={24}
          passwordRules="minlength: 8; maxlength: 24;"
          value={singInState.password}
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
      </View>
      <View className="flex-row w-full items-center justify-between">
        <View>
          <Text className="text-gray-100 text-base">Cadastre-se</Text>
          <View className="flex-row">
            <Text className="text-gray-100 text-base">
              gratuitamente
              <Text className="text-green-400 text-base" onPress={() => navigate('singUp')}>
                {' '}
                aqui
              </Text>{' '}
              !
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className={`w-28 h-10 items-center justify-center ${
            disabledSubmit ? 'bg-green-200' : 'bg-green-500'
          } py-2 px-7 rounded-md`}
          disabled={disabledSubmit || loading}
          onPress={handleSingIn}
        >
          <View className="relative flex-1 items-center justify-center">
            {loading ? (
              <Spinner size={28} duration={0.7} />
            ) : (
              <Text className="text-gray-100 font-bold">ENTRAR</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
