// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile'
import FreindScreen from '../screens/freind'

const Stack = createNativeStackNavigator();

function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="FreindScreen" component={FreindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;