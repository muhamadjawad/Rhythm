import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  COLOR_BLACK,
  COLOR_LIGHT_PURPLE,
  COLOR_PEACH,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import {LARGE_FONT_SIZE} from '../../Styles/fontSizes';
import {
  FAMILY_ABEZEE,
  FAMILY_BULLYING,
  FAMILY_CHEEKY_RABBIT,
} from '../../Styles/fontFamilies';
import CustomText from '../../Components/SingleComponents/customText';
import Modal from 'react-native-modal';

import {RepeatMode, State, usePlaybackState} from 'react-native-track-player';
import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../Styles/Colors';
import CustomSimpleIcon from '../../Components/SingleComponents/customSimpleIcon';

export default function SoundPlayerScreen(props) {
  const sliderRadius = width(70) / 2;
  const imageRadius = width(55) / 2;
  const marginCal = sliderRadius - imageRadius;

  //////////////states for buttons //////

  const [play, setPlay] = useState(true);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackLength, setTrackLength] = useState(0);

  ///////////////////////////////////////

  //////////////////////////////////////

  const playbackState = usePlaybackState();

  //////////////////////////////////////

  useEffect(() => {
    console.log('value in side  ', props.value, 'max', props.max);
  });

  const togglePlayButton = async current => {
    const currentTrack = await props.TrackPlayer.getCurrentTrack();
    console.log(currentTrack, 'current', current, 'State.Paused', State.Paused);
    if (currentTrack !== null) {
      if (current === State.Paused) {
        await props.TrackPlayer.play();
      } else if (current === State.Playing) {
        await props.TrackPlayer.pause();
      } else {
        await props.TrackPlayer.play();
      }
    }
  };

  const nextTrack = async () => {
    try {
      await props.TrackPlayer.skipToNext();
    } catch (error) {
      await props.TrackPlayer.skip(0);
    }
  };

  const previousTrack = async () => {
    try {
      await props.TrackPlayer.skipToPrevious();
    } catch (error) {
      await props.TrackPlayer.skip(trackLength - 1);
    }
  };

  const repeatIcon = () => {
    if (repeatMode === 'off') {
      return 'repeat-off';
    } else if (repeatMode === 'track') {
      //once
      return 'repeat-once';
    } else {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode === 'off') {
      props.TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode === 'track') {
      props.TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode === 'repeat') {
      props.TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  useEffect(() => {
    try {
      props.TrackPlayer.addEventListener('playback-state', ({state}) =>
        //state 2 === paused
        // state 3 ===played

        {
          // console.log('Play event ', state);
          if (state === 1) {
            // then play the first sound again
            // props.TrackPlayer.reset();
            props.TrackPlayer.skip(0);
          }
        },
      );
    } catch (error) {}
  });

  return (
    <Modal
      animationIn={'shake'}
      animationOut={'fadeIn'}
      isVisible={props.isVisible}
      style={{
        flex: 1,
        backgroundColor: Colors.COLOR_SECONDARY,
        justifyContent: 'space-between',
        margin: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: width(3),
          alignItems: 'center',
          marginVertical: height(2),
        }}>
        <CustomSimpleIcon
          type={'Ionicons'}
          name={'arrow-forward-circle'}
          style={{color: Colors.COLOR_PRIMARY}}
          onPress={props.onClose}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        {/*      (props.value !== undefined  && props.max !==undefined)   ? (props.value / props.max) * 100 : 0 */}
        <CircularProgress
          value={
            props.value !== undefined && props.max !== undefined
              ? (props.value / props.max) * 100
              : 0
          }
          radius={sliderRadius}
          textColor={'#ecf0f1'}
          inActiveStrokeColor={COLOR_BLACK}
          // inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={10}
          activeStrokeWidth={5}
          activeStrokeColor={Colors.COLOR_PRIMARY}
        />
        <View style={{position: 'absolute', marginTop: marginCal}}>
          <Image style={styles.image} source={props.image} />
        </View>
      </View>

      <View style={styles.timer}>
        <CustomText
          style={{color: Colors.COLOR_PRIMARY, fontFamily: FAMILY_BULLYING}}
          title={new Date(props.value * 1000).toISOString().substr(14, 5)}
        />
        <CustomText
          style={{color: Colors.COLOR_PRIMARY, fontFamily: FAMILY_BULLYING}}
          title={new Date(props.max * 1000).toISOString().substr(14, 5)}
        />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <CustomText
            title={props.title}
            style={{
              color: COLOR_WHITE,
              // fontSize: VERY_LARGE_SIZE,
              fontFamily: FAMILY_ABEZEE, //'AutourOne-Regular'

              fontSize: width(6),
              maxWidth: width(80),
            }}
          />
          <CustomText
            title={props.artist}
            style={{
              color: COLOR_LIGHT_PURPLE,
              fontSize: LARGE_FONT_SIZE,
              fontFamily: FAMILY_CHEEKY_RABBIT,
              maxWidth: width(30),
              marginTop: height(1),
            }}
          />
        </View>

        <View style={styles.bottomButtomContainer}>
          <CustomSimpleIcon
            type={'Foundation'}
            name={'shuffle'}
            style={{color: COLOR_WHITE}}
            onPress={() => console.log('Pres')}
          />
          <CustomSimpleIcon
            name="play-skip-back-circle"
            type="Ionicons"
            style={{color: Colors.COLOR_PRIMARY, fontSize: width(14)}}
            onPress={() => previousTrack()}
          />

          <LinearGradient
            colors={[COLOR_WHITE, Colors.COLOR_SECONDARY]} //'#4c669f', '#3b5998', '#192f6a'
            style={styles.playButtonOuter}>
            <View style={styles.playButtonInner}>
              <CustomSimpleIcon
                name={playbackState === State.Playing ? 'pause' : 'play'}
                type="FontAwesome5"
                style={{color: Colors.COLOR_SECONDARY}}
                onPress={() => {
                  console.log('Play button pressed');
                  setPlay(!play);
                  togglePlayButton(playbackState);
                }}
              />
            </View>
          </LinearGradient>

          <CustomSimpleIcon
            name="play-skip-forward-circle"
            type="Ionicons"
            style={{color: Colors.COLOR_PRIMARY, fontSize: width(14)}}
            onPress={() => nextTrack()}
          />

          <CustomSimpleIcon
            name={repeatIcon()}
            type="MaterialCommunityIcons"
            style={{color: COLOR_WHITE}}
            onPress={() => changeRepeatMode()}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  playButtonOuter: {
    height: width(20),
    width: width(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,

    shadowColor: COLOR_PEACH,
    shadowOpacity: 12,
  },

  playButtonInner: {
    height: width(18),
    width: width(18),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_PRIMARY,
  },

  bottomButtomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width(4),
    marginVertical: height(5),
    alignItems: 'center',
  },

  image: {
    marginHorizontal: width(10),
    height: width(55),
    width: width(55),
    alignSelf: 'center',
    // borderWidth: 2,
    // borderColor: COLOR_WHITE,
    borderRadius: width(65) / 2,
    // marginTop: height(3),
  },

  timer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: width(4),
  },
});

{
  /* <View style={{marginHorizontal: width(10)}}>
          <CustomLinearSlider
            value={props.value !== undefined ? props.value : 0}
            max={props.max !== undefined ? props.max : 0}
            onStart={() => {
              console.log('start');
            }}
            onChange={async value => {
              console.log('value of current ==>', value);
              // await SoundPlayer.seek(value);
            }}
          />
        </View> */
}
