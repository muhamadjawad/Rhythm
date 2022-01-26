import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-gradient-icon';
import {
  COLOR_PURPLE,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/colorConstants';

export default function CustomGradientIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <Icon
        style={props.style}
        size={props.size ? props.size : 25}
        colors={[
          {color: COLOR_SKIN, offset: '0', opacity: '1'},
          {color: COLOR_PURPLE, offset: '1', opacity: '1'},
        ]}
        type={props.type}
        name={props.name}
      />
    </TouchableOpacity>
  );
}
