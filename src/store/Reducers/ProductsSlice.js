import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {userLOGIN} from './AuthSlice';
import {store} from '../store';
import {LOG_IN} from '../../assets/config/urls';

export const GetData = createAsyncThunk('LoginCheck', async data => {
  const res = await axios.post(LOG_IN, data);
  console.log('Data', res);
  return res.data;
});

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  savetoLogin: [],
};

const getReducer = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(GetData.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(GetData.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(GetData.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default getReducer.reducer;
