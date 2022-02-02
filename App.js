import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Routes/stack';
import {LogBox} from 'react-native';

export default function App() {
  // LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
      <AppStack />
    </NavigationContainer>
  );
}
