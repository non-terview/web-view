import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'userDataSlice',
  initialState: {
    name: 'none',
    password: 'none',
    email: 'none'
  },
  reducers: {
    changeUserData: (state, action) => {}
  }
});

export const selectUserName = (state) => state.name;
export const selectUserPassword = (state) => state.password;
export const selectUserEmail = (state) => state.email;

export default slice.reducer;
