import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                Counter App
            </Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:70,
    
    },
    text:{
        fontSize:50,
        backgroundColor:"lightgrey",
        fontWeight:'bold',
        borderRadius:20,
        overflow: 'hidden'
        
        
    }
})

export default Title;