import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
};
const Auth = createSlice({
  name: 'AB',
  initialState: initialState,
  reducers: {
    userLOGIN(state, payload) {
      state.data = payload.payload;
      console.log('STATA', state);
    },

    userLOGOUT(state, payload) {
      state.data = null;
    },
  },
});
export const {userLOGIN, userLOGOUT} = Auth.actions;
export default Auth.reducer;
