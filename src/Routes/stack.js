import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Screens/Home';
import SoundPlayerScreen from '../Screens/SoundPlayer';

import Splash from '../Screens/Splash';

const Stack = createStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SoundPlayerScreen" component={SoundPlayerScreen} />
      {/* <Stack.Screen name="Test" component={Test} /> */}
    </Stack.Navigator>
  );
};
export default AppStack;
