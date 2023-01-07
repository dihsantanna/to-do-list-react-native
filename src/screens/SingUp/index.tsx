import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import { SingUpForm } from '@components/SingUpForm';

export function SingUp() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="w-screen h-full bg-gray-800">
        <KeyboardAvoidingView behavior="position" enabled>
          <SingUpForm />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
