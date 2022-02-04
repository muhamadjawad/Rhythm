import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR_PRIMARY} from '../../Styles/colorConstants';
import {height} from 'react-native-dimension';
import SoundEntity from '../../Components/MultipleComponents/soundEntity';
import SearchModal from '../../Components/MultipleComponents/searchModal';
import HomeHeader from '../../Components/MultipleComponents/homeHeader';
import {soundArray} from '../../Model/data';
import {useDispatch, useSelector} from 'react-redux';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import SoundPlayerScreen from '../SoundPlayer';
import Images from '../../Assets/Images';

export default function Home(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [sPModal, setsPdModal] = useState(false);
  const [play, setPlay] = useState(false);
  ////////////////////Current Data ///////////
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState(Images.default);
  //////////////////////////////////////////////////

  const soundProgress = useProgress();

  const setupPlayer = () => {
    try {
      TrackPlayer.setupPlayer()
        .then(() => {
          TrackPlayer.add(soundArray);
          console.log('Track Added');
        })

        .then(() => {
          TrackPlayer.stop();
        })
        .catch(e => {
          console.log('Error in setting up', e);
        });
    } catch (error) {}
  };

  useEffect(() => {
    setupPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  const onPressPlay = async (item, index) => {
    console.log('indx', index);

    if (currentTrackIndex === index && play === true) {
      setPlay(false);
      TrackPlayer.pause();
    } else if (currentTrackIndex === index && play === false) {
      setPlay(true);
      TrackPlayer.play();
    } else {
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
      await setCurrentTrackIndex(index);
      await setPlay(true);

      setTitle(item.title);
      setArtist(item.artist);
      setImage(item.artwork);
    }
  };

  onPressEntity = async (item, index) => {
    console.log('indx', index);

    if (currentTrackIndex === index) {
    } else if (currentTrackIndex !== index) {
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
      await setCurrentTrackIndex(index);
      await setPlay(true);

      setTitle(item.title);
      setArtist(item.artist);
      setImage(item.artwork);
    }
  };

  const renderItem = (item, index) => {
    // console.log('item', index);
    return (
      <SoundEntity
        title={item.title}
        artist={item.artist}
        time={
          index === currentTrackIndex
            ? soundProgress.duration - soundProgress.position
            : item.duration
        }
        onPress={() => {
          onPressPlay(item, index);
          // props.navigation.navigate('SoundPlayerScreen');
          setsPdModal(true);
        }}
        onPressPlay={() => {
          onPressPlay(item, index);
        }}
        current={index === currentTrackIndex ? true : false}
        sliderValue={soundProgress.position}
        max={soundProgress.duration}
        //
      />
    );
  };

  const stopPlayer = async () => {
    await TrackPlayer.stop();
  };

  useEffect(() => {
    // TrackPlayer.stop();
    let condition1 = soundProgress.duration != 0 && play === true;
    let condition2 =
      Math.floor(soundProgress.position) === soundProgress.duration;
    let condition3 =
      Math.floor(soundProgress.position) === soundProgress.duration - 1;

    // console.log('con 1', condition1, 'con 2', condition2, 'con 3', condition3);
    if (condition1 && condition3) {
      // stopPlayer();

      // here we need to update the player

      setTitle(soundArray[currentTrackIndex + 1].title);
      setImage(soundArray[currentTrackIndex + 1].artwork);
      setArtist(soundArray[currentTrackIndex + 1].artist);

      // console.log('Its completed');
    }

    // console.log('Done ');
  });

  return (
    <View style={{backgroundColor: COLOR_PRIMARY, flex: 1}}>
      <HomeHeader />

      <FlatList
        ListHeaderComponent={<View style={{marginVertical: height(1)}} />}
        ListFooterComponent={<View style={{marginVertical: height(1)}} />}
        data={soundArray}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />

      <SearchModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
      {/* <BottomPlayerComponent /> */}

      <SoundPlayerScreen
        TrackPlayer={TrackPlayer}
        max={soundProgress.duration}
        value={soundProgress.position}
        title={title}
        artist={artist}
        image={image}
        isVisible={sPModal}
        onClose={() => {
          setsPdModal(false);
        }}
      />
    </View>
  );
}
