import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CounterValue extends Component{
    // constructor(){
    //     super();
    //     console.log("Constructor Called");
    // }

    // static getDerivedStateFromProps = (props,state) =>{
    //     console.log("getDerivedStateFromProps Called", props, state);
    // }

    // componentDidMount(){
    //     console.log("componentDidMount Called");
    // }



    render(){
        console.log('Child Component Called')
        return(
            <View style = {styles.container}>
            <Text style = {styles.text}>
             {this.props.countedValue}
            </Text>
        </View>
        )
    }
    
}



// const CounterValue =(props)=>{
//     return(
//         <View style = {styles.container}>
//             <Text style = {styles.text}>
//              {props.countedValue}
//             </Text>
//         </View>
//     )
    
// }
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'

    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    }
})
