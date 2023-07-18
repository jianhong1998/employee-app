import { FC, useState } from 'react';
import Employee from '../../../models/employee.model';
import { Pressable } from 'react-native';
import { useAppDispatch } from '../../../store/index.store';
import { AntDesign } from '@expo/vector-icons';
import colorCode from '../../../constants/colorCode';
import { popupsSliceActions } from '../../../store/slice/popups.slice';

interface DeleteEmployeeButtonProps {
    employee: Employee;
}

const DeleteEmployeeButton: FC<DeleteEmployeeButtonProps> = ({ employee }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const { openDeleteEmployeePopup: openConfirmationPopup } =
        popupsSliceActions;

    const onPressInHandler = () => {
        setIsPressed(true);
    };

    const onPressOutHandler = () => {
        setIsPressed(false);
    };

    const onPressHandler = () => {
        dispatch(
            openConfirmationPopup({
                employeeId: employee.id,
                employeeName: employee.name,
            }),
        );
    };

    return (
        <Pressable
            onPressIn={onPressInHandler}
            onPressOut={onPressOutHandler}
            onPress={onPressHandler}
        >
            <AntDesign
                name="delete"
                size={24}
                color={isPressed ? colorCode.red['700'] : colorCode.red['400']}
            />
        </Pressable>
    );
};

export default DeleteEmployeeButton;
