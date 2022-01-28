import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React from 'react';
import {COLOR_WHITE} from '../../Styles/colorConstants';
// import {Icon} from 'react-native-gradient-icon';
import {GRADIENT_SKIN_PURPLE} from '../../Styles/gradients';

import {width} from 'react-native-dimension';
import {Icon} from 'react-native-gradient-icon';
import {Icon as NatIcon} from 'native-base';

export default function Test(props) {
  return (
    <View style={{backgroundColor: COLOR_WHITE}}>
      <TouchableOpacity onPress={() => props.navigation.pop()}>
        <Text> POP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.push('Home')}>
        <NatIcon
          type={'AntDesign'}
          name={'upcircleo'}
          color={'pink'}
          style={{fontSize: width(16)}}
        />
      </TouchableOpacity>

      <Pressable onPress={() => props.navigation.pop()}>
        <Icon
          // style={props.style}
          size={50}
          colors={GRADIENT_SKIN_PURPLE}
          type={'ionicons'}
          name={'arrow-right-circle'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    fontSize: width(20),
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
