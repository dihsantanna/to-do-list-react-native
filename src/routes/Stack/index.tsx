import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

import { SingIn } from "@screens/SingIn";
import { SingUp } from "@screens/SingUp";
import { TodoList } from "@screens/TodoList";

const { Navigator, Screen } = createNativeStackNavigator();

export function Stack() {
  return (
    <Navigator initialRouteName="SingIn">
      <Screen name="SingIn" component={SingIn} />
      <Screen name="SingUp" component={SingUp} />
      <Screen name="TodoList" component={TodoList} />
    </Navigator>
  )
}
