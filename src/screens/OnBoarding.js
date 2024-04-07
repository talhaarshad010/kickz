import React, {useEffect, useRef, useState} from 'react';
import {View, Image, ImageBackground, StyleSheet, FlatList} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import WrapperContainer from '../components/WrapperContainer';
import {slider} from '../Json/onBoarding';
import Colors from '../Styles/Colors';
import MyText from '../components/TextComponent';
import MyButton from '../components/CustomButton';

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({item}) => {
    return (
      <View style={styles.cont}>
        <View>
          <ImageBackground
            style={styles.bg1}
            source={require('../assets/Images/bgImages/bg.png')}>
            <ImageBackground
              style={styles.bg2}
              source={require('../assets/Images/bgImages/NikeBG.png')}
              resizeMode="center">
              <Image source={item.img} resizeMode="center" />
            </ImageBackground>
          </ImageBackground>
        </View>
        <View style={styles.cont2}>
          <MyText
            fontSize={responsiveFontSize(4.5)}
            fontWeight={'bold'}
            color={Colors.black}
            text={item.text1}
            textStyle={styles.text1}
          />
          <MyText
            fontSize={responsiveFontSize(2.1)}
            text={item.text2}
            textStyle={styles.text2}
          />
        </View>
      </View>
    );
  };

  const renderIndicator = index => {
    return (
      <View
        key={index}
        style={[
          styles.indicator,
          {backgroundColor: index === currentIndex ? Colors.blue : 'grey'},
          {
            width:
              index === currentIndex ? responsiveWidth(6) : responsiveWidth(2),
          },
        ]}></View>
    );
  };

  const buttonText = () => {
    if (currentIndex === slider.length - 3) {
      return 'Get Started';
    } else {
      return 'Next';
    }
  };

  const handleButtonPress = () => {
    if (currentIndex === slider.length - 1) {
      navigation.navigate('LogIn');
    } else {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <WrapperContainer style={{backgroundColor: Colors.white}}>
      <View>
        <FlatList
          ref={flatListRef}
          data={slider}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          onScroll={event => {
            const {contentOffset, layoutMeasurement} = event.nativeEvent;
            const index = Math.round(contentOffset.x / layoutMeasurement.width);
            setCurrentIndex(index);
          }}
        />
      </View>
      <View style={styles.indicatorMainCont}>
        <View style={styles.indicatorContainer}>
          {slider.map((_, index) => renderIndicator(index))}
        </View>
        <View style={styles.btn}>
          <MyButton
            onPress={handleButtonPress}
            text={buttonText()}
            Color={Colors.white}
            fontWeight={'bold'}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  cont: {
    height: responsiveHeight(80),
    paddingTop: responsiveHeight(17),
    width: responsiveWidth(100),
  },
  bg1: {
    backgroundColor: Colors.white,
    height: responsiveHeight(40),
    marginBottom: responsiveHeight(2),
  },
  bg2: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont2: {
    marginHorizontal: responsiveWidth(5),
  },
  text1: {
    width: responsiveWidth(65),
  },
  text2: {
    width: responsiveWidth(70),
    color: Colors.grayInput,
    marginTop: responsiveHeight(1),
  },
  indicator: {
    height: responsiveWidth(2),
    width: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    backgroundColor: Colors.blue,
    marginHorizontal: responsiveWidth(0.5),
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  indicatorMainCont: {
    position: 'absolute',
    bottom: responsiveHeight(5),
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    height: responsiveHeight(8),
    width: responsiveWidth(40),
    marginLeft: responsiveWidth(40),
  },
});
