import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux'
import Route from './src/route';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
