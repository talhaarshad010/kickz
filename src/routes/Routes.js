import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './stack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const Routes = () => {
  const [userLogin, setuserLogin] = useState(false);
  const dataa = useSelector(state => state.AllReducer.AuthSlice.data);
  console.log('dataaa', dataa);
  useEffect(() => {
    dataa;
  }, [dataa]);
  return (
    <NavigationContainer>
      {dataa ? <StackRoute /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
