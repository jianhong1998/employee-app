import { StyleSheet } from 'react-native';
import colorCode from '../../constants/colorCode';

export default StyleSheet.create({
    textInput: {
        backgroundColor: colorCode.white,
        borderWidth: 2,
        borderColor: colorCode.lightBlue[600],
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        width: '100%',
        marginBottom: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    label: {
        fontSize: 18,
        color: colorCode.lightBlue['700'],
        fontWeight: '700',
    },
    submitButtonContainer: {
        marginTop: 100,
    },
});
