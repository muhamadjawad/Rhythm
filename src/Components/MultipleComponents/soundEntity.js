import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  COLOR_DARK_SECONDARY,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import {height, width} from 'react-native-dimension';
import CustomText from '../SingleComponents/customText';
import {LARGE_FONT_SIZE, SMALL_FONT_SIZE} from '../../Styles/fontSizes';
import {FAMILY_ARGUE, FAMILY_STORYSTONE} from '../../Styles/fontFamilies';

import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../Styles/Colors';
import CustomSimpleIcon from '../SingleComponents/customSimpleIcon';

export default function SoundEntity(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.mainContainer]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                padding: width(7),
              }}>
              <CustomSimpleIcon
                type={'FontAwesome'}
                name={props.current ? 'pause' : 'play'}
                style={{color: Colors.COLOR_PRIMARY, fontSize: width(6)}}
                onPress={props.onPressPlay}
              />

              {/* {props.current ? (
                <View style={{position: 'absolute', alignSelf: 'center'}}>
                  <CircularProgress
                    value={
                      props.sliderValue !== undefined && props.max !== undefined
                        ? (props.sliderValue / props.max) * 100
                        : 0
                    }
                    radius={width(11)}
                    textColor={'transparent'}
                    inActiveStrokeColor={'transparent'}
                    activeStrokeWidth={5}
                    activeStrokeColor={COLOR_WHITE}
                    activeStrokeSecondaryColor={Colors.COLOR_PRIMARY}
                  />
                </View>
              ) : null} */}
            </View>
            <View style={{marginLeft: width(2)}}>
              <CustomText
                title={props.title}
                style={{
                  fontSize: LARGE_FONT_SIZE,
                  fontFamily: FAMILY_ARGUE,

                  color: Colors.COLOR_PRIMARY,
                  maxWidth: width(60),
                }}
              />
              <CustomText
                title={props.artist}
                style={{
                  fontSize: SMALL_FONT_SIZE,
                  fontFamily: FAMILY_ARGUE,
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
              color: COLOR_WHITE,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width(3),
    borderRadius: 20,
    padding: 4,
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    marginVertical: height(0.5),
    elevation: 10,
    backgroundColor: COLOR_DARK_SECONDARY,
  },
});

{
  /* <LinearGradient
start={{x: 0, y: 0}}
end={{x: 1, y: 1}}
colors={
  props.current
    ? [
        Colors.COLOR_PRIMARY,
        Colors.COLOR_SECONDARY,
        Colors.COLOR_SECONDARY,
        Colors.COLOR_PRIMARY,
      ]
    : [
        Colors.COLOR_SECONDARY,
        Colors.COLOR_SECONDARY,

        // Colors.COLOR_PRIMARY,
      ]
}
style={styles.mainContainer}> */
}
