import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../../Assets/Images/index';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

import {soundArray} from '../../Model/data';
import {useDispatch, useSelector} from 'react-redux';
import {changeTrack} from '../../ReduxToolkit/Reducer/TrackPlayer';
import Colors from '../../Styles/Colors';

export default function Splash(props) {
  const {data} = useSelector(state => state.track);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (soundArray.constructor === Array) {
    //   setupPlayer();
    // }
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  }, []);

  const setupPlayer = () => {
    TrackPlayer.setupPlayer()
      .then(() => {
        TrackPlayer.add(soundArray);
      })
      .then(() => {
        dispatch(changeTrack(TrackPlayer));
      })
      .then(() => {
        console.log('Track Added');
      });
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
          color: Colors.COLOR_SECONDARY,
          fontFamily: 'Canadian Brusher DEMO', // 'Canadian Brusher DEMO',
          fontSize: 80,
        }}>
        Rythm
      </Text>
    </View>
  );
}
