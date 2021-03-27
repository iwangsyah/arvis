import { StyleSheet, StatusBar, Platform } from 'react-native';
import { IphoneXHelper } from '../util';
import { Theme } from '.';

const StatusBarHeight = IphoneXHelper.getStatusBarHeight();

export default StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios'
        ? IphoneXHelper.isIphoneX()
          ? StatusBarHeight + 10
          : StatusBarHeight
        : StatusBar.currentHeight,
    backgroundColor: Theme.primaryColor,
    zIndex: 99,
  },
});
