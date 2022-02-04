import {createSlice} from '@reduxjs/toolkit';

export const trackSlice = createSlice({
  name: 'track',
  initialState: {trackData: []},
  reducers: {
    changeTrack: (state, action) => {
      state.trackData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeTrack} = trackSlice.actions;

export default trackSlice.reducer;
