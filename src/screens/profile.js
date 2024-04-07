import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.openDrawer();
        }}>
        Profile
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
