import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Mapview, Animations, Gesture, Contents, HomeScreen, DetailScreen} from '../screen'

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};


const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown : false}}>
        <RootStack.Screen name="StackNav" component={StackNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
