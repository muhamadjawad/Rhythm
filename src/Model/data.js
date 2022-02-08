import Images from '../Assets/Images';
import Sounds from '../Assets/Sounds';

export const soundArray = [
  {
    id: 1,
    url: require('../Assets/Sounds/Surah/surah_fatiha.mp3'),
    title: 'Surah Fatiha',
    artist: 'Mishaari Raashid al-Aafaasee',
    genre: 'Surah',
    artwork: Images.mashary,
    duration: 51,
  },
  {
    id: 2,
    url: require('../Assets/Sounds/Surah/surah_ikhlas.mp3'),
    title: 'Surah Ikhlas',
    artist: 'Mishaari Raashid al-Aafaasee',
    genre: 'Surah',
    artwork: Images.mashary, // Load artwork from the network
    duration: 40,
  },
  {
    id: 3,
    url: require('../Assets/Sounds/Nasheed/nasheed.mp3'),
    title: 'Nasheed',
    artist: 'Omer Esa',
    genre: 'Nasheed',
    artwork: Images.default, // Load artwork from the network
    duration: 309,
  },
  {
    id: 4,
    url: require('../Assets/Sounds/General/ringtone.mp3'),
    title: 'Ringtone',
    artist: 'unknown',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 1,
  },

  {
    id: 5,
    url: require('../Assets/Sounds/Bayan/Dawat-تبلیغ.mp3'),
    title: 'Dawat-تبلیغ',
    artist: 'Molana Tariq Jamil',
    genre: 'General',
    artwork: Images.mtj, // Load artwork from the network
    duration: 5 * 60 + 27,
  },

  {
    id: 6,
    url: require('../Assets/Sounds/Bayan/Deen-o-Dunya-مسلمان-دین-دار-بھی-ہے-اور-دنیاداربھی.mp3'),
    title: 'Deen-o-Dunya-مسلمان-دین-دار-بھی-ہے-اور-دنیاداربھی',
    artist: 'Molana Tariq Jamil',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 6 * 60 + 37,
  },
  {
    id: 7,
    url: require('../Assets/Sounds/Bayan/Deen-دین-رواج-بن-گیا-ہے.mp3'),
    title: 'Deen-دین-رواج-بن-گیا-ہے',
    artist: 'Molana Tariq Jamil',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 3 * 60 + 31,
  },

  {
    id: 8,
    url: require('../Assets/Sounds/Bayan/Destroyed-Super-Powers.mp3'),
    title: 'Destroyed-Super-Powers',
    artist: 'Molana Tariq Jamil',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 5 * 60 + 29,
  },
  {
    id: 9,
    url: require('../Assets/Sounds/General/drone-007wav-14863.mp3'),
    title: 'drone-007wav-14863',
    artist: 'unknown',
    genre: 'General',
    artwork: Images.drone, // Load artwork from the network
    duration: 5 * 60 + 32,
  },

  {
    id: 10,
    url: require('../Assets/Sounds/General/epic-space-to-craft-12300.mp3'),
    title: 'epic-space-to-craft-12300',
    artist: 'unknown',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 25,
  },
  {
    id: 11,
    url: require('../Assets/Sounds/General/spacesound-7547.mp3'),
    title: 'spacesound-7547',
    artist: 'unknown',
    genre: 'General',
    artwork: Images.default, // Load artwork from the network
    duration: 27,
  },
];
