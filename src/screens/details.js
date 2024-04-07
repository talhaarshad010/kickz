import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Details
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
