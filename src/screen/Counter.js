import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';

@inject('counterStore')
@observer
export default class Counter extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text>{this.props.counterStore.getUpdatedCount}</Text>
          <Button
            title={'Increment'}
            onPress={() => this.props.counterStore.increment()}
          />
          <Button
            title={'Decrement '}
            onPress={() => this.props.counterStore.decrement()}
          />
          <Button
            title={'Update By 5 '}
            onPress={() => this.props.counterStore.updateByValue(5)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
