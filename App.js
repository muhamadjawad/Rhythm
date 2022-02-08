import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Routes/stack';
import {Provider} from 'react-redux';
import {store} from './src/ReduxToolkit/store';

export default function App() {
  // LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
}
