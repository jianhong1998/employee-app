import { StyleSheet } from 'react-native';
import colorCode from '../../../constants/colorCode';

export default StyleSheet.create({
    text: {
        color: colorCode.lightBlue['800'],
        fontSize: 20,
    },
    boldText: {
        fontWeight: '700',
    },
    componentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colorCode.white,
        padding: 20,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: colorCode.lightBlue['800'],
        borderWidth: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonHolder: {
        marginHorizontal: 5,
    },
});
