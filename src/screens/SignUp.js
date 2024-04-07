import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../Styles/Colors';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import MyText from '../components/TextComponent';
import MyTextInput from '../components/TextInputComponent';
import MyButton from '../components/CustomButton';
const SignUp = ({navigation}) => {
  return (
    <WrapperContainer>
      <View>
        <MyHeader
          onPressleft={() => {
            navigation.goBack();
          }}
          style={{marginTop: responsiveHeight(2)}}
          leftView={
            <Entypo name="chevron-small-left" size={40} color={Colors.black} />
          }
        />
      </View>
      <ScrollView>
        <View style={styles.cont_01}>
          <View>
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(3.5)}
              textStyle={styles.HelloAgain}
              text={'Create Account'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={styles.slogan}
              text={'Let’s Create Account Together'}
            />
          </View>
          <View style={styles.cont_01_01}>
            <View>
              <MyTextInput
                placeholder={'Enter Name'}
                feildName={'Your Name'}
                textstyle={{fontSize: responsiveFontSize(1.2)}}
              />
              <MyTextInput
                placeholder={'Enter e-mail or password'}
                feildName={'Email Address'}
                textstyle={{fontSize: responsiveFontSize(1.2)}}
              />
              <MyTextInput
                placeholder={'Password'}
                feildName={'Password'}
                RightView={true}
                textstyle={{fontSize: responsiveFontSize(1.2)}}
              />
            </View>

            <View>
              <MyButton
                Color={Colors.white}
                fontWeight={'bold'}
                style={styles.btn}
                textstyle={{fontWeight: 'bold'}}
                text={'Sign In'}
              />
            </View>
          </View>

          <View style={styles.cont_02}>
            <MyText
              textStyle={{color: 'gray'}}
              text={'Already Have An Account?'}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LogIn');
              }}>
              <MyText
                fontWeight={'bold'}
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                text={'Sign In'}
                textStyle={{color: Colors.black, fontWeight: 'bold'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  cont_01: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
  },
  HelloAgain: {
    fontSize: responsiveFontSize(3),
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  cont_01_01: {
    flex: 1,
    marginHorizontal: responsiveWidth(10),
    justifyContent: 'space-around',
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  btn: {
    marginTop: responsiveHeight(4),
  },
});
