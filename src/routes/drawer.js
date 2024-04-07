import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, Text, View} from 'react-native';

import Profile from '../screens/profile';
import Dashboard from '../screens/Dashboard';
import Cart from '../screens/cart';
import Favourite from '../screens/favourite';
import Notification from '../screens/notification';
import Orders from '../screens/Orders';
import CustomDrawerContent from '../components/CustomDrawerContent';
import BottomTab from './bottomTab';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: Dimensions.width >= 768 ? 'permanent' : 'front',
        drawerItemStyle: {display: 'none'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
