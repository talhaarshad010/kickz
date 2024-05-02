import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../components/WrapperContainer';
import MyHeader from '../components/Header';
import {BackIcon} from '../utils/shortCuts';
import MyText from '../components/TextComponent';
import Colors from '../Styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Slots from '../components/slots';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Switch from '../components/switch';
// const AccSetting = () => {
//   const navigation = useNavigation();
//   return (
//     <WrapperContainer>
//       <View>
//         <MyHeader
//           ScreenName={'Account & Settings'}
//           leftView={BackIcon}
//           onPressleft={() => {
//             navigation.goBack();
//           }}
//         />
//       </View>
//       <MyText
//         text={'Account'}
//         color={Colors.black}
//         fontSize={responsiveFontSize(2.5)}
//         fontWeight={'500'}
//         textStyle={{marginLeft: responsiveWidth(5)}}
//       />
//       <View>
//         <Slots
//           img={
//             <Ionicons
//               name="notifications-outline"
//               size={30}
//               color={Colors.black}
//             />
//           }
//           slotName={'Notification'}
//         />
//         <Slots
//           img={
//             <MaterialCommunityIcons
//               name="cart-outline"
//               size={30}
//               color={Colors.black}
//             />
//           }
//           slotName={'Shipping Address'}
//         />
//         <Slots
//           img={
//             <Ionicons name="wallet-outline" size={30} color={Colors.black} />
//           }
//           slotName={'Payment Info'}
//         />
//         <Slots
//           img={<AntDesign name="delete" size={25} color={Colors.black} />}
//           slotName={'Delete Account'}
//         />
//         <MyText
//           text={'App Settings'}
//           color={Colors.black}
//           fontSize={responsiveFontSize(2.5)}
//           fontWeight={'500'}
//           textStyle={{
//             marginLeft: responsiveWidth(5),
//             marginTop: responsiveHeight(5),
//           }}
//         />
//         <Switch switchName={'Puch Notifications'} />
//       </View>
//     </WrapperContainer>
//   );
// };

// export default AccSetting;

// const styles = StyleSheet.create({});
const AccSetting = () => {
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <View>
        <MyHeader
          ScreenName={'Account & Settings'}
          leftView={BackIcon}
          onPressleft={() => {
            navigation.goBack();
          }}
        />
      </View>
      <MyText
        text={'Account'}
        color={Colors.black}
        fontSize={responsiveFontSize(2.5)}
        fontWeight={'500'}
        textStyle={{marginLeft: responsiveWidth(5)}}
      />
      <View>
        <Slots
          img={
            <Ionicons
              name="notifications-outline"
              size={30}
              color={Colors.black}
            />
          }
          slotName={'Notification'}
        />
        <Slots
          img={
            <MaterialCommunityIcons
              name="cart-outline"
              size={30}
              color={Colors.black}
            />
          }
          slotName={'Shipping Address'}
        />
        <Slots
          img={
            <Ionicons name="wallet-outline" size={30} color={Colors.black} />
          }
          slotName={'Payment Info'}
        />
        <Slots
          img={<AntDesign name="delete" size={25} color={Colors.black} />}
          slotName={'Delete Account'}
        />
        <MyText
          text={'App Settings'}
          color={Colors.black}
          fontSize={responsiveFontSize(2.5)}
          fontWeight={'500'}
          textStyle={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(5),
          }}
        />

        <Switch switchName={'Eneble Face ID For Log In'} />
        <Switch switchName={'Eneble Push Notifications'} />
        <Switch switchName={'Eneble Location Services'} />
        <Switch switchName={'Dark Mode'} />
      </View>
    </WrapperContainer>
  );
};

export default AccSetting;

const styles = StyleSheet.create({});
