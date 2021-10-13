import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice( {
  name: 'loginUser', // prefix
  initialState: {
    state: 'not-login',
    token: '',
    info: {
      id: -1,
      name: null,
      email: null,
      type: null
    }
  },
  reducers: {
    changeState: ( state, action ) => {
      state.state = action.payload;
    },
    setToken: ( state, action ) => {
      state.token = action.payload;
    },
    setInfo: ( state, action ) => {
      state.info = action.payload;
    }
  }
} );

export const { setToken, setInfo } = slice.actions;
export const selectUserToken = ( state ) => state.token;
export const selectUserInfo = ( state ) => state.info;

export default slice.reducer;
