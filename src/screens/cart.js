import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';
import WrapperContainer from '../components/WrapperContainer';
import {homeJson} from '../Json/homeJson';
import MyText from '../components/TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import MyButton from '../components/CustomButton';
const Cart = () => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(1);
  console.log(counter);
  const cartItems = ({item, index}) => {
    return (
      <View style={styles.cartItem}>
        <View
          style={[
            styles.cartItemChild,
            {
              width: responsiveWidth(25),
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Image
            style={{height: responsiveHeight(7)}}
            source={item.img}
            resizeMode="center"
          />
        </View>
        {/* ===================================================================================== */}
        <View
          style={[
            {
              width: responsiveWidth(50),
              flexDirection: 'column',
              left: responsiveWidth(5),
            },
            styles.cartItemChild,
          ]}>
          <MyText
            text={item.name}
            color={Colors.black}
            fontSize={responsiveFontSize(2.3)}
            fontWeight={'bold'}
          />
          <MyText
            text={item.price}
            color={Colors.black}
            fontSize={responsiveFontSize(1.7)}
            fontWeight={'bold'}
          />
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}>
            <TouchableOpacity
              onPress={() => [
                setCounter(
                  counter > 0
                    ? counter - 1
                    : counter === 0
                    ? !counter - 1
                    : setCounter(0),
                ),
              ]}
              style={styles.counterBtn}>
              <MyText
                color={Colors.white}
                fontSize={responsiveFontSize(2.5)}
                text={'-'}
              />
            </TouchableOpacity>
            <View style={[styles.counterBtn, {backgroundColor: Colors.white}]}>
              <MyText text={counter} />
            </View>
            <TouchableOpacity
              onPress={() => {
                setCounter(counter + 1);
              }}
              style={styles.counterBtn}>
              <MyText
                color={Colors.white}
                fontSize={responsiveFontSize(2.5)}
                text={'+'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cont_03}>
          <TouchableOpacity>
            <AntDesign name="delete" size={25} color={Colors.black} />
          </TouchableOpacity>
          <MyText text={item.ES} color={Colors.black} fontWeight={'500'} />
        </View>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <MyHeader
        ScreenName={'Cart'}
        leftView={BackIcon}
        onPressleft={() => {
          navigation.goBack();
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 0.7}}>
          <FlatList data={homeJson} renderItem={cartItems} />
        </View>
        <View
          style={{
            flex: 0.28,
            backgroundColor: Colors.white,
            borderTopLeftRadius: responsiveWidth(10),
            borderTopRightRadius: responsiveWidth(10),
            paddingHorizontal: responsiveWidth(5),
            justifyContent: 'space-between',
          }}>
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
                navigation.navigate('CheckOut');
              }}
              text={'Checkout'}
              color={Colors.white}
            />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    height: responsiveHeight(15),
    width: responsiveWidth(95),
    marginHorizontal: responsiveWidth(2.5),
    borderRadius: responsiveWidth(10),
    backgroundColor: Colors.white,
    marginBottom: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtn: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    marginTop: responsiveHeight(1),
  },
  cont_03: {
    height: responsiveHeight(15),
    width: responsiveWidth(20),
    paddingVertical: responsiveHeight(3),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
});
