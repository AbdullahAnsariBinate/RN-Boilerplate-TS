import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Register from 'src/scenes/scenes/Register';
import configureStore from './src/redux/store';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
     <Register />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
