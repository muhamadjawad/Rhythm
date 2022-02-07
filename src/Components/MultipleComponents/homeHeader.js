import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_BLUE,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SKIN,
  COLOR_WHITE,
} from '../../Styles/colorConstants';
import {height, width} from 'react-native-dimension';
import CustomGradientIcon from '../SingleComponents/customGradientIcon';
import CustomText from '../SingleComponents/customText';
import {HEADER_FONT_SIZE, LARGE_FONT_SIZE} from '../../Styles/fontSizes';
import {FAMILY_CHEEKY_RABBIT, FAMILY_SOMETIME} from '../../Styles/fontFamilies';

export default function HomeHeader(props) {
  const [seacrhKeyword, setSeacrhKeyword] = useState('');
  const [search, setSearch] = useState(false);

  return (
    <View>
      {search ? (
        <LinearGradient
          colors={[COLOR_PRIMARY, COLOR_SECONDARY]} //'#4c669f', '#3b5998', '#192f6a'
          style={styles.searchContainer}>
          <View style={{flex: 0.9}}>
            <TextInput
              value={seacrhKeyword}
              onChangeText={val => {
                setSeacrhKeyword(val);
                props.setKeyword(val);
              }}
              spellCheck={false}
              placeholder="Search Here..."
              placeholderTextColor={COLOR_SKIN}
              style={[
                styles.inputContainer,
                {
                  fontFamily: seacrhKeyword
                    ? 'AntDesign'
                    : FAMILY_CHEEKY_RABBIT,
                },
              ]}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: 'center',
            }}>
            <CustomGradientIcon
              type="font-awesome"
              name="close"
              size={27}
              onPress={() => {
                setSearch(false);
                props.setSearch(false);
                setSeacrhKeyword('');
              }}
            />
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.nonSearchContainer}>
          <View style={{width: width(5)}} />
          <CustomText
            title={'My Playlists'}
            style={{
              fontSize: HEADER_FONT_SIZE,
              fontFamily: FAMILY_SOMETIME,
            }}
          />

          <CustomGradientIcon
            type="font-awesome"
            name="search"
            size={30}
            onPress={() => {
              setSearch(true);
              props.setSearch(true);
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: width(2),
    marginVertical: height(2.5),
    alignItems: 'center',
    backgroundColor: COLOR_SECONDARY,
    paddingHorizontal: width(2),
    borderRadius: 20,
  },
  inputContainer: {
    marginHorizontal: width(2),
    borderRadius: 10,
    width: width(73),
    marginLeft: width(3),
    fontSize: LARGE_FONT_SIZE, //NORMAL_FONT_SIZE,
    color: COLOR_BLUE,
  },
  nonSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(3),
    alignItems: 'center',
    marginVertical: height(2),
  },
});

{
  /* <CustomGradientIcon
            type="ionicons"
            name="arrow-left-circle"
            size={30}
            onPress={() => console.log('Pres')}
          /> */
}
