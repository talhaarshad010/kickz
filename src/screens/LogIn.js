import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
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
import ProductsSlice, {GetData} from '../store/Reducers/ProductsSlice';
const LogIn = ({}) => {
  const [isLoading, setLoading] = useState(false);
  const dataa = useSelector(state => state.AllReducer.Auth.data);
  const dispatch = useDispatch();
  const [value, setvalue] = useState({
    Email: 'Admin@gmail.com',
    Pass: '12345678',
  });
  const {Toasts} = ToastMessage();

  const navigation = useNavigation();

  const [Login] = useLoginMutation();
  const dd = useSelector(state => state);
  console.log('Redux', dd);
  //---------------USER LOGIN FUNCTION---------------
  const isUserLogin = async () => {
    try {
      const payload = {
        userEmail: value.Email,
        userPassword: value.Pass,
      };

      const res = await Login(payload);
      console.log('Userdata', res);
      const {userName, userEmail, isToken} = res.data.data;
      let payload1 = {
        userName: userName,
        userEmail: userEmail,
        isToken: isToken,
      };
      dispatch(userLOGIN(payload1));
      // navigation.navigate("")
    } catch (error) {
      console.log('Error', error.message);
    }
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
                    onPress={() => {
                      isUserLogin();
                    }}
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
