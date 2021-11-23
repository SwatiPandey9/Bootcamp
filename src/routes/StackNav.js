import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProfileScreen} from '../screen';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Follower',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Edit Profile',
          headerTitleStyle: {
            fontSize: 25,
          },
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="StackNav" component={StackNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
