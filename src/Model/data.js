import Images from '../Assets/Images';
import Sounds from '../Assets/Sounds';

export const sound = [
  {
    id: '1',
    url: Sounds.surahFatiha,
    title: 'Surah Fatiha',
    artist: 'Masshasy',
    artwork: Images.test,
  },
  {
    id: '2',
    url: Sounds.surahIkhlas,
    title: 'Surah Ikhlas',
    artist: 'Mashary',
    artwork: Images.AppIcon, // Load artwork from the network
  },
  {
    id: '3',
    url: Sounds.nasheed,
    title: 'Nasheed',
    artist: 'Omer Esa',
    artwork: Images.test, // Load artwork from the network
  },
  {
    id: '4',
    url: Sounds.ringtone,
    title: 'Ringtone',
    artist: 'unknown',
    artwork: Images.AppIcon, // Load artwork from the network
  },
];
