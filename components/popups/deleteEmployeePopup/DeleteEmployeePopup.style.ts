import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    popupContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    },
    content: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colorCode.red['700'],
    },
});
