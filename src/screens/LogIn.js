import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {userLOGIN} from '../store/Reducers/AuthSlice';

const LogIn = ({}) => {
  const dataa = useSelector(state => state.AllReducer.AuthSlice.data);
  const dispatch = useDispatch();
  const [value, setvalue] = useState({
    Email: '',
    Pass: '',
  });
  console.log('Data', dataa);
  const navigation = useNavigation();

  console.log('eml', value.Email);
  console.log('pas', value.Pass);

  const userSignIN = () => {
    let payload = {
      Email: value.Email,
      Pass: value.Pass,
    };

    dispatch(userLOGIN(payload));
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
              <MyButton
                Color={Colors.white}
                fontWeight={'bold'}
                onPress={() => {
                  userSignIN();
                }}
                style={styles.btn}
                textstyle={{}}
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
                navigation.navigate('SignUp');
              }}>
              <MyText
                fontWeight={'bold'}
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                text={'SignUp For Free'}
                textStyle={{color: Colors.black, fontWeight: 'bold'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  header: {marginTop: responsiveHeight(2)},
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
    flex: 0.8,
    marginHorizontal: responsiveWidth(10),
    marginVertical: responsiveHeight(7),
  },
  cont_02: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(10),
    bottom: 0,
    position: 'absolute',
  },

  btn: {
    marginTop: responsiveHeight(4),
  },
});
