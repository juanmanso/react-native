import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from 'src/screens/MainScreen';
import {DisappearingListScreen} from 'src/screens/DisappearingListScreen';
import {AuroraScreen} from 'src/screens/AuroraScreen';
import {InfiniteScrollListScreen} from 'src/screens/InfiniteScrollListScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="DisappearingListScreen"
        component={DisappearingListScreen}
      />
      <Stack.Screen
        name="InfiniteScrollListScreen"
        component={InfiniteScrollListScreen}
      />
      <Stack.Screen name="AuroraScreen" component={AuroraScreen} />
    </Stack.Navigator>
  );
};
