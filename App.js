import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './src/screen/Index';
import Mapview from './src/screen/Mapview';
import Animations from './src/screen/Animations';
import Gesture from './src/screen/Gesture';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Mapview" component={Mapview} />
      <Stack.Screen name="Gesture" component={Gesture} />
      <Stack.Screen name="Animations" component={Animations} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;