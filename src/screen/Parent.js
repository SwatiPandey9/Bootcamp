import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Parent extends Component{

    // state = {
    //     counterX:0,
    // }

    // incrementX = () => {
    //     this.setState(counterX = this.state.counterX+1)
    // }

    constructor(props){
        super(props)
        this.state={
            counterX:0
        }
        this.incrementX = this.incrementX.bind(this)//this is how we bind 'this' with any normal function 
        this.newIncrement= this.incrementX.bind(this)
    }

    incrementX () {
        console.log(this.state.counterX)
    }

    render(){
        return(
            <View>
                <Text>Parent Class</Text>
                <TouchableOpacity onPress={() => this.incrementX()}>
                    <Text>{this.state.counterX}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newIncrement()}>
                    <Text>{this.state.counterX}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
};
export default Parent;