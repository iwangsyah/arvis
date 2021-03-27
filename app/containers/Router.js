import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from 'react-navigation-stack';
import * as Screen from '../screens';
import Images from '../assets/images';
import {Theme, BottomTabBar} from '../styles';
import {Navigation} from '../configs';
import {NavigationService, IphoneXHelper} from '../util';

const HomeNavigation = createStackNavigator(
  {
    [Navigation.HOME]: Screen.Home,
    [Navigation.PRODUCTDETAIL]: Screen.ProductDetail,
    [Navigation.PRODUCTORDER]: Screen.ProductOrder,
  },
  {
    headerMode: Navigation.HOME,
    defaultNavigationOptions: ({navigation}) => ({
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }),
    navigationOptions: ({navigation}) => ({
      headerVisible: false,
      tabBarVisible: navigation.state.index <= 0,
    }),
  },
);

// const ProfileNavigation = createStackNavigator(
//   {
//     // [Navigation.PROFILE]: Screen.Profil,
//     // [Navigation.FAQ]: Screen.FAQ,
//     // [Navigation.ABOUTUS]: Screen.AboutUs,
//     // [Navigation.CONTACTUS]: Screen.ContactUs,
//   },
//   {
//     headerMode: Navigation.PROFILE,
//     defaultNavigationOptions: ({navigation}) => ({
//       headerShown: false,
//       gestureEnabled: true,
//       gestureDirection: 'horizontal',
//       cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//     }),
//     navigationOptions: ({navigation}) => ({
//       headerVisible: false,
//       tabBarVisible: navigation.state.index <= 0,
//     }),
//   },
// );

const BottomNavigationHome = createBottomTabNavigator(
  {
    [Navigation.HOME]: {
      screen: HomeNavigation,
    },
    // [Navigation.COURSE]: {
    //   screen: CourseNavigation,
    // },
    // [Navigation.PROFILE]: {
    //   screen: ProfileNavigation,
    // },
  },
  {
    tabBarComponent: ({navigation}) => (
      <SafeAreaView style={{backgroundColor: Theme.bgPrimaryColor, height: IphoneXHelper.isIphoneX() ? 76 : 56}}>
        <View style={BottomTabBar.container}>
          <Ripple
            style={{
              flex: 1,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            rippleCentered
            onPress={() => navigation.navigate(Navigation.HOME)}>
            <Image
              style={[BottomTabBar.image, {
                tintColor:
                  navigation.state.index == 0
                    ? Theme.primaryColor
                    : Theme.lineColor,
              }]}
              source={Images.icHome}
            />
            <Text
              style={{
                fontFamily: Theme.fontBold,
                color: navigation.state.index == 0
                  ? Theme.primaryColor
                  : Theme.lineColor,
              }}>
              Home
            </Text>
          </Ripple>
          <Ripple
            style={{
              flex: 1,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            rippleCentered
            onPress={() => NavigationService.navigate(Navigation.COURSE)}>
            <Image
              style={[BottomTabBar.image, {
                tintColor:
                  navigation.state.index == 1
                    ? Theme.primaryColor
                    : Theme.lineColor,
              }]}
              source={Images.icCart}
            />
            <Text
              style={{
                fontFamily: Theme.fontBold,
                color: navigation.state.index == 1
                  ? Theme.primaryColor
                  : Theme.lineColor,
              }}>
              Cart
            </Text>
          </Ripple>
          <Ripple
            style={{
              flex: 1,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            rippleCentered
            onPress={() => NavigationService.navigate(Navigation.PROFILE)}>
            <Image
              style={[BottomTabBar.image, {
                tintColor:
                  navigation.state.index == 2
                    ? Theme.primaryColor
                    : Theme.lineColor,
              }]}
              source={Images.icProfile}
            />
            <Text
              style={{
                fontFamily: Theme.fontBold,
                color: navigation.state.index == 2
                  ? Theme.primaryColor
                  : Theme.lineColor,
              }}>
              Profile
            </Text>
          </Ripple>
        </View>
      </SafeAreaView>
    ),
    initialRouteName: Navigation.HOME,
    tabBarOptions: {
      activeTintColor: Theme.primaryColor,
      inactiveTintColor: Theme.teritaryColor,
      style: BottomTabBar.container,
      labelStyle: BottomTabBar.label,
    },
    transitionConfig: () => ({
      // screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  },
);

const AppStack = createStackNavigator(
  {
    [Navigation.HOME]: BottomNavigationHome,
    // [Navigation.PROFILE]: ProfileNavigation
  },
  {
    headerMode: Navigation.HOME,
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    [Navigation.LOGIN]: {
      screen: Screen.Login,
    },
    [Navigation.REGISTER]: {
      screen: Screen.Register,
    },
  },
  {
    headerMode: Navigation.LOGIN,
    defaultNavigationOptions: ({navigation}) => ({
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }),
    navigationOptions: ({navigation}) => ({
      headerVisible: false,
      tabBarVisible: navigation.state.index <= 0,
    }),
  },
);

const Routes = createSwitchNavigator(
  {
    [Navigation.AUTHLOADING]: Screen.AuthLoadingScreen,
    [Navigation.AUTH]: AuthStack,
    [Navigation.APP]: AppStack,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
