import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
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
import {AxiosBaseUrl} from '../config/axiosBaseUrl';
import ToastMessage from '../Hooks/ToastMessage';
const OTP = ({navigation, route}) => {
  const {email} = route.params;
  const [otp, setOtp] = useState('');
  const [Email, setEmail] = useState(email);
  const {Toasts} = ToastMessage();
  // console.log('route data: ', otp, email);

  const CodeVerify = async () => {
    try {
      const res = await AxiosBaseUrl.post('/VerifyOtp', {
        userEmail: Email,
        otp: otp,
      });
      console.log('Received message: ', res.data.message);
      if (res.data.message) {
        Toasts('INFO', res.data.message, 'info', 4000);
        navigation.navigate('ConfirmPassword', {otp: otp, userEmail: Email});
      } else {
        Toasts('INFO', res.data.message, 'info', 4000);
      }
    } catch (error) {
      Toasts('Error', error.res.data.message, 'error', 4000);
    }
  };

  return (
    <WrapperContainer>
      <MyHeader
        onPressleft={() => {
          navigation.goBack();
        }}
        style={styles.header}
        leftView={
          <Entypo name="chevron-small-left" size={40} color={Colors.black} />
        }
      />
      <ScrollView>
        <View style={styles.cont_01}>
          <View style={styles.recover}>
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(3.5)}
              textStyle={styles.HelloAgain}
              text={'Otp Verification'}
            />
            <MyText
              fontSize={responsiveFontSize(2)}
              textStyle={{...styles.slogan, width: responsiveWidth(70)}}
              text={'Please Enter OTP For Changing Password'}
            />
          </View>
          <View style={styles.cont_01_01}>
            <MyTextInput
              onChangeText={text => {
                setOtp(text);
              }}
              value={otp}
              placeholder={'Enter Otp'}
              feildName={'Otp'}
              textstyle={{fontSize: responsiveFontSize(1.2)}}
            />

            <View>
              <MyButton
                onPress={() => {
                  CodeVerify();
                }}
                fontWeight={'bold'}
                color={Colors.white}
                style={styles.btn}
                textstyle={{fontWeight: 'bold'}}
                text={'Confirm'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default OTP;

const styles = StyleSheet.create({
  header: {marginTop: responsiveHeight(2)},
  cont_01: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
  },
  recover: {
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 0.8,
    marginHorizontal: responsiveWidth(10),
    justifyContent: 'space-around',
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(19),
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
});
