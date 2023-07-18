import { StyleSheet } from 'react-native';
import colorCode from '../../../../constants/colorCode';

export default StyleSheet.create({
    container: {
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },
    registerAnchor: {
        color: colorCode.lightBlue['700'],
        textDecorationLine: 'underline',
    },
});
