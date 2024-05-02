import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon, CartIcon} from '../utils/shortCuts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Styles/Colors';
import MyText from '../components/TextComponent';
import {homeJson} from '../Json/homeJson';
import MyButton from '../components/CustomButton';
const Details = ({navigation, route}) => {
  const {data} = route.params;
  const [ShoeColor, setShoeColor] = useState(null);
  const [ShoeSize, setShoeSize] = useState(data.sizes[0]);

  const ShoeComponent = ({shoe}) => {
    const renderItem = ({item}) => <Image source={item.c1} />;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setShoeColor(shoe);
          }}>
          <Image source={shoe.c1} style={styles.shoeImage} />
        </TouchableOpacity>
        <FlatList
          data={shoe.shoeColors}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    );
  };

  const ShoeSizes = ({shoe}) => {
    const renderItem = ({item}) => <MyText text={item.size} />;
    const isSelected = shoe === ShoeSize;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setShoeSize(shoe);
          }}
          style={[
            styles.shoeSize,
            {backgroundColor: isSelected ? Colors.blue : Colors.lightGray},
          ]}>
          <MyText
            color={isSelected ? Colors.white : Colors.black}
            fontWeight={'500'}
            text={shoe.size}
          />
        </TouchableOpacity>
        <FlatList
          data={shoe.shoeColors}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    );
  };
  return (
    <WrapperContainer>
      <MyHeader
        ScreenName={'Details'}
        leftView={BackIcon}
        rightView={CartIcon}
        onPressleft={() => {
          navigation.goBack();
        }}
        onPressright={() => {
          navigation.navigate('Cart');
        }}
      />
      <View
        style={{
          flex: 0.3,
          alignItems: 'center',
        }}>
        <Image
          style={{height: responsiveHeight(25)}}
          resizeMode="center"
          source={data.img}
        />
      </View>
      <View style={styles.cont_02}>
        <View>
          <MyText
            text={data.bestSeller}
            color={Colors.blue}
            fontSize={responsiveFontSize(2.5)}
          />
          <MyText
            text={data.name}
            color={Colors.black}
            fontWeight={'bold'}
            fontSize={responsiveFontSize(3)}
          />
          <MyText
            text={data.price}
            color={Colors.black}
            fontWeight={'bold'}
            fontSize={responsiveFontSize(2.5)}
          />
          <MyText
            text={data.disc}
            fontSize={responsiveFontSize(1.8)}
            textStyle={{
              paddingRight: responsiveWidth(5),
              marginVertical: responsiveHeight(1),
            }}
          />
          <MyText
            text={'Gallery'}
            color={Colors.black}
            fontSize={responsiveFontSize(3)}
            fontWeight={'500'}
            textStyle={{
              marginBottom: responsiveHeight(1),
            }}
          />
          <View
            style={{
              width: responsiveWidth(45),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FlatList
              horizontal
              data={data.shoeColors}
              renderItem={({item}) => <ShoeComponent shoe={item} />}
            />
          </View>
          <MyText
            text={'Size'}
            color={Colors.black}
            fontSize={responsiveFontSize(3)}
            fontWeight={'500'}
            textStyle={{
              marginBottom: responsiveHeight(1),
            }}
          />
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data.sizes}
              renderItem={({item}) => <ShoeSizes shoe={item} />}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <MyText
              text={'Price'}
              color={Colors.grayInput}
              fontSize={responsiveFontSize(2)}
            />
            <MyText
              text={data.price}
              color={Colors.black}
              fontWeight={'500'}
              fontSize={responsiveFontSize(3)}
            />
          </View>
          <View style={{width: responsiveWidth(50)}}>
            <MyButton
              onPress={() => {
                navigation.navigate('Cart');
              }}
              text={'Add To Cart'}
              color={Colors.white}
              fontWeight={'500'}
            />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Details;

const styles = StyleSheet.create({
  cont_02: {
    flex: 0.7,
    backgroundColor: Colors.white,
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveWidth(6),
    justifyContent: 'space-between',
  },
  shoeImage: {
    width: responsiveWidth(13),
    height: responsiveHeight(7),
    resizeMode: 'contain',
    backgroundColor: Colors.lightGray,
    borderRadius: responsiveWidth(3),
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoeSize: {
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    resizeMode: 'contain',
    backgroundColor: Colors.lightGray,
    borderRadius: responsiveWidth(10),
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
