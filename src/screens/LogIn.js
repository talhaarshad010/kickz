import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {userLOGIN} from '../store/Reducers/AuthSlice';
import {LOG_IN} from '../assets/config/urls';
import ToastMessage from '../Hooks/ToastMessage';
import axios from 'axios';
import {checkMinLength, validateEmail} from '../utils/validations';
import {apiPost} from '../config/newHelper';
import {useLoginMutation} from '../store/Reducers/CallingProducts';
const LogIn = ({}) => {
  const [isLoading, setLoading] = useState(false);
  const dataa = useSelector(state => state.AllReducer.AuthSlice.data);
  const dispatch = useDispatch();
  const [value, setvalue] = useState({
    Email: 'Admin@gmail.com',
    Pass: '12345678',
  });
  const {Toasts} = ToastMessage();
  console.log('Data', dataa);
  const navigation = useNavigation();
  const [Login] = useLoginMutation();

  //---------------USER LOGIN FUNCTION---------------
  const isUserLogin = async () => {
    const passwordError = checkMinLength(value.Pass, 8, 'password');
    if (!value.Pass || !value.Email) {
      return Toasts('Error', 'Please enter e-mail or password', 'info');
    }
    if (!validateEmail(value.Email)) {
      return Toasts('Error', 'Please enter a valid email address', 'info');
    }
    if (passwordError) {
      return Toasts('Error', passwordError, 'error');
    }
    setLoading(true);
    //--------------- RTK QUERY ---------------
    try {
      const payload = {
        userEmail: value.Email,
        userPassword: value.Pass,
      };
      const res = await Login(payload);
      const {userName, userEmail, isToken, userPassword} = res.data.data;
      console.log('Token: ', isToken);
      dispatch(userLOGIN(res.data.data));
      console.log('userLoginData', {
        userName,
        userEmail,
        isToken,
        userPassword,
      });
    } catch (error) {
      console.log('error', error);
    }

    // try {
    //   const payload = {
    //     userEmail: value.Email,
    //     userPassword: value.Pass,
    //   };
    // const res = await apiPost(LOG_IN, payload);
    //   console.log('userData', res);
    //   await dispatch(userLOGIN(res.data.isToken));
    // } catch (error) {
    //   console.log('Error', error);
    // }
    // try {

    //   const response = await axios.post(LOG_IN, {
    //     userEmail: value.Email,
    //     userPassword: value.Pass,
    //   });
    //   const {data} = await response;
    //
    // } catch (err) {
    //   console.log('Error', err);
    //   Toasts('Error', err.message, 'error');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <WrapperContainer>
      <SafeAreaView>
        {/* <MyHeader
          onPressleft={() => {
            navigation.goBack();
          }}
          style={styles.header}
          leftView={
            <Entypo name="chevron-small-left" size={40} color={Colors.black} />
          }
        /> */}
        <ScrollView>
          <View style={styles.cont_01}>
            <View>
              <MyText
                fontSize={responsiveFontSize(3.5)}
                fontWeight={'bold'}
                color={Colors.black}
                textStyle={styles.HelloAgain}
                text={'Hello Again!'}
              />
              <MyText
                fontSize={responsiveFontSize(2)}
                textStyle={styles.slogan}
                text={'Welcome Back You’ve Been Missed!'}
              />
            </View>
            <View style={styles.cont_01_01}>
              <View>
                <MyTextInput
                  placeholder={'Enter e-mail or password'}
                  feildName={'Email Address'}
                  textstyle={{fontSize: responsiveFontSize(1.5)}}
                  value={value.Email}
                  onChangeText={text =>
                    setvalue(txt => ({
                      ...txt,
                      Email: text,
                    }))
                  }
                />
                <MyTextInput
                  placeholder={'Password'}
                  feildName={'Password'}
                  RightView={true}
                  textstyle={{fontSize: responsiveFontSize(1.5)}}
                  value={value.Pass}
                  onChangeText={text =>
                    setvalue(txt => ({
                      ...txt,
                      Pass: text,
                    }))
                  }
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RecoveryPassword');
                  }}
                  style={{
                    alignItems: 'flex-end',
                    marginTop: responsiveHeight(1),
                  }}>
                  <MyText
                    fontSize={responsiveFontSize(1.7)}
                    text={'Recovery Password'}
                  />
                </TouchableOpacity>
              </View>

              <View>
                {isLoading ? (
                  <View>
                    <ActivityIndicator size={'large'} color={Colors.blue} />
                  </View>
                ) : (
                  <MyButton
                    color={Colors.white}
                    fontWeight={'bold'}
                    onPress={isUserLogin}
                    style={styles.btn}
                    text={'Sign In'}
                  />
                )}
              </View>
            </View>
            <View style={styles.cont_02}>
              <MyText text={'Already Have An Account?'} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <MyText
                  fontWeight={'bold'}
                  color={Colors.black}
                  fontSize={responsiveFontSize(2)}
                  text={'SignUp For Free'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  header: {marginTop: responsiveHeight(2)},
  cont_01: {
    flex: 1,
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
    marginHorizontal: responsiveWidth(10),
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    bottom: 0,
    alignSelf: 'center',
    marginTop: responsiveHeight(19),
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
});
