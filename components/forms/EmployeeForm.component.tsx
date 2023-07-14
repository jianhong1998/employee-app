import styles from './EmployeeForm.style';

import { FC, useEffect } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/index.store';
import { useNavigation } from '@react-navigation/native';
import { EmployeeFormScreenNavigationProp } from '../../models/navigation/rootStackParamList';
import PageName from '../../models/navigation/pageName.enum';
import { employeeFormSliceActions } from '../../store/slice/employeeForm.slice';
import EmployeeDepartmentDropdown from '../ui/dropdown/EmployeeDepartmentDropdown.component';
import BlueButton from '../ui/buttons/BlueButton.component';
import EmployeeFormMode from '../../models/employeeForm/formMode.enum';

const EmployeeForm: FC = () => {
    const { formMode, id, name, salary, department } = useAppSelector(
        (state) => state.employeeFormSlice,
    );

    const dispatch = useAppDispatch();

    const { changeName, changeSalary } = employeeFormSliceActions;

    const { navigate } =
        useNavigation<EmployeeFormScreenNavigationProp['navigation']>();

    const nameInputOnChangeHandler = (inputValue: string) => {
        if (inputValue.length === 0) {
            dispatch(changeName(null));
            return;
        }

        dispatch(changeName(inputValue));
    };

    const salaryInputOnChangeHandler = (inputValue: string) => {
        if (inputValue.length === 0) {
            dispatch(changeSalary(null));
            return;
        }

        const formattedValue = inputValue.replace(/[^0-9.]/g, '');

        const parts = formattedValue.split('.');

        if ((parts.length === 2 && parts[1].length > 2) || parts.length > 2) {
            return;
        }

        dispatch(changeSalary(formattedValue));
    };

    const submitButtonOnPressHandler = () => {
        if (formMode === null) {
            Alert.alert('Fail to submit', 'Form Mode is not defined properly.');
        }

        if (name === null || name.length < 4 || name.length > 30) {
            Alert.alert('Fail to submit', 'Name must be 4 to 30 charecters.');
            return;
        }

        if (salary === null) {
            Alert.alert('Fail to submit', 'Salary cannot be empty.');
            return;
        }

        if (department === null) {
            Alert.alert('Fail to submit', 'Please choose a department.');
            return;
        }

        const employee = {
            name,
            salary: parseFloat(salary!),
            department,
        };

        if (formMode === EmployeeFormMode.NEW) {
            console.log(employee);
        } else {
        }

        navigate(PageName.HOME);
    };

    useEffect(() => {
        if (formMode === null) {
            Alert.alert('Redirected to Home page', 'Form Mode is not defined.');
            navigate(PageName.HOME);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    value={name || ''}
                    onChangeText={nameInputOnChangeHandler}
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text style={styles.label}>Salary</Text>
                <TextInput
                    style={styles.textInput}
                    value={salary?.toString() || ''}
                    onChangeText={salaryInputOnChangeHandler}
                />
            </View>
            <View>
                <Text style={styles.label}>Department</Text>
                <EmployeeDepartmentDropdown />
            </View>
            <View style={styles.submitButtonContainer}>
                <BlueButton
                    title="Submit"
                    onPressHandler={submitButtonOnPressHandler}
                />
            </View>
        </View>
    );
};

export default EmployeeForm;
