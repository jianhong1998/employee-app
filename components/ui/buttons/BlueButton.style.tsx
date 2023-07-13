import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unPressedButton: {
        backgroundColor: colorCode.blue['500'],
    },
    pressedButton: {
        backgroundColor: colorCode.blue['600'],
    },
    title: {
        color: colorCode.blue[800],
        fontWeight: '700',
    },
});
