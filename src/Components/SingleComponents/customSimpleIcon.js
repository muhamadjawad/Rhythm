import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {width} from 'react-native-dimension';

export default function CustomSimpleIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon
        type={props.type}
        name={props.name}
        style={[{fontSize: width(8)}, props.style]}
      />
    </TouchableOpacity>
  );
}
