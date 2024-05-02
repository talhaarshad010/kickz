import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';

const Notification = () => {
  return (
    <WrapperContainer>
      <View>
        <MyHeader
          ScreenName={'Notification'}
          rightText={'Clear All'}
          leftView={BackIcon}
        />
      </View>

      <View>
        <View></View>
      </View>
    </WrapperContainer>
  );
};

export default Notification;

const styles = StyleSheet.create({});
