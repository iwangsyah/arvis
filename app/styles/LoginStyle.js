import {StyleSheet} from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  title: {
    fontSize: 40,
    fontFamily: Theme.fontBold,
    marginBottom: 16,
    marginTop: 50,
    textAlign: 'center',
    color: Theme.txtPrimaryColor
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 32,
    borderRadius: 8,
    padding: 16
  },
  text: {
    color: Theme.txtPrimaryColor,
    marginBottom: 5
  },
  txtColor: {
    color: Theme.buttonColor,
    fontFamily: Theme.fontBold
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.bgPrimaryColor,
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 40
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 20
  },
  buttonDelete: {
    backgroundColor: 'grey',
    paddingHorizontal: 5,
    borderRadius: 5,
    paddingTop: 2
  }
});
