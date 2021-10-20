// In this we will see how we can call declare state, setState without constructor

import React, { Component } from "react";
import {View, Text, TouchableOpacity} from 'react-native'

class Parent extends Component {

    state = {
        counterX:0
    };

    incrementX = () => {
        console.log(this.state.counterX)
        this.setState({counterX: this.state.counterX + 1})
    }
    incrementY = (value) => {
        console.log(this.state.counterX)
        this.setState({counterX: value})
    }

    render(){
        return(
            <View>
                <Text>Here we are using class component </Text>
                <TouchableOpacity onPress={this.incrementX}>
                    <Text> counterX {this.state.counterX}</Text>
                </TouchableOpacity>
                <Text>Another way of using counterX inside Text</Text>
                <TouchableOpacity onPress={this.incrementX}>
                    <Text>{`counterX : ${this.state.counterX}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.incrementX(this.state.counterX + 1)}>
                    <Text> counterX {this.state.counterX}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Parent;

// class Child extends Component{
//     render(){
//         return(
//             <TouchableOpacity onPress={this.value}>

//             </TouchableOpacity>
//         )
//     }
// }