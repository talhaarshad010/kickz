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
// import {decryptPassword} from '../utils/helperFunctions';
const Profile = () => {
  const dataa = useSelector(state => state.AllReducer.AuthSlice.data);
  console.log(dataa);
  // const [decryptedPassword, setDecryptedPassword] = useState('');
  // useEffect(() => {
  //   const decryptedPass = decryptPassword(dataa.userPassword);
  //   setDecryptedPassword(decryptedPass);
  // }, []);

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
          text={dataa.userName}
          color={Colors.black}
          fontSize={responsiveFontSize(2.5)}
          fontWeight={'500'}
        />
      </View>

      <View style={styles.cont_02}>
        <MyTextInput
          value={dataa.userName}
          feildName={'Full Name'}
          placeholder={'Enter name'}
        />
        <MyTextInput
          value={dataa.userEmail}
          feildName={'Email Address'}
          placeholder={'Enter e-mail'}
        />
        <MyTextInput
          RightView={true}
          value={dataa.userPassword}
          feildName={'Password'}
          placeholder={'Enter password'}
        />
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
