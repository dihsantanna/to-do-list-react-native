import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import { SingInForm } from '@components/SingInForm';
import { TodoLogo } from '@components/TodoLogo';

export function SingIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="w-screen h-full bg-gray-800">
        <TodoLogo className="mt-20" />
        <KeyboardAvoidingView behavior="position" enabled>
          <SingInForm />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
