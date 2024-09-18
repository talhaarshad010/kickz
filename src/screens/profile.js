import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Styles/Colors';
import MyText from '../components/TextComponent';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyTextInput from '../components/TextInputComponent';
const Profile = () => {
  const logedInUser = useSelector(state => state.AllReducer.Auth);
  console.log('1111111111111111', logedInUser);

  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <View>
        <MyHeader
          ScreenName={'Profile'}
          leftView={BackIcon}
          onPressleft={() => {
            navigation.goBack();
          }}
          rightView={<AntDesign size={30} color={Colors.blue} name="edit" />}
        />
      </View>

      <View style={styles.cont_01}>
        <Image
          source={require('../assets/Images/profile.png')}
          style={styles.img}
        />
        <MyText
          text={logedInUser.isName}
          color={Colors.black}
          fontSize={responsiveFontSize(2.5)}
          fontWeight={'500'}
        />
      </View>

      <View style={styles.cont_02}>
        <MyTextInput
          value={logedInUser.isName}
          feildName={'Full Name'}
          placeholder={'Enter name'}
        />
        <MyTextInput
          value={logedInUser.isEmail}
          feildName={'Email Address'}
          placeholder={'Enter e-mail'}
        />
        {/* <MyTextInput
          RightView={true}
          value={logedInUser.isToken}
          feildName={'Password'}
          placeholder={'Enter password'}
        /> */}
      </View>
    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cont_01: {
    marginVertical: responsiveHeight(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont_02: {
    marginHorizontal: responsiveWidth(7),
  },
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(21),
  },
});
