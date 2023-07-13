import styles from './BlueButton.style';

import { FC, useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import colorCode from '../../../constants/colorCode';
import { HomeScreenNavigationProp } from '../../../models/navigation/rootStackParamList';

interface BlueButtonProps {
    title: string;
    onPressHandler: () => void;
}

const BlueButton: FC<BlueButtonProps> = ({ title, onPressHandler }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const onPressInHandler = () => {
        setIsPressed(true);
    };

    const onPressOutHandler = () => {
        setIsPressed(false);
    };

    return (
        <Pressable
            style={[
                styles.button,
                isPressed && styles.pressedButton,
                !isPressed && styles.unPressedButton,
            ]}
            onPress={onPressHandler}
            onPressIn={onPressInHandler}
            onPressOut={onPressOutHandler}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

export default BlueButton;
