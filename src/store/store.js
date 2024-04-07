import {configureStore} from '@reduxjs/toolkit';
import AllReducer from './Reducers';

export const store = configureStore({
  reducer: {
    AllReducer,
  },
});
