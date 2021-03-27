import { StyleSheet, Platform } from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 56,
        backgroundColor: Theme.bgPrimaryColor,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 0,
            height: -1
        },
        elevation: 25,
        shadowRadius: 10,
        shadowOpacity: 0.5,
        borderTopWidth: 0
    },
    label: {
        fontFamily: Theme.fontMedium,
        fontSize: 11,
        alignSelf: 'center',
        marginBottom: Platform.OS === 'ios' ? 0 : 10
    },
    image: {
        width: 25,
        height: 25
    }
});
