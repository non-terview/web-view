import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice( {
  name: 'loginUser', // prefix
  initialState: {
    state: 'not-login',
    userinfo: {
      email: '',
      name: '',
    },
    token: '',
  },
  reducers: {
    changeState: ( state, action ) => {
      state.state = action.payload;
    },
    getToken: ( state, action ) => {
      state.token = action.payload;
    }
  }
} );

export const { getToken } = slice.actions;
export default slice.reducer;
