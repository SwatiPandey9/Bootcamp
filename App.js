import React from 'react';
import store from './src/redux/store'
import { Provider } from 'react-redux';

import Navigation from './src/routes/StackNav';

import Counter from './src/screen/Counter'


const App = () => {
  return (
    <Provider store={store} >  
      <Navigation />
    </Provider>

    );
};

// const App = () => {
//   return (
//     <Provider store={store} >  
//       <Counter />
//     </Provider>

//     );
// };

// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import {HomeScreen, Profile} from './src/screen'
// import { Provider } from 'react-redux';
// import store from './src/redux/store';
// import Counter from './src/screen/Counter';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return(
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   )
// };

export default App;
