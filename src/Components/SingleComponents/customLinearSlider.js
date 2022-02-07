import {View, Text} from 'react-native';
import React from 'react';

import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_PEACH,
  COLOR_PINK,
  COLOR_RED,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import Images from '../../Assets/Images';
import {height, width} from 'react-native-dimension';

import Slider from 'azir-slider';

export default function CustomLinearSlider(props) {
  return (
    <Slider
      value={props.value}
      minimumValue={0}
      maximumValue={props.max}
      onStart={props.onStart}
      onChange={props.onChange}
      onComplete={props.onComplete}
      trackColor={COLOR_PINK}
      thumbColor={COLOR_WHITE}
      progressTrackColor={COLOR_BLUE}
      thumbSize={20}
      trackSize={5}
    />
  );
}
