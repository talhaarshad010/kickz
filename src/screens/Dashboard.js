import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {CartIcon, MenuIcon, searchIcon} from '../utils/shortCuts';
import MyTextInput from '../components/TextInputComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {brangLogos} from '../Json/brands';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Colors from '../Styles/Colors';
import {homeJson} from '../Json/homeJson';
import MyText from '../components/TextComponent';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const renderItem = ({item, index}) => {
    const isSelected = index === selectedItemIndex;
    return (
      <TouchableOpacity
        style={[styles.logoCont, isSelected && styles.selectedLogoCont]}
        onPress={() => setSelectedItemIndex(index)}>
        <Image
          style={[styles.logo, isSelected && styles.selectedLogo]}
          resizeMode="center"
          source={item.img}
        />
      </TouchableOpacity>
    );
  };

  const shoeItems = ({item, index}) => {
    return (
      <View style={styles.shoeItemCont}>
        <View style={styles.shoeChildCont1}>
          <Image source={item.img} resizeMode="center" style={styles.shoeImg} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details');
          }}
          style={styles.shoeChildCont2}>
          <View
            style={{
              paddingHorizontal: responsiveWidth(1.5),
              width: responsiveWidth(36),
            }}>
            <MyText
              color={Colors.blue}
              fontSize={responsiveFontSize(2)}
              text={item.bestSeller}
              textStyle={styles.bestSeller}
            />
            <MyText
              color={Colors.black}
              fontWeight={'bold'}
              fontSize={responsiveFontSize(2.5)}
              text={item.name}
              textStyle={styles.name}
            />
            <MyText
              color={Colors.black}
              fontWeight={'500'}
              fontSize={responsiveFontSize(2)}
              text={item.price}
              textStyle={styles.price}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.plusBtn}>
              <MyText
                text={'+'}
                color={Colors.white}
                fontSize={responsiveFontSize(3.5)}
                textStyle={styles.addToCartBtn}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <WrapperContainer>
        <View style={{marginBottom: responsiveHeight(3)}}>
          <MyHeader
            onPressleft={() => {
              navigation.openDrawer();
            }}
            ScreenName={'Home'}
            leftView={MenuIcon}
            rightView={CartIcon}
          />
          <View style={styles.searchComp}>
            <MyTextInput
              placeholder={'Looking for shoes'}
              LeftView={searchIcon}
            />
          </View>

          <View style={styles.mainLogoCont}>
            <FlatList
              horizontal
              data={brangLogos}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.bar}>
            <MyText
              text={'Popular Shoes'}
              fontWeight={'bold'}
              color={Colors.black}
              fontSize={responsiveFontSize(2.5)}
              textStyle={styles.popularShoes}
            />
            <MyText
              color={Colors.blue}
              fontSize={responsiveFontSize(2)}
              text={'See All'}
              textStyle={styles.bestSeller}
            />
          </View>
          <View>
            <FlatList
              horizontal
              data={homeJson.slice(0, 2)}
              renderItem={shoeItems}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.bar}>
            <MyText
              text={'New Arrivals'}
              fontWeight={'bold'}
              color={Colors.black}
              fontSize={responsiveFontSize(2.5)}
              textStyle={styles.popularShoes}
            />
            <MyText
              color={Colors.blue}
              fontSize={responsiveFontSize(2)}
              text={'See All'}
              textStyle={styles.bestSeller}
            />
          </View>
          <View style={styles.newArrivals}>
            <View>
              <MyText
                text={'Best Choice'}
                color={Colors.blue}
                fontSize={responsiveFontSize(2)}
              />
              <MyText
                text={'Nike Air Jordan'}
                color={Colors.black}
                fontSize={responsiveFontSize(3)}
                fontWeight={'800'}
              />
              <MyText
                text={'$849.69'}
                color={Colors.black}
                fontSize={responsiveFontSize(2)}
                fontWeight={'500'}
              />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{marginTop: responsiveHeight(25)}}
                source={require('../assets/Images/Shoes/shoe_06.png')}
                resizeMode="center"
              />
            </View>
          </View>
        </View>
      </WrapperContainer>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  searchComp: {
    marginHorizontal: responsiveWidth(5),
  },
  mainLogoCont: {
    marginVertical: responsiveHeight(3),
  },
  logoCont: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    backgroundColor: Colors.white,
    borderRadius: responsiveWidth(10),
    marginHorizontal: responsiveWidth(1),
  },
  selectedLogoCont: {
    backgroundColor: Colors.blue,
  },
  logo: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
  selectedLogo: {
    tintColor: Colors.white,
  },
  shoeItemCont: {
    height: responsiveHeight(33),
    width: responsiveWidth(45),
    marginHorizontal: responsiveWidth(2.5),
    borderRadius: responsiveWidth(5),
    backgroundColor: Colors.white,
  },
  shoeImg: {height: responsiveHeight(15)},
  shoeChildCont1: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(5),
  },

  shoeChildCont2: {
    flex: 0.4,
    flexDirection: 'row',
    borderRadius: responsiveWidth(5),
  },
  name: {
    // fontSize: responsiveFontSize(2.7),
    // color: Colors.black,
    // fontWeight: '500',
    marginBottom: responsiveHeight(1),
  },
  // price: {
  //   fontSize: responsiveFontSize(2),
  //   color: Colors.black,
  // },
  // addToCartBtn: {
  //   fontSize: responsiveFontSize(3),
  //   color: Colors.white,
  // },
  plusBtn: {
    height: responsiveHeight(5),
    backgroundColor: Colors.blue,
    bottom: 0,
    marginTop: responsiveHeight(8.3),
    borderBottomRightRadius: responsiveWidth(5),
    borderTopLeftRadius: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
  newArrivals: {
    height: responsiveHeight(17),
    borderRadius: responsiveWidth(5),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(4),
  },
});
