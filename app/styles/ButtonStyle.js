import { StyleSheet } from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonTransparent: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 3,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Theme.txtWhite
  }
});
