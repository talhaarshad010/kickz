import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import LogIn from '../screens/LogIn';
import RecoveryPassword from '../screens/RecoveryPassword';
import SignUp from '../screens/SignUp';
import SplashScreen from 'react-native-splash-screen';
import OTP from '../screens/otp';
import ConfirmPassword from '../screens/confirmPassword';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
      <Stack.Screen name="Otp" component={OTP} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
