import styles from './BlueButton.style';

import { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

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
        <View style={styles.buttonContainer}>
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
        </View>
    );
};

export default BlueButton;
