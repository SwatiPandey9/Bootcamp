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

export default App;
