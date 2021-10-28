// import React from 'react';
// import {View} from 'react-native';

// import Navigation from './src/routes/StackNav';
// import TabNav from './src/routes/TabBar';

// const App = () => {
//   return <Navigation />;
// };

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen, Profile} from './src/screen'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Counter from './src/screen/Counter';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <Provider store={store}>
      <Counter />
      {/* <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name='HomeScreen' component={HomeScreen} />
          <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
      </NavigationContainer> */}
      </Provider>
  )
};

export default App;
