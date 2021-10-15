/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View , StyleSheet} from "react-native";

import List from "./src/screen/List";

const App = () => {
  return(
    <View style = {styles.conatiner}>
      <List />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
  },
})

export default App;