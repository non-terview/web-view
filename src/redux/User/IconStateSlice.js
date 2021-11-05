import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'iconState', // prefix
  initialState: {
    icon: '진행중'
  },
  reducers: {
    changeState: (state, action) => {
      state.icon = action.payload;
    }
  }
});

export const { changeState } = slice.actions;

export const selectUserState = (state) => state.iconState.icon;

export default slice.reducer;
