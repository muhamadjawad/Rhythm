import {View, Text} from 'react-native';
import React from 'react';
import SoundCloudWaveform from 'react-native-soundcloud-waveform';
import {COLOR_BLUE, COLOR_WHITE} from '../../Styles/Colors/colorConstants';
import {soundArray} from '../../Model/data';
import Sounds from '../../Assets/Sounds';
import Images from '../../Assets/Images';
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
