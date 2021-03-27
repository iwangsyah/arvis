import { StyleSheet } from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.primaryColor
  },
  containerBack: {
    padding: 20,
    paddingVertical: 12,
  },
  title: {
    fontSize: 26,
    paddingLeft: 20,
    paddingVertical: 12,
    fontFamily: Theme.fontBold
  },
  icon: {
    width: 10,
    height: 14,
    tintColor: Theme.icBar,
  }
});
