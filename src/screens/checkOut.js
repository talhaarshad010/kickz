import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyHeader from '../components/Header';
import {BackIcon, searchIcon} from '../utils/shortCuts';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../components/WrapperContainer';
import MyText from '../components/TextComponent';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../Styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyTextInput from '../components/TextInputComponent';
import MyButton from '../components/CustomButton';
const CheckOut = () => {
  const navigation = useNavigation();
  const [isDialouge, setisDialouge] = useState(false);
  return (
    <WrapperContainer>
      <MyHeader
        ScreenName={'CheckOut'}
        leftView={BackIcon}
        onPressleft={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.main}>
        <MyText
          color={Colors.black}
          fontSize={responsiveFontSize(2)}
          text={'Contact Information'}
          fontWeight={'500'}
        />
        <View style={styles.cont_01}>
          <View style={styles.cont_01_child_01}>
            <Fontisto name="email" size={30} color={Colors.black} />
            <View style={styles.cont_01_child_02}>
              <MyText
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                text={'rumenhussen@gmail.com'}
              />
              <MyText text={'Email'} />
            </View>
          </View>
          <AntDesign name="edit" size={30} color={Colors.grayInput} />
        </View>
        <View style={styles.cont_01}>
          <View style={styles.cont_01_child_01}>
            <AntDesign name="phone" size={30} color={Colors.black} />
            <View style={styles.cont_01_child_02}>
              <MyText
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                text={'+88-692 -764-269'}
              />
              <MyText text={'Phone'} />
            </View>
          </View>
          <AntDesign name="edit" size={30} color={Colors.grayInput} />
        </View>
        <MyText
          textStyle={{top: responsiveHeight(3)}}
          color={Colors.black}
          fontSize={responsiveFontSize(2)}
          text={'Address'}
          fontWeight={'500'}
        />
        <MyTextInput placeholder={'Enter your Address'} />
      </View>
      <View style={styles.payment_Section}>
        <View>
          <View style={styles.checkoutSection}>
            <MyText text={'Subtotal'} fontSize={responsiveFontSize(2)} />
            <MyText
              text={'$2323.00'}
              color={Colors.black}
              fontSize={responsiveFontSize(2)}
              fontWeight={'500'}
            />
          </View>
          <View style={styles.checkoutSection}>
            <MyText text={'Shopping'} fontSize={responsiveFontSize(2)} />
            <MyText
              text={'$40.00'}
              color={Colors.black}
              fontSize={responsiveFontSize(2)}
              fontWeight={'500'}
            />
          </View>
          <View style={styles.checkoutSection}>
            <MyText text={'Total Cost'} fontSize={responsiveFontSize(2)} />
            <MyText
              text={'$1690.00'}
              color={Colors.black}
              fontSize={responsiveFontSize(2)}
              fontWeight={'500'}
            />
          </View>
        </View>
        <View>
          <MyButton
            onPress={() => {
              setisDialouge(true);
            }}
            text={'Payment'}
            color={Colors.white}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDialouge}
        onRequestClose={() => {
          setisDialouge(!isDialouge);
        }}>
        <View style={styles.ModaView}>
          <View style={styles.ModalBox}>
            <View style={{marginTop: responsiveHeight(2)}}>
              <Image
                source={require('../assets/Images/flowers.png')}
                resizeMode="contain"
              />
            </View>
            <MyText
              text={'Your Payment Is Successful'}
              color={Colors.black}
              fontWeight={'500'}
              fontSize={responsiveFontSize(3)}
              textStyle={{textAlign: 'center'}}
            />
            <View style={styles.modalBtn}>
              <MyButton
                onPress={() => {
                  setisDialouge(!isDialouge);
                  navigation.navigate('Home');
                }}
                text={'Back To Shopping'}
                color={Colors.white}
              />
            </View>
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: responsiveWidth(5),
    backgroundColor: Colors.white,
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  cont_01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
  cont_01_child_01: {
    flexDirection: 'row',
  },
  cont_01_child_02: {
    marginLeft: responsiveWidth(3),
  },
  checkoutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  payment_Section: {
    flex: 0.28,
    width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
    padding: responsiveWidth(5),
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  ModaView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalBox: {
    width: responsiveWidth(70),
    backgroundColor: Colors.white,
    borderRadius: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtn: {
    width: responsiveWidth(60),
    marginVertical: responsiveHeight(2),
  },
});
