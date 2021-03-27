import { StyleSheet } from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bgPrimaryColor
  },
  content: {
    backgroundColor: Theme.bgPrimaryColor,
    marginVertical: 8,
    padding: 16
  },
  subText: {
    fontSize: 18,
    color: Theme.txtPrimaryColor,
    fontFamily: Theme.fontMedium,
    marginTop: 16,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: Theme.fontBold,
    textAlign: 'center',
    marginBottom: 16
  },
  textDescription: {
    fontSize: 16,
    fontFamily: Theme.fontRegular,
    color: Theme.txtPrimaryColor,
    textAlign: 'center',
    marginVertical: 16,
    lineHeight: 28
  },
  shadow: {
    shadowColor: 'rgba(119, 117, 117, 0.8)',
    shadowOffset: {
      width: 0,
      height: 3.5
    },
    elevation: 3.5,
    shadowRadius: 4,
    shadowOpacity: 0.5
  },
  flatList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});
