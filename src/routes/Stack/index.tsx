import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { SingIn } from '@screens/SingIn';
import { SingUp } from '@screens/SingUp';
import { TodoList } from '@screens/TodoList';

export function Stack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="singIn" component={SingIn} />
      <Screen name="singUp" component={SingUp} />
      <Screen name="todoList" component={TodoList} />
    </Navigator>
  );
}
