import React  from "react";
import { View, Text, StyleSheet} from "react-native";

const Value = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.countedValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems : 'center'
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    }
})


export default Value;