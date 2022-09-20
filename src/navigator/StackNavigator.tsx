import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};
