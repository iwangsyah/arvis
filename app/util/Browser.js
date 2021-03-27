import { Linking, Alert } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Theme } from '../styles';

export default class Browser {
  static async open(url) {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: Theme.primaryColor,
          preferredControlTintColor: Theme.icBar,
          // Android Properties
          showTitle: true,
          toolbarColor: Theme.primaryColor,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          }
        });
      } else Linking.openURL(url);
    } catch (error) {
      Alert.alert(error.message);
    }
  }
}
