import {Provider} from 'mobx-react';
import React, {Component} from 'react';
// import {View} from 'react-native';
import Counter from './src/screen/Counter';
import RootStore from './src/store';
import Navigation from './src/routes/StackNav';
// import CounterStore from './src/store/CounterStore';

export default class App extends Component {
  render() {
    const rootStore = new RootStore();
    return (
      <Provider
        counterStore={rootStore.counterStore}
        addStore={rootStore.addStore}
        >
        <Navigation />
      </Provider>
    );
  }
}
