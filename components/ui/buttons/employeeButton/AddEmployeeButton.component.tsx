import styles from './AddEmployeeButton.style';

import { FC, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../../../models/navigation/rootStackParamList';
import PageName from '../../../../models/navigation/pageName.enum';
import { useAppDispatch } from '../../../../store/index.store';
import {
    EmployeeFormSliceState,
    employeeFormSliceActions,
} from '../../../../store/slice/employeeForm.slice';
import EmployeeFormMode from '../../../../models/employeeForm/formMode.enum';

const AddEmployeeButton: FC = () => {
    const dispatch = useAppDispatch();

    const { setFormData } = employeeFormSliceActions;

    const [isPressed, setIsPressed] = useState<boolean>(false);

    const { navigate } =
        useNavigation<HomeScreenNavigationProp['navigation']>();

    const onPressInHandler = () => {
        setIsPressed(true);
    };

    const onPressOutHandler = () => {
        setIsPressed(false);
    };

    const onPressHandler = () => {
        const state: EmployeeFormSliceState = {
            formMode: EmployeeFormMode.NEW,
            id: null,
            name: null,
            salary: null,
            department: null,
        };

        dispatch(setFormData(state));

        navigate(PageName.EMPLOYEE_FORM);
    };

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                onPress={onPressHandler}
                onPressIn={onPressInHandler}
                onPressOut={onPressOutHandler}
            >
                <Ionicons
                    name="add-circle"
                    size={30}
                    style={[
                        !isPressed && styles.icon,
                        isPressed && styles.pressedIcon,
                    ]}
                />
            </Pressable>
        </View>
    );
};

export default AddEmployeeButton;
