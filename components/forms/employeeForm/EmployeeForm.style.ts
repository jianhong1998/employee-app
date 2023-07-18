import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: 10,
    },
    label: {
        fontSize: 18,
        color: colorCode.lightBlue['700'],
        fontWeight: '700',
    },
    submitButtonContainer: {
        marginTop: 30,
    },
    dropdownContainer: {
        zIndex: 1,
    },
});
