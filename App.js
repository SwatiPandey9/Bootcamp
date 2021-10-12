/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import ShowSlider from './src/screen/ShowSlider';
import Show from './src/screen/Show';


const App = () => {
    return(
      <View style = {styles.container}>
        {/* <ShowSlider /> */}
        <Show />
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
