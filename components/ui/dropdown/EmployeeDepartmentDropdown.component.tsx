import styles from './EmployeeDepartmentDropdown.style';

import { FC, useState } from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import EmployeeDepartment from '../../../models/employeeDepartment.enum';
import DropdownItemData from '../../../models/dropdown/dropdownItemData.model';
import { useAppDispatch } from '../../../store/index.store';
import { employeeFormSliceActions } from '../../../store/slice/employeeForm.slice';

const EmployeeDepartmentDropdown: FC = () => {
    const [isDropdownPickerOpen, setIsDropdownPickerOpen] =
        useState<boolean>(false);

    const [dropdownValue, setDropdownValue] =
        useState<EmployeeDepartment | null>(null);

    const dispatch = useAppDispatch();

    const { changeDepartment } = employeeFormSliceActions;

    const items = Object.entries(EmployeeDepartment).map(([key, value]) => {
        return {
            label: key,
            value,
        } as DropdownItemData<EmployeeDepartment>;
    });

    const onChangeHandler = (value: EmployeeDepartment | null) => {
        dispatch(changeDepartment(value));
    };

    return (
        <DropDownPicker
            open={isDropdownPickerOpen}
            setOpen={setIsDropdownPickerOpen}
            value={dropdownValue}
            setValue={setDropdownValue}
            items={items}
            onChangeValue={onChangeHandler}
            style={styles.dropdown}
            textStyle={styles.fontStyle}
            placeholder=""
        />
    );
};

export default EmployeeDepartmentDropdown;
