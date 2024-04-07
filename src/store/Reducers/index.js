import {combineReducers} from 'redux';
import AuthSlice from './AuthSlice';

const AllReducer = combineReducers({
  AuthSlice,
});

export default AllReducer;
