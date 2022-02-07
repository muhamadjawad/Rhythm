import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  COLOR_BLUE,
  COLOR_GREY,
  COLOR_LIGHT_PURPLE,
  COLOR_PEACH,
  COLOR_PINK,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import CustomGradientIcon from '../../Components/SingleComponents/customGradientIcon';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import {
  GRADIENT_BLUE_PURPLE,
  GRADIENT_CORAL,
  GRADIENT_CORAL_GREY,
  GRADIENT_GREY,
  GRADIENT_SKIN,
  GRADIENT_TURTOISE,
  GRADIENT_WHITE,
} from '../../Styles/gradients';
import {LARGE_FONT_SIZE, NORMAL_FONT_SIZE} from '../../Styles/fontSizes';
import {
  FAMILY_ARGUE,
  FAMILY_BULLYING,
  FAMILY_CHEEKY_RABBIT,
} from '../../Styles/fontFamilies';
import CustomText from '../../Components/SingleComponents/customText';
import Images from '../../Assets/Images';
import Modal from 'react-native-modal';
import CustomLinearSlider from '../../Components/SingleComponents/customLinearSlider';

import {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
  useProgress,
} from 'react-native-track-player';
import {soundArray} from '../../Model/data';
import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../Styles/Colors';

export default function SoundPlayerScreen(props) {
  const soundButtonRadius = width(3.4);
  const sliderRadius = width(84) / 2;
  const imageRadius = width(65) / 2;
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
      // transparent={true}
      isVisible={props.isVisible}
      style={{
        flex: 1,
        backgroundColor: Colors.COLOR_LIGHT_SECONDARY,
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
        <CustomGradientIcon
          type="ionicons"
          name="arrow-right-circle"
          size={32}
          style={{alignSelf: 'flex-end'}}
          onPress={props.onClose}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <CircularProgress
          value={
            props.value !== undefined ? (props.value / props.max) * 100 : 0
          }
          radius={sliderRadius}
          textColor={'#ecf0f1'}
          inActiveStrokeColor={'transparent'}
          // inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={10}
          activeStrokeColor={COLOR_PINK}
          activeStrokeSecondaryColor={COLOR_PEACH}
        />
        <View style={{position: 'absolute', marginTop: marginCal}}>
          <Image style={styles.image} source={props.image} />
        </View>
      </View>

      <View style={styles.timer}>
        <CustomText
          style={{color: COLOR_BLUE, fontFamily: FAMILY_BULLYING}}
          title={new Date(props.value * 1000).toISOString().substr(14, 5)}
        />
        <CustomText
          style={{color: COLOR_SKIN, fontFamily: FAMILY_BULLYING}}
          title={new Date(props.max * 1000).toISOString().substr(14, 5)}
        />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <CustomText
            title={props.title}
            style={{
              color: COLOR_WHITE,
              fontSize: LARGE_FONT_SIZE,
              fontFamily: FAMILY_ARGUE,
              maxWidth: width(80),
            }}
          />
          <CustomText
            title={props.artist}
            style={{
              color: COLOR_LIGHT_PURPLE,
              fontSize: NORMAL_FONT_SIZE,
              fontFamily: FAMILY_CHEEKY_RABBIT,
              maxWidth: width(30),
              marginTop: height(1),
            }}
          />
        </View>

        <View style={styles.bottomButtomContainer}>
          <CustomGradientIcon
            name="shuffle"
            type="entypo"
            size={25}
            onPress={() => console.log('Pres')}
            colors={GRADIENT_WHITE}
          />
          <CustomGradientIcon
            name="skip-previous"
            type="material"
            size={45}
            onPress={() => previousTrack()}
            colors={GRADIENT_CORAL}
          />
          <LinearGradient
            colors={[Colors.COLOR_PRIMARY, Colors.COLOR_LIGHT_SECONDARY]} //'#4c669f', '#3b5998', '#192f6a'
            style={styles.playButtonOuter}>
            <View style={styles.playButtonInner}>
              <CustomGradientIcon
                name={playbackState === State.Playing ? 'pause' : 'play'}
                type="font-awesome"
                size={30}
                onPress={() => {
                  console.log('Play button pressed');
                  setPlay(!play);
                  togglePlayButton(playbackState);
                }}
                colors={[{color: COLOR_PEACH, offset: '0', opacity: '1'}]}
              />
            </View>
          </LinearGradient>
          <CustomGradientIcon
            name="skip-next"
            type="material"
            size={45}
            onPress={() => nextTrack()}
            colors={GRADIENT_CORAL}
          />

          <CustomGradientIcon
            name={repeatIcon()}
            type="material-community"
            size={25}
            onPress={() => changeRepeatMode()}
            colors={GRADIENT_WHITE}
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
    backgroundColor: COLOR_PRIMARY,
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
    height: width(65),
    width: width(65),
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
