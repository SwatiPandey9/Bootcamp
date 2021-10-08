import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


const LoginPage = () => {

    const[number, setInputNumber] = useState('');
    const numberArray = [1,2,3,4]
    return(
        <> 
        
        <View style = {styles.header}>
            <Text style = {styles.headerText}>
                Log into Saavn
            </Text>
        </View>
        
        <ImageBackground source={require('../assets/img2.jpeg')} style={styles.backgroundImage}>
            <View style = {styles.enterCode}>
                <Text style = {styles.enterCodeText}>
                    Enter your code
                </Text>
            </View>

            <View style = {styles.inputContainer}>
                {numberArray.map(()=>{
                    return(
                        <TextInput 
                autoFocus={true}
                keyboardType={'number-pad'}
                style = {styles.input}
                maxLength={1}
                />  
                    )
                })}
            </View>

            <View style = {styles.continueButtonContainer}>
                <TouchableOpacity style = {styles.continueButton}>
                <Text style = {styles.continueButtonText}>
                        Continue
                </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>     
        </>
    );
};

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#262626',
        height:100,
        width:'100%',
    },
    headerText:{
        marginTop:35,
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    },
    // imagecontainer:{
    //     flex:1
    // },
    backgroundImage:{
        
        width:'100%',
        height:900
    },
    enterCode:{
        marginTop:80,
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center'
    },
    enterCodeText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        height:40,
        width:40,
        borderWidth: 1,
        padding: 10,
        margin:10,
        color:'black',
        borderRadius:5,
        fontSize:15,  
        borderColor:'grey',
        backgroundColor: 'white' 
    },
    continueButtonContainer:{
        alignItems:'center',   
    },
    continueButton:{
        marginTop:50,
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        width:'60%',
        borderRadius:5,
        borderWidth:2,
        borderColor:'black'    
    },
    continueButtonText:{
        fontSize:20,
        color:'black',
        // borderColor:'',
        padding:8,
    }

});

export default LoginPage;