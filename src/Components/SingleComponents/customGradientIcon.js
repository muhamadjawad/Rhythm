import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-gradient-icon';
import {
  COLOR_PURPLE,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import {GRADIENT_TEAL_GREY, GRADIENT_SKIN_PURPLE} from '../../Styles/gradients';

const CustomGradientIcon = props => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <Icon
        style={props.style}
        size={props.size ? props.size : 25}
        colors={props.colors ? props.colors : GRADIENT_TEAL_GREY}
        type={props.type}
        name={props.name}
      />
    </TouchableOpacity>
  );
};

export default CustomGradientIcon;
