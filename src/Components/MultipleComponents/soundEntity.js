import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  COLOR_BLUE,
  COLOR_LIGHT_PURPLE,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_SECONDARY,
  COLOR_SKIN,
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

export default function SoundEntity(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#353761', COLOR_SECONDARY, COLOR_PRIMARY]} //'#4c669f', '#3b5998', '#192f6a'
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
                color: COLOR_SKIN,
                maxWidth: width(60),
              }}
            />
            <CustomText
              title={props.artist}
              style={{
                fontSize: SMALL_FONT_SIZE,
                fontFamily: FAMILY_MOGENA,
                color: COLOR_BLUE,
                marginTop: height(0.5),
                maxWidth: width(30),
              }}
            />
          </View>
        </View>
        <CustomText
          title={props.time}
          style={{
            fontSize: SMALL_FONT_SIZE,
            fontFamily: FAMILY_STORYSTONE,
            color: COLOR_LIGHT_PURPLE,
          }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}

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
