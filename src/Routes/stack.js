import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/Home';
import SoundPlayer from '../Screens/SoundPlayer';
import Splash from '../Screens/Splash';
import Test from '../Screens/test';

const Stack = createNativeStackNavigator();

<Stack.Screen />;
const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SoundPlayer" component={SoundPlayer} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};
export default AppStack;
