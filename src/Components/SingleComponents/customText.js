import {View, Text} from 'react-native';
import React from 'react';
import {COLOR_WHITE} from '../../Styles/colorConstants';

export default function CustomText(props) {
  return (
    <Text
      numberOfLines={1}
      style={[
        {fontSize: 20, fontFamily: 'AntDesign', color: COLOR_WHITE},
        props.style,
      ]}>
      {props.title}
    </Text>
  );
}
