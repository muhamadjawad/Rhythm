import {createSlice} from '@reduxjs/toolkit';

export const currentSlice = createSlice({
  name: 'current',
  initialState: {trackIndex: 0},
  reducers: {
    changeCurrent: (state, action) => {
      state.trackIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeCurrent} = currentSlice.actions;

export default currentSlice.reducer;
