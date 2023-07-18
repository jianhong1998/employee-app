import styles from './UserInput.style';

import { FC } from 'react';
import { TextInput } from 'react-native';

interface UserInputProps {
    value: string;
    autoFocus?: boolean;
    onChangeHanlder: (input: string) => void;
}

const UserInput: FC<UserInputProps> = ({
    value,
    onChangeHanlder,
    autoFocus,
}) => {
    return (
        <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={onChangeHanlder}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={autoFocus}
        />
    );
};

export default UserInput;
