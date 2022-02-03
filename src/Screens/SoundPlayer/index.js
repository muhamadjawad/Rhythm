import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  COLOR_BLUE,
  COLOR_LIGHT_PURPLE,
  COLOR_PEACH,
  COLOR_PINK,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/colorConstants';
import CustomGradientIcon from '../../Components/SingleComponents/customGradientIcon';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENT_BLUE_PURPLE} from '../../Styles/gradients';
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
// import SoundPlayer from 'react-native-sound-player';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
  useProgress,
} from 'react-native-track-player';
import {sound} from '../../Model/data';
import SoundPlayer from 'react-native-sound-player';

export default function SoundPlayerScreen(props) {
  const soundButtonRadius = width(3.4);
  const sliderRadius = width(80) / 2;
  const imageRadius = width(65) / 2;
  const marginCal = sliderRadius - imageRadius + soundButtonRadius;

  //////////////states for buttons //////

  const [play, setPlay] = useState(true);
  const [repeatMode, setRepeatMode] = useState('off');

  ///////////////////////////////////////

  //////////////////////////////////////

  const playbackState = usePlaybackState();
  const soundProgress = useProgress();
  //////////////////////////////////////

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = () => {
    try {
      TrackPlayer.setupPlayer()
        .then(() => {
          TrackPlayer.add(sound);
        })
        .then(() => {
          TrackPlayer.play();
        });
    } catch (error) {
      console.log('error in initiliaztion ', error);
    }
  };
  const stopPlayer = async () => {
    await TrackPlayer.stop();
  };

  const togglePlayButton = async current => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log(currentTrack, 'current', current, 'State.Paused', State.Paused);
    if (currentTrack !== null) {
      if (current === State.Paused) {
        await TrackPlayer.play();
      } else if (current === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    }
  };

  const nextTrack = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      await TrackPlayer.skip(0);
    }
  };

  const previousTrack = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      await TrackPlayer.skip(sound.length - 1);
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
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode === 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode === 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const shuffle = async () => {
    // TrackPlayer.loo;
  };

  useEffect(() => {
    try {
      TrackPlayer.addEventListener('playback-state', ({state}) =>
        //state 2 === paused
        // state 3 ===played

        {
          // console.log('Play event ', state);
          if (state === 1) {
            // then play the first sound again
            // TrackPlayer.reset();
            TrackPlayer.skip(0);
          }
        },
      );
    } catch (error) {}
  });

  return (
    <Modal
      animationIn={'shake'}
      animationOut={'fadeIn'}
      transparent={true}
      isVisible={true}
      style={{
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
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
          onPress={() => props.navigation.pop()}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        {/* <CircleSlider
          value={parseInt(
            soundProgress.position * (360 / soundProgress.duration),
          )}
          max={359}
          btnRadius={soundButtonRadius}
          dialRadius={sliderRadius}
          min={0}
          meterColor={COLOR_SKIN}
          strokeWidth={4}
          strokeColor={COLOR_PINK}
          // onValueChange={async value => {
          //   console.log('value', value);
          //   await TrackPlayer.seekTo(value);
          // }}
        /> */}

        <View style={{position: 'relative', marginTop: marginCal}}>
          <Image style={styles.image} source={Images.test} />
        </View>
      </View>

      <View style={{marginHorizontal: width(10)}}>
        <CustomLinearSlider
          value={soundProgress.position}
          max={soundProgress.duration}
          onStart={() => {
            console.log('start');
          }}
          onChange={async value => {
            console.log('value of current ==>', value);
            // await SoundPlayer.seek(value);
          }}
        />
      </View>

      <View style={styles.timer}>
        <CustomText
          style={{color: COLOR_BLUE, fontFamily: FAMILY_BULLYING}}
          title={new Date(soundProgress.position * 1000)
            .toISOString()
            .substr(14, 5)}
        />
        <CustomText
          style={{color: COLOR_SKIN, fontFamily: FAMILY_BULLYING}}
          title={new Date(soundProgress.duration * 1000)
            .toISOString()
            .substr(14, 5)}
        />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <CustomText
            title={'Sound Name vary vary large large dfsf'}
            style={{
              color: COLOR_WHITE,
              fontSize: LARGE_FONT_SIZE,
              fontFamily: FAMILY_ARGUE,
              maxWidth: width(80),
            }}
          />
          <CustomText
            title={`'Repeat  mode ===>' ${repeatMode}`}
            style={{
              color: COLOR_LIGHT_PURPLE,
              fontSize: NORMAL_FONT_SIZE,
              fontFamily: FAMILY_CHEEKY_RABBIT,
              maxWidth: width(60),
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
            colors={GRADIENT_BLUE_PURPLE}
          />
          <CustomGradientIcon
            name="controller-fast-backward"
            type="entypo"
            size={35}
            onPress={() => previousTrack()}
          />
          <LinearGradient
            colors={[COLOR_PINK, COLOR_PEACH, COLOR_PURPLE]} //'#4c669f', '#3b5998', '#192f6a'
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
            name="controller-fast-forward"
            type="entypo"
            size={35}
            onPress={() => nextTrack()}
          />

          <CustomGradientIcon
            name={repeatIcon()}
            type="material-community"
            size={25}
            onPress={() => changeRepeatMode()}
            colors={GRADIENT_BLUE_PURPLE}
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
