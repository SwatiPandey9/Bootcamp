import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';



const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
      <View>
        <Text>hello</Text>
      </View>
      </SafeAreaView>
      
    );
  }

  const styles = StyleSheet.create({
     container:{
         flex:1,
     } 
  })

  export default Home;