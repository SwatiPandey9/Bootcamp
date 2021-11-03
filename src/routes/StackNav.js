import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Mapview, Animations, Gesture, Contents, HomeScreen, DetailScreen} from '../screen'

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      {/* <Stack.Screen name="Contents" component={Contents} />
      <Stack.Screen name="Mapview" component={Mapview} />
      <Stack.Screen name="Gesture" component={Gesture} />
      <Stack.Screen name="Animations" component={Animations} /> */}
    </Stack.Navigator>
  );
};

// const TabNav = () => {
//   return(
             
//       <Tab.Navigator>
//           <Tab.Screen name='HomeScreen' component={HomeScreen} />
//           <Tab.Screen name='Profile' component={Profile} />
//       </Tab.Navigator>
     

//   )
// };


const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown : false}}>
        <RootStack.Screen name="StackNav" component={StackNav} />
        {/* <RootStack.Screen name="TabNav" component={TabNav} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
