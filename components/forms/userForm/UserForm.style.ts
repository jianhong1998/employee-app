import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    container: {
        width: '80%',
        gap: 10,
    },
    inputContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        color: colorCode.lightBlue['700'],
        fontWeight: '700',
    },
    formModeSwitcherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    departmentDropdown: {
        zIndex: 1,
    },
});
