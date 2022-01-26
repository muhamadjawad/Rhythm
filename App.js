import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
      <AppStack />
    </NavigationContainer>
  );
}
