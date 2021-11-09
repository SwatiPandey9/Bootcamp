import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Colors, String} from '../utils/index';

const {height, width} = Dimensions.get('window');

const CustomButton = props => {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    padding: width/20,
    borderRadius: width/15,
    // marginRight: width/20,
  },
  buttonText: {
    color: Colors.primaryTextColor,
    fontSize: height/55,
  },
});

export default CustomButton;
