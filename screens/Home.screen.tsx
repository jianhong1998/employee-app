import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';
import BlueButton from '../components/ui/buttons/BlueButton.component';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../models/navigation/rootStackParamList';
import PageName from '../models/navigation/pageName.enum';

const HomeScreen: FC = () => {
    const { navigate } =
        useNavigation<HomeScreenNavigationProp['navigation']>();

    const addEmployeeButtonOnPressHandler = () => {
        navigate(PageName.EMPLOYEE_FORM);
    };

    return (
        <View>
            <Text>Home Screen</Text>
            <BlueButton
                title="Add Employee"
                onPressHandler={addEmployeeButtonOnPressHandler}
            />
        </View>
    );
};

export default HomeScreen;
