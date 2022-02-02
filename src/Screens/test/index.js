import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
  useProgress,
} from 'react-native-track-player';

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add(sound[0]);

  await TrackPlayer.play();
};

const togglePlayButton = async current => {
  const currentTrack = TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (current === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

//////////////states for buttons //////

const [play, setPlay] = useState(true);
///////////////////////////////////////

//////////////////////////////////////

const playbackState = usePlaybackState();
const soundProgress = useProgress();
//////////////////////////////////////

///@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

useEffect(() => {
  SoundPlayer.getInfo().then(val => {
    console.log('Info===>', val);

    if (duration === 0) {
      setDuration(val.duration);
    }
    setPosition(val.currentTime);
  });

  // console.log(getInfo());
});

useEffect(() => {
  console.log('durtion changed to ,', duration);
}, [duration]);

useEffect(() => {
  console.log('position changed  to ', position);
}, [position]);

const setupPlayer = async () => {
  await SoundPlayer.playSoundFile('surah_fatiha', 'mp3');
  await SoundPlayer.play();
};

const [position, setPosition] = useState(0);
const [duration, setDuration] = useState(0);
