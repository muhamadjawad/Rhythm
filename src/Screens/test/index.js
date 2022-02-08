import {View} from 'react-native';
import React from 'react';
import {COLOR_BLUE} from '../../Styles/Colors/colorConstants';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function Test(props) {
  return (
    <View style={{backgroundColor: COLOR_BLUE}}>
      <CircularProgress
        value={100}
        activeStrokeColor={'#2465FD'}
        activeStrokeSecondaryColor={'#C25AFF'}
      />
    </View>
  );
}
