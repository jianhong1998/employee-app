import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../models/navigation/rootStackParamList';

const HomeScreen: FC = () => {
    const { navigate } =
        useNavigation<HomeScreenNavigationProp['navigation']>();

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}
        ></View>
    );
};

export default HomeScreen;
