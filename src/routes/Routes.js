import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './stack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import localStorage from 'redux-persist/es/storage';

const Routes = () => {
  const [userLogin, setuserLogin] = useState(false);

  const dd = useSelector(state => state.AllReducer.Auth);
  const token = localStorage.getItem('authToken');
  return (
    <NavigationContainer>
      {dd?.isToken ? <StackRoute /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
