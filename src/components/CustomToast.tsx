import Toast, { BaseToastProps } from 'react-native-toast-message';
import twColor from 'tailwindcss/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useRef } from 'react';
import { Text, View } from 'react-native';

type CustomProps = JSX.IntrinsicAttributes & BaseToastProps;

export function CustomToast() {
  const toastConfig = useRef({
    success: (props: CustomProps) => (
      <View className="relative flex-row h-[70px] w-11/12 px-4 py-2 rounded-md items-center justify-center bg-green-400">
        <View className="absolute left-5 w-max h-full items-center justify-center">
          <AntDesign name="checkcircle" size={32} color={twColor.gray[100]} />
        </View>
        {props.text1 && (
          <Text className="text-gray-100 font-semibold text-base">{props.text1}</Text>
        )}
        {props.text2 && <Text className="text-gray-100  text-base">{props.text2}</Text>}
      </View>
    ),
    error: (props: CustomProps) => (
      <View className="relative flex-row h-[70px] w-11/12 px-4 py-2 rounded-md items-center justify-center bg-red-600">
        <View className="absolute left-5 w-max h-full items-center justify-center">
          <MaterialIcons name="error" size={32} color={twColor.gray[100]} />
        </View>
        {props.text1 && (
          <Text className="text-gray-100 font-semibold text-base">{props.text1}</Text>
        )}
        {props.text2 && <Text className="text-gray-100  text-base">{props.text2}</Text>}
      </View>
    ),
  }).current;

  return <Toast config={toastConfig} />;
}
