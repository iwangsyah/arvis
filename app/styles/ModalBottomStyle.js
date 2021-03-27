import { StyleSheet, Dimensions } from 'react-native';
import Theme from './Theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBox: {
    width,
    height: 'auto',
    backgroundColor: Theme.bgPrimaryColor,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    padding: 20,

    paddingBottom: 40,
    bottom: 0,
  },
  title: {
    fontSize: 16,
    fontFamily: Theme.fontBold,
    marginBottom: 16
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  }
});
