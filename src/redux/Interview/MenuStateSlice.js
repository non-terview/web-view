import { createSlice } from '@reduxjs/toolkit';

// resume, self, managerChat, table, test

export const slice = createSlice({
  name: 'menuState',
  initialState: {
    menu: 'managerChat'
  },
  reducers: {
    changeState: (state, action) => {
      state.menu = action.payload;
    }
  }
});

export const { changeState } = slice.actions;
export const selectMenuState = (state) => state.menuState.menu;

export default slice.reducer;
