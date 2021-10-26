import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  Image,
  
} from 'react-native';


const {height, width} = Dimensions.get('window');

export default function InputText(props) {
  const [focus, setfocus] = useState(false);

  return (
    <View
      style={[
        styles.inputView,
        {borderColor: focus ? '#005ce6' : 'white'},
      ]}>
      <Image
        source={props.image}
        style={[styles.image, {tintColor: focus ? '#005ce6' : 'grey'}]}
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={props.changeText}
        placeholder={props.name}
        value={props.value}
        keyboardType={props.type == undefined ? 'default' : props.type}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        secureTextEntry = {props.hide == undefined ? false : props.hide}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: width - 70,
    padding: 10,
    borderWidth: 2,
    marginBottom: height / 35,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputBox: {
    width: width * 0.65,
    height: height / 22,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: width / 25,
  },
});
