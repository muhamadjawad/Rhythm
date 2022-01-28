import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
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
import CircleSlider from '../../Components/MultipleComponents/soundSlider';

export default function SoundPlayer(props) {
  const soundButtonRadius = width(3.4);
  const sliderRadius = width(80) / 2;
  const imageRadius = width(65) / 2;
  const marginCal = sliderRadius - imageRadius + soundButtonRadius;

  console.log('marginCal', marginCal);
  return (
    <View
      style={{
        backgroundColor: COLOR_PRIMARY,
        flex: 1,
        justifyContent: 'space-between',
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
        <CircleSlider
          value={0}
          btnRadius={soundButtonRadius}
          dialRadius={sliderRadius}
          min={0}
          meterColor={COLOR_SKIN}
          strokeWidth={4}
          strokeColor={COLOR_PINK}
        />

        <View style={{position: 'absolute', marginTop: marginCal}}>
          <Image style={styles.image} source={Images.test} />
        </View>
      </View>

      <View style={styles.timer}>
        <CustomText
          style={{color: COLOR_BLUE, fontFamily: FAMILY_BULLYING}}
          title={'02:30'}
        />
        <CustomText
          style={{color: COLOR_SKIN, fontFamily: FAMILY_BULLYING}}
          title={'02:30'}
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
            title={'Sound artist aa kmaj jj'}
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
            colors={GRADIENT_BLUE_PURPLE}
          />
          <CustomGradientIcon
            name="controller-fast-backward"
            type="entypo"
            size={35}
            onPress={() => console.log('Pres')}
          />
          <LinearGradient
            colors={[COLOR_PINK, COLOR_PEACH, COLOR_PURPLE]} //'#4c669f', '#3b5998', '#192f6a'
            style={styles.playButtonOuter}>
            <View style={styles.playButtonInner}>
              <CustomGradientIcon
                name="play"
                type="font-awesome"
                size={30}
                onPress={() => console.log('Pres')}
                colors={[{color: COLOR_PEACH, offset: '0', opacity: '1'}]}
              />
            </View>
          </LinearGradient>
          <CustomGradientIcon
            name="controller-fast-forward"
            type="entypo"
            size={35}
            onPress={() => console.log('Pres')}
          />

          <CustomGradientIcon
            name="repeat"
            type="material-community"
            size={25}
            onPress={() => console.log('Pres')}
            colors={GRADIENT_BLUE_PURPLE}
          />
        </View>
      </View>
    </View>
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
