import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// slices - 이 위치에 사용할 slices를 임포트
// ex) import testSlice from './Test/testSlice';

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {},
  middleware
});
