import React, { useState } from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

import { Colors } from '../utils';

const {height, width} = Dimensions.get('window');


const CustomTextInput = (props) => {

    const [focus, setFocus] = useState(false)
    return(
        <TextInput 
        placeholder={props.name}
        value = {props.value}
        onChangeText = {props.onChange}
        multiline={props.multiline == undefined ? false : true}
        style={[styles.input, props.style, {borderColor : focus ? 'blue' :  '#CCD1D1'}]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        />
    )
};

const styles = StyleSheet.create({
    input:{
        fontSize : width/25,
        borderWidth:1,
        borderColor: 'blue',
        width: width-50,
        alignSelf:'center',
        padding: width/30,
        borderRadius:5,
        backgroundColor:Colors.inputBackgroundColor
    }
})


export default CustomTextInput;