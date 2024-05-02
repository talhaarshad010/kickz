import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Dashboard from '../screens/Dashboard';
import MyDrawer from './drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/details';
import CheckOut from '../screens/checkOut';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
    </Stack.Navigator>
  );
};
export default StackRoute;
