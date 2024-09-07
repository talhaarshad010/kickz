import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Logo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}>
      <Image
        style={{height: responsiveHeight(100), width: responsiveWidth(100)}}
        source={require('../assets/Images/siyah.png')}
        // resizeMode="contain"
        resizeMode="center"
        tintColor={Colors.white}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
