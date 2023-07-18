import styles from './EmployeeDepartmentDropdown.style';

import { FC, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownItemData from '../../../models/dropdown/dropdownItemData.model';
import { useAppSelector, useAppDispatch } from '../../../store/index.store';
import UserDepartment from '../../../models/userForm/userDepartment.enum';
import { userFormSliceActions } from '../../../store/slice/userForm.slice';

const UserDepartmentDropdown: FC = () => {
    const { department } = useAppSelector((state) => state.userFormSlice);

    const [isDropdownPickerOpen, setIsDropdownPickerOpen] =
        useState<boolean>(false);

    const [dropdownValue, setDropdownValue] = useState<UserDepartment | null>(
        department,
    );

    const dispatch = useAppDispatch();

    const { setDepartment } = userFormSliceActions;

    const items = Object.entries(UserDepartment).map(([key, value]) => {
        return {
            label: key,
            value,
        } as DropdownItemData<UserDepartment>;
    });

    const onChangeHandler = () => {
        if (dropdownValue) {
            dispatch(setDepartment(dropdownValue));
        }
    };

    return (
        <DropDownPicker
            open={isDropdownPickerOpen}
            setOpen={setIsDropdownPickerOpen}
            value={department}
            setValue={setDropdownValue}
            items={items}
            onChangeValue={onChangeHandler}
            style={styles.dropdown}
            textStyle={styles.fontStyle}
            placeholder=""
        />
    );
};

export default UserDepartmentDropdown;
