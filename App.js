/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import LoginPage from './src/screen/LoginPage';

const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => {
  return(
    <View style = {styles.container}>
      <LoginPage />
      {/* <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <BackgroungImage />
      
    </ImageBackground> */}
    
      {/* </View> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  // container: {
  //   flex:1
  // },
  // image: {
  //   flex:1,
  //   justifyContent: "center"
  // },
});

export default App;
