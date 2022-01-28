import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {COLOR_PRIMARY, COLOR_WHITE} from '../../Styles/colorConstants';
import CustomText from '../../Components/SingleComponents/customText';
import {HEADER_FONT_SIZE} from '../../Styles/fontSizes';
import {FAMILY_SOMETIME} from '../../Styles/fontFamilies';
import {height, width} from 'react-native-dimension';
import CustomGradientIcon from '../../Components/SingleComponents/customGradientIcon';
import SoundEntity from '../../Components/MultipleComponents/soundEntity';
import SearchModal from '../../Components/MultipleComponents/searchModal';

export default function Home(props) {
  const [isVisible, setIsVisible] = useState(false);
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
        props.navigation.navigate('SoundPlayer');
      }}
    />
  );

  return (
    <View style={{backgroundColor: COLOR_PRIMARY, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: width(3),

          alignItems: 'center',
          marginVertical: height(2),
        }}>
        <CustomGradientIcon
          type="ionicons"
          name="arrow-left-circle"
          size={30}
          onPress={() => console.log('Pres')}
        />
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
            setIsVisible(true);
          }}
        />
      </View>

      <TouchableOpacity
        style={{backgroundColor: COLOR_WHITE}}
        onPress={() => props.navigation.navigate('Test')}>
        <Text> TEST</Text>
      </TouchableOpacity>

      <FlatList
        ListHeaderComponent={<View style={{marginVertical: height(1)}} />}
        ListFooterComponent={<View style={{marginVertical: height(1)}} />}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <SearchModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
    </View>
  );
}
