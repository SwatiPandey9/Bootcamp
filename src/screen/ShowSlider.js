import React, { Component } from 'react'
import { Text, View, Switch , StyleSheet, SafeAreaView} from 'react-native'
import Slider from '@ptomasroos/react-native-multi-slider'
class ShowSlider extends Component {
    constructor(){
      super();
      this.state = {
        isOn:false,
        sliderVal:0
    }}
    render() {
        return (
            <SafeAreaView>
            <View style={styles.container}>
             <Switch 
             value={this.state.isOn}
             onValueChange = {val => this.setState({
               isOn: val
             })}
             />
             
            {this.state.isOn ?
            <View>
            <Slider 
            min={0}
            onValuesChange ={val => this.setState({sliderVal : val,})}
            max={100}
            />
            <Text style = {styles.sliderText}>Slider Value {this.state.sliderVal}</Text>
            </View> :
            null} 
            </View>
            </SafeAreaView>
        )
    }
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      sliderText:{
        textAlign:'center'
      }
    });
  export default ShowSlider;
