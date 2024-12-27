import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './stack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const Routes = () => {
  const dd = useSelector(state => state.AllReducer.Auth);
  return (
    <NavigationContainer>
      {dd?.isToken ? <StackRoute /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
