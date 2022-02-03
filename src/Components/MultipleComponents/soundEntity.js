import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_LIGHT_PURPLE,
  COLOR_LIGHT_SECONDARY,
  COLOR_LIGHT_WHITE,
  COLOR_PEACH,
  COLOR_PINK,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_RED,
  COLOR_SECONDARY,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/colorConstants';
import {height, width} from 'react-native-dimension';
import CustomGradientIcon from '../SingleComponents/customGradientIcon';
import CustomText from '../SingleComponents/customText';
import {NORMAL_FONT_SIZE, SMALL_FONT_SIZE} from '../../Styles/fontSizes';
import {
  FAMILY_ARGUE,
  FAMILY_MOGENA,
  FAMILY_STORYSTONE,
} from '../../Styles/fontFamilies';
import LinearGradient from 'react-native-linear-gradient';

import CustomLinearSlider from '../SingleComponents/customLinearSlider';
import * as Animatable from 'react-native-animatable';

export default function SoundEntity(props) {
  const [slider, setSlider] = useState(0.0);

  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={
          props.current
            ? [COLOR_BLACK, COLOR_LIGHT_SECONDARY, COLOR_BLACK]
            : [COLOR_LIGHT_SECONDARY, COLOR_SECONDARY, COLOR_PRIMARY]
        }
        style={styles.gradientContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: COLOR_PRIMARY,
                justifyContent: 'center',
                borderRadius: width(10),
                padding: 10,
                // alignItems: 'center',
                // alignSelf: 'center',
              }}>
              <CustomGradientIcon
                type="ionicons"
                name="pause"
                style={{marginLeft: width(1)}}
              />
            </View>
            <View style={{marginLeft: width(2)}}>
              <CustomText
                title={props.title}
                style={{
                  fontSize: NORMAL_FONT_SIZE,
                  fontFamily: FAMILY_ARGUE,

                  color: COLOR_WHITE,
                  maxWidth: width(60),
                }}
              />
              <CustomText
                title={props.artist}
                style={{
                  fontSize: SMALL_FONT_SIZE,
                  fontFamily: FAMILY_MOGENA,
                  color: COLOR_WHITE,
                  marginTop: height(0.5),
                  maxWidth: width(30),
                }}
              />
            </View>
          </View>
          <CustomText
            title={new Date(props.time * 1000).toISOString().substr(14, 5)}
            style={{
              fontSize: SMALL_FONT_SIZE,
              fontFamily: FAMILY_STORYSTONE,
              color: COLOR_LIGHT_PURPLE,
            }}
          />
        </View>
        {props.current === true ? (
          <CustomLinearSlider
            value={slider}
            onValueChange={value => setSlider(value)}
          />
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    backgroundColor: COLOR_SECONDARY,
    marginHorizontal: width(3),
    borderRadius: 7,
    padding: 4,

    paddingVertical: height(2),
    paddingHorizontal: width(2),
    marginVertical: height(0.5),
  },
});

{
  /* <View
style={{
  backgroundColor: COLOR_SECONDARY,
  marginHorizontal: width(3),
  borderRadius: 7,
  padding: 4,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: height(2),
  paddingHorizontal: width(2),
  marginVertical: height(0.5),
}}> */
}
