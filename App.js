/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import Profile from './src/screen/Profile';
import usingAlert from './src/screen/usingAlert';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView , StyleSheet} from 'react-native';


const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='usingAlert' component={usingAlert} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})

export default App;
