import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = (props) => {
    const [color, setColor] = useState(false);
    return (
       <TouchableOpacity 
     
       onFocus={() => setColor(true)}
       onBlur={() => setColor(false)}
       activeOpacity={0.9}
       style={[
         styles.button,
         {
           borderColor: color ? "#117A65" : "#7988",
         },
         {
           transform: color ? [{ scaleX: 1.2 }] : null,
         },
       ]}
      >
        <Text style={styles.buttonText}>{props.buttonTitle}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
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
})

export default CustomButton;