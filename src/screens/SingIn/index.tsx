// import { useNavigation } from '@react-navigation/native';
import { SingInForm } from '@components/SingInForm';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

export function SingIn() {
  // const { navigate } = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="w-screen h-full bg-gray-800">
        <KeyboardAvoidingView behavior="position" enabled>
          <SingInForm />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
