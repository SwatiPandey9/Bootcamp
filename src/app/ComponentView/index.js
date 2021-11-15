import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";




const { height, width } = Dimensions.get("window");


const index = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity  
        onFocus={() => setButton1(true)}
        onBlur={() => setButton1(false)}
        activeOpacity={0.9}
        style={[
          styles.button,
          {
            borderColor: button1 ? "#117A65" : "#7988",
          },
          {
            transform: button1 ? [{ scaleX: 1.2 }] : null,
          },
        ]}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity  
        onFocus={() => setButton2(true)}
        onBlur={() => setButton2(false)}
        activeOpacity={0.9}
        style={[
          styles.button,
          {
            borderColor: button2 ? "#117A65" : "#7988",
          },
          {
            transform: button2 ? [{ scaleX: 1.2 }] : null,
          },
        ]}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onFocus={() => setButton3(true)}
        onBlur={() => setButton3(false)}
        activeOpacity={0.9}
        style={[
          styles.button,
          {
            borderColor: button3 ? "#117A65" : "#7988",
          },
          {
            transform: button3 ? [{ scaleX: 1.2 }] : null,
          },
        ]}
      >
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onFocus={() => setButton4(true)}
        onBlur={() => setButton4(false)}
        activeOpacity={0.9}
        style={[
          styles.button,
          {
            borderColor: button4 ? "#117A65" : "#7988",
          },
          {
            transform: button4 ? [{ scaleX: 1.2 }] : null,
          },
        ]}
      >
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection:'row'
  },
  button: {
    backgroundColor: "#7988",
    height: height / 15,
    width: width / 8,
    marginBottom: height / 30,
    borderRadius: 5,
    borderColor: "#7988",
    borderWidth:1
  },
  buttonText: {
    textAlign: "center",
  },
});

export default index;
