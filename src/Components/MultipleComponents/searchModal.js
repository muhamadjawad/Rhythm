import {View, Text, ColorPropType, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  COLOR_BLUE,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_SECONDARY,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/Colors/colorConstants';
import CustomGradientIcon from '../SingleComponents/customGradientIcon';
import {height, width} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import {
  FAMILY_ARGUE,
  FAMILY_ARSENICAL,
  FAMILY_BULLYING,
  FAMILY_CANADIAN_BRUSHER,
  FAMILY_CHEEKY_RABBIT,
  FAMILY_MOGENA,
  FAMILY_SOMETIME,
  FAMILY_STORYSTONE,
} from '../../Styles/fontFamilies';
import {
  LARGE_FONT_SIZE,
  NORMAL_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../Styles/fontSizes';

export default function SearchModal(props) {
  const [search, setSearch] = useState('');

  return (
    <Modal isVisible={props.isVisible} style={{flex: 1, margin: 0}}>
      <View style={{flex: 1, backgroundColor: COLOR_PRIMARY}}>
        <LinearGradient
          colors={[COLOR_PRIMARY, COLOR_SECONDARY]} //'#4c669f', '#3b5998', '#192f6a'
          style={{
            flexDirection: 'row',
            marginHorizontal: width(2),
            marginVertical: height(2),
            alignItems: 'center',
            backgroundColor: COLOR_SECONDARY,
            paddingHorizontal: width(2),
            borderRadius: 20,
          }}>
          <CustomGradientIcon
            disabled={true}
            type="font-awesome"
            name="search"
            size={27}
          />
          <TextInput
            value={search}
            onChangeText={val => {
              setSearch(val);
            }}
            spellCheck={false}
            placeholder="Type Here..."
            placeholderTextColor={COLOR_SKIN}
            style={{
              // backgroundColor: COLOR_SECONDARY,

              marginHorizontal: width(2),
              borderRadius: 10,
              width: width(73),
              marginLeft: width(3),
              fontFamily: search ? 'AntDesign' : FAMILY_CHEEKY_RABBIT,
              fontSize: LARGE_FONT_SIZE, //NORMAL_FONT_SIZE,
              color: COLOR_BLUE,
            }}
          />
          <CustomGradientIcon
            type="font-awesome"
            name="close"
            size={27}
            onPress={props.onClose}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
}
