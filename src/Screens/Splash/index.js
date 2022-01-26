import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  COLOR_BLUE,
  COLOR_ORANGE,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_SECONDARY,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/colorConstants';
import Images from '../../Assets/Images/index';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 0);
  }, []);

  return (
    <View
      style={{
        // backgroundColor: COLOR_PRIMARY,

        flex: 1,
      }}>
      <LinearGradient
        colors={[COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BLUE]} //'#4c669f', '#3b5998', '#192f6a'
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            // backgroundColor: COLOR_SECONDARY,
            padding: 20,
            borderRadius: width(40),
          }}>
          <Image
            source={Images.AppIcon}
            // source={Images.AppIconGif}
            style={{height: height(35), width: height(35)}}
          />
        </View>
        <Text
          style={{
            color: COLOR_SKIN,
            fontFamily: 'Canadian Brusher DEMO', // 'Canadian Brusher DEMO',
            fontSize: 80,
          }}>
          Rythm
        </Text>
      </LinearGradient>
    </View>
  );
}
