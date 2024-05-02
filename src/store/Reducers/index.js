import {combineReducers} from 'redux';
import AuthSlice from './AuthSlice';
import getReducer from './ProductsSlice';
import {ProductsManagement} from './CallingProducts';

const AllReducer = combineReducers({
  AuthSlice,
  // [ProductsManagement.reducerPath]: ProductsManagement.reducer,
  // getReducer,
});

export default AllReducer;
