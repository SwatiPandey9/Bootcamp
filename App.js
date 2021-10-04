/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import Home from "./src/screen/Home";
import Title from "./src/components/Title";


const App = () =>{
  return(
    <View style = {styles.container}>
      <Title />
      <Home />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})


export default App;
