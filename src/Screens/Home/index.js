import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR_PRIMARY} from '../../Styles/colorConstants';
import {height} from 'react-native-dimension';
import SoundEntity from '../../Components/MultipleComponents/soundEntity';
import SearchModal from '../../Components/MultipleComponents/searchModal';
import HomeHeader from '../../Components/MultipleComponents/homeHeader';
import {soundArray} from '../../Model/data';

export default function Home(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPlay, setCurrentPlay] = useState(true);
  const [slider, setSlider] = useState(0.2);
  const [seacrh, setSeacrh] = useState(false);

  const [storagePermission, setStoragePermission] = useState('');
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
      title={item.title}
      artist={item.artist}
      time={item.duration}
      onPress={() => {
        props.navigation.navigate('SoundPlayerScreen');
      }}
      // current={item.id === 4 ? true : false}
    />
  );

  // get id

  useEffect(() => {}, []);

  return (
    <View style={{backgroundColor: COLOR_PRIMARY, flex: 1}}>
      <HomeHeader />

      <FlatList
        ListHeaderComponent={<View style={{marginVertical: height(1)}} />}
        ListFooterComponent={<View style={{marginVertical: height(1)}} />}
        data={soundArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <SearchModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
      {/* <BottomPlayerComponent /> */}
    </View>
  );
}
