/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import Home from './src/screen/Home';

const App = () =>{
  return(
    <View style = {styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
});

export default App;
