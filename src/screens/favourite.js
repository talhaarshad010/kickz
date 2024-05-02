import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Styles/Colors';
import {BackIcon} from '../utils/shortCuts';
import {useNavigation} from '@react-navigation/native';
import {homeJson} from '../Json/homeJson';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MyText from '../components/TextComponent';
const Favourite = () => {
  const navigation = useNavigation();
  const FavCards = ({item, index}) => {
    return (
      <View style={styles.mainCont}>
        <View style={styles.child_01}>
          <AntDesign size={20} name="hearto" color={Colors.red} />
          <Image
            style={{height: responsiveHeight(15), alignSelf: 'center'}}
            source={item.img}
            resizeMode="center"
          />
        </View>
        <View style={{marginHorizontal: responsiveWidth(2)}}>
          <MyText
            text={item.bestSeller}
            color={Colors.blue}
            fontSize={responsiveFontSize(2.3)}
          />
          <MyText
            text={item.name}
            color={Colors.black}
            fontSize={responsiveFontSize(2.5)}
            fontWeight={'500'}
          />
          <MyText
            text={item.price}
            color={Colors.black}
            fontSize={responsiveFontSize(2)}
            fontWeight={'500'}
            textStyle={{marginTop: responsiveHeight(1)}}
          />
        </View>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <View>
        <MyHeader
          ScreenName={'Favoutite'}
          leftView={BackIcon}
          onPressleft={() => {
            navigation.goBack();
          }}
          rightView={<AntDesign size={30} name="hearto" color={Colors.black} />}
        />
      </View>
      <View>
        <FlatList
          horizontal
          data={homeJson.slice(8, 10)}
          renderItem={FavCards}
        />
        <FlatList
          horizontal
          data={homeJson.slice(10, 12)}
          renderItem={FavCards}
        />
      </View>
    </WrapperContainer>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  mainCont: {
    height: responsiveHeight(30),
    backgroundColor: Colors.white,
    width: responsiveWidth(45),
    marginHorizontal: responsiveWidth(2.5),
    borderRadius: responsiveWidth(5),
    marginVertical: responsiveHeight(1),
  },
  child_01: {
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveWidth(2),
  },
});
