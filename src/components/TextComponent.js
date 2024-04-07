import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';

const MyText = ({text, textStyle, fontSize, color, fontWeight, children}) => {
  return (
    <Text
      style={[textStyle, {fontSize}, {color}, {fontWeight}]}
      allowFontScaling={false}>
      {text} {children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({});
