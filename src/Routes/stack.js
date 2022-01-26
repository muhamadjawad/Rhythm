import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';

const Stack = createNativeStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default AppStack;
