import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    button: {
        borderColor: colorCode.lightBlue['700'],
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unPressedButton: {
        backgroundColor: colorCode.white,
    },
    pressedButton: {
        backgroundColor: colorCode.blue['200'],
    },
    title: {
        color: colorCode.blue[800],
        fontWeight: '700',
    },
    buttonContainer: {
        alignSelf: 'center',
    },
});
