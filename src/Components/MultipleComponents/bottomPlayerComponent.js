import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_PINK,
  COLOR_RED,
  COLOR_WHITE,
} from '../../Styles/colorConstants';
import {width, height} from 'react-native-dimension';
import Images from '../../Assets/Images';
import CustomText from '../SingleComponents/customText';
import {FAMILY_ARGUE, FAMILY_MOGENA} from '../../Styles/fontFamilies';
import {LARGE_FONT_SIZE, SMALL_FONT_SIZE} from '../../Styles/fontSizes';
import {Icon} from 'native-base';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';

export default function BottomPlayerComponent() {
  const [currentPlay, setCurrentPlay] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
  const [open, setOpen] = useState(true);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const swipeableRef = useRef(null); ////
  const closeSwipeable = () => {
    swipeableRef.current.close();
  };

  const renderLeftActions = () => {
    return <View style={{backgroundColor: COLOR_PINK, width: width(1)}}></View>;
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderLeftActions={renderLeftActions}
      onSwipeableLeftOpen={() => {
        console.log('Left');
        setOpen(!open);
      }}
      containerStyle={{
        // height: height(10),
        // width: width(100),
        backgroundColor: COLOR_RED,

        position: 'absolute',
      }}>
      {open ? (
        <View style={{height: height(10), width: width(100)}}>
          <Text>12 34 1234</Text>
        </View>
      ) : null}
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  bottomCurrentSound: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: width(100),
    flexDirection: 'row',
    paddingHorizontal: width(4),
    paddingVertical: height(2),
    alignItems: 'center',
    angle: 40,
  },
});

// <LinearGradient
// colors={['#191a29', COLOR_BLACK]} //'#4c669f', '#3b5998', '#192f6a'
// style={[styles.bottomCurrentSound]}>
// <View style={{flexDirection: 'row', alignItems: 'center'}}>
//   <View
//     style={{
//       borderColor: COLOR_BLUE,
//       borderWidth: 1,
//       borderRadius: width(50),
//       padding: 10,
//       marginRight: width(4),
//     }}>
//     <Image
//       source={Images.AppIcon}
//       style={{
//         height: width(10),
//         width: width(10),
//         borderRadius: width(5),
//       }}
//     />
//   </View>

//   <View>
//     <CustomText
//       title={'FileName FileName FileName FileName'}
//       style={{
//         fontFamily: FAMILY_ARGUE,
//         maxWidth: width(60),
//         fontSize: LARGE_FONT_SIZE,
//       }}
//     />
//     <CustomText
//       title={'artist'}
//       style={{
//         fontFamily: FAMILY_MOGENA,
//         maxWidth: width(30),
//         fontSize: SMALL_FONT_SIZE,
//       }}
//     />
//   </View>
// </View>

// <View style={{marginRight: width(2)}}>
//   <TouchableOpacity
//     onPress={() => {
//       setCurrentPlay(!currentPlay);
//     }}>
//     <Icon
//       type={'Ionicons'}
//       name={currentPlay ? 'play' : 'pause'}
//       style={{color: COLOR_BLUE}}
//     />
//   </TouchableOpacity>
// </View>
// </LinearGradient>
