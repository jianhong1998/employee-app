import { StyleSheet } from 'react-native';
import colorCode from '../../../../constants/colorCode';

export default StyleSheet.create({
    icon: {
        color: colorCode.blue['500'],
    },
    pressedIcon: {
        color: colorCode.blue['700'],
    },
    buttonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
