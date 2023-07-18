import styles from './GreenButton.style';

import { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface GreenButtonProps {
    title: string;
    onPressHandler: () => void;
}

const GreenButton: FC<GreenButtonProps> = ({ title, onPressHandler }) => {
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

export default GreenButton;
