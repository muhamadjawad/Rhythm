import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  COLOR_BLACK,
  COLOR_LIGHT_SECONDARY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../../Styles/colorConstants';
import CustomText from '../../Components/SingleComponents/customText';
import {HEADER_FONT_SIZE} from '../../Styles/fontSizes';
import {FAMILY_SOMETIME} from '../../Styles/fontFamilies';
import {height, width} from 'react-native-dimension';
import CustomGradientIcon from '../../Components/SingleComponents/customGradientIcon';
import SoundEntity from '../../Components/MultipleComponents/soundEntity';
import SearchModal from '../../Components/MultipleComponents/searchModal';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../../Components/MultipleComponents/homeHeader';

export default function Home(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPlay, setCurrentPlay] = useState(true);
  const [slider, setSlider] = useState(0.2);
  const [seacrh, setSeacrh] = useState(false);
  let data = [
    {id: 1, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 2, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 3, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 4, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 6, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 7, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 8, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 9, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 10, name: 'abc', artist: 'jawad', time: '00:53'},
    {id: 11, name: 'abc', artist: 'jawad', time: '00:53'},
  ];

  const renderItem = ({item}) => (
    <SoundEntity
      title={item.name}
      artist={item.artist}
      time={item.time}
      onPress={() => {
        props.navigation.navigate('SoundPlayerScreen');
      }}
      current={item.id === 4 ? true : false}
    />
  );

  return (
    <View style={{backgroundColor: COLOR_PRIMARY, flex: 1}}>
      <HomeHeader />

      <FlatList
        ListHeaderComponent={<View style={{marginVertical: height(1)}} />}
        ListFooterComponent={<View style={{marginVertical: height(1)}} />}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <SearchModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
      {/* <BottomPlayerComponent /> */}
    </View>
  );
}
