import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, SafeAreaView} from 'react-native';

import Slider from '@ptomasroos/react-native-multi-slider';

const Show = () => {
  const [onChange, setOnChange] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);

  const toggleSwitch = () => {
    setOnChange((val) => !val);
  };

  const SliderValue = (value) => {
    setSliderVal(value);
  };
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <Text style = {styles.titleText}>Show and Hide Slider</Text>
      <Switch value={onChange} onValueChange={toggleSwitch} />
      {onChange ? (
        <View>
          <Slider
            min={0}
            max={100}
            onValuesChange={(value) => SliderValue(value)}
          />
          <Text style = {styles.sliderText}>Slider Value : {sliderVal}</Text>
        </View>
      )
      : null }
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    textAlign:'center',
    marginBottom:100,
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'#FFDEE9',
    
  },
  sliderText:{
      textAlign:'center',
      fontSize:18,
      color:'#7A7A78'
  },
});

export default Show;
