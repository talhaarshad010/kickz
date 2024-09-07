import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isToken: null,
  isEmail: null,
  isName: null,
};
const Auth = createSlice({
  name: 'AB',
  initialState: initialState,
  reducers: {
    userLOGIN(state, payload) {
      state.isToken = payload.payload.isToken;
      state.isEmail = payload.payload.userEmail;
      state.isName = payload.payload.userName;
    },

    userLOGOUT(state, payload) {
      state.data = null;
    },
  },
});
export const {userLOGIN, userLOGOUT} = Auth.actions;
export default Auth.reducer;
