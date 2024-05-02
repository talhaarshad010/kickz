import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const GetData = createAsyncThunk('getProducts', async () => {
  const res = await axios.get('https://dummyjson.com/products');
  //   const result = await res.json();
  console.log('Data', res);
  return res.data;
});

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
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
