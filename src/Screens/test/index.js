import {View, Text} from 'react-native';
import React from 'react';
import SoundCloudWaveform from 'react-native-soundcloud-waveform';
import {COLOR_BLUE, COLOR_WHITE} from '../../Styles/colorConstants';
import {soundArray} from '../../Model/data';
import WaveForm from 'react-native-audiowaveform';
import Sounds from '../../Assets/Sounds';

export default function Test(props) {
  return (
    <View style={{backgroundColor: COLOR_BLUE}}>
      <WaveForm
        source={Sounds.surahFatiha}
        waveFormStyle={{waveColor: 'red', scrubColor: 'white'}}
      />
    </View>
  );
}
