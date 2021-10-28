import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import { decrementCounterAction, incrementCounterAction } from '../redux/actions/CounterActions';

class HomeScreen extends Component {
//   state = {
//     counter: 0,
//   };
  //   incrementCounter = () => {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   };
  //   decrementCounter = () => {
  //     this.setState({
  //       counter: this.state.counter - 1,
  //     });
  //   };
  render() {
    return (
      <View>
        <Text> Counter Application </Text>
        <TouchableOpacity onPress={this.props.incrementCounter}>
          <Text>{`Increase`}</Text>
        </TouchableOpacity>
        <Text>{this.props.value}</Text>
        <TouchableOpacity onPress={this.props.decrementCounter}>
          <Text>{`Decrease`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {value: state.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => incrementCounterAction(dispatch),
    decrementCounter: () => decrementCounterAction(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
