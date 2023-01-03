import { View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import twColors from 'tailwindcss/colors';
import { useCallback, useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import Toast from 'react-native-toast-message';

export function SingInForm() {
  const [showPass, setShowPass] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [singInState, setSingInState] = useState({
    email: '',
    password: '',
  });

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
      Toast.show({
        type: 'success',
        position: 'bottom',
        autoHide: true,
        text1: 'Login realizado com sucesso!',
        visibilityTime: 2000,
      });
      setLoading(false);
    }, 500);
  };

  return (
    <View className="items-center flex-col gap-4 justify-between px-4 mt-24 mx-auto w-4/5 max-w-md">
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
          value={singInState.password}
          keyboardType="visible-password"
          onChangeText={(value) => handleFormField(value, 'password')}
        />
        <TouchableHighlight
          className="absolute w-6 h-full items-center justify-center right-2"
          onPress={toggleShowPass}
        >
          {showPass ? (
            <MaterialCommunityIcons name="eye" color={twColors.gray[100]} size={20} />
          ) : (
            <MaterialCommunityIcons name="eye-off" color={twColors.gray[100]} size={20} />
          )}
        </TouchableHighlight>
      </View>
      <View className="w-full items-end justify-between">
        <TouchableOpacity
          className={`w-28 h-10 items-center justify-center ${
            disabledSubmit ? 'bg-green-300' : 'bg-green-400'
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
