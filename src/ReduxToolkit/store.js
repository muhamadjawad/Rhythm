import {configureStore} from '@reduxjs/toolkit';
import currentReducer from './Reducer/CurrentPlay';
import trackReducer from './Reducer/TrackPlayer';

export const store = configureStore({
  reducer: {
    current: currentReducer,
    track: trackReducer,
  },
});
