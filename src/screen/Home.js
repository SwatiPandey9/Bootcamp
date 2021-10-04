import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

import CounterValue from '../components/CounterValue'


export default class Home extends Component {

    constructor() {
        super();
        this.state= {
            counter:0 
        };
        console.log('Constructor Called');
    }
    // state= {
    //     counter:0
    // };

    //Mounting - to see mounting lifecycle uncommment getDerivedStateFromProps below
    // static getDerivedStateFromProps = (props, state) =>{
    //     console.log('getDerivedStateFromProps Called', props, state);
    // }

    componentDidMount(){
        console.log('componentDidMount Called');
    }

    updateValue = () => {
        this.setState({
            counter: this.state.counter+1
        })
        console.log(this.state.counter)
    }

    //Updating if want to run mounting
    static getDerivedStateFromProps = (props, state) =>{
        console.log('getDerivedStateFromProps Called', props, state);
    }

    shouldComponentUpdate(prev, next){
        console.log('shouldComponentUpdate Called', prev, next);
        return true;

    }

    getSnapshotBeforeUpdate(snapshot){
        console.log('getSnapshotBeforeUpdate Called', snapshot)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate Called')
    }

    render() {
        console.log('render called')
        console.log('Parent Component Called')
        return (
            <View>
                <CounterValue countedValue={this.state.counter} />
                <Text style ={styles.text}>Click on below button</Text>
                <Button onPress ={this.updateValue} title ='Click' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
    }
    
})
