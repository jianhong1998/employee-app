import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colorCode from '../../../../constants/colorCode';
import Employee from '../../../../models/employee.model';
import EmployeeFormMode from '../../../../models/employeeForm/formMode.enum';
import PageName from '../../../../models/navigation/pageName.enum';
import { HomeScreenNavigationProp } from '../../../../models/navigation/rootStackParamList';
import { useAppDispatch } from '../../../../store/index.store';
import { employeeFormSliceActions } from '../../../../store/slice/employeeForm.slice';

interface EditEmployeeButtonProps {
    employee: Employee;
}

const EditEmployeeButton: FC<EditEmployeeButtonProps> = ({ employee }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const { navigate } =
        useNavigation<HomeScreenNavigationProp['navigation']>();

    const dispatch = useAppDispatch();

    const { setFormData } = employeeFormSliceActions;

    const onPressInHandler = () => {
        setIsPressed(true);
    };

    const onPressOutHandler = () => {
        setIsPressed(false);
    };

    const onPressHandler = () => {
        dispatch(
            setFormData({
                formMode: EmployeeFormMode.EDIT,
                id: employee.id,
                name: employee.name,
                department: employee.department,
                salary: employee.salary.toString(),
            }),
        );

        navigate(PageName.EMPLOYEE_FORM);
    };

    return (
        <Pressable
            onPressIn={onPressInHandler}
            onPressOut={onPressOutHandler}
            onPress={onPressHandler}
        >
            <Feather
                name="edit"
                size={24}
                color={
                    isPressed
                        ? colorCode.orange['700']
                        : colorCode.orange['400']
                }
            />
        </Pressable>
    );
};

export default EditEmployeeButton;
