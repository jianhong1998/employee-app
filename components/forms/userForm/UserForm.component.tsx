import styles from './UserForm.style';

import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/index.store';
import { userFormSliceActions } from '../../../store/slice/userForm.slice';
import { Pressable, Text, View } from 'react-native';
import UserInput from '../../ui/userInput/UserInput.component';
import BlueButton from '../../ui/buttons/generalButton/BlueButton.component';
import UserFormMode from '../../../models/userForm/userFormMode.enum';
import UserFormModeSwitcher from '../../ui/buttons/userFormModeSwitcher/UserFormModeSwitcher.component';
import GreenButton from '../../ui/buttons/generalButton/GreenButton.component';
import UserDepartmentDropdown from '../../ui/dropdown/UserDepartmentDropdown.component';

const UserForm: FC = () => {
    const { formMode, username, password, reEnteredPassword, department } =
        useAppSelector((state) => state.userFormSlice);

    const { setPassword, setReEnteredPassword, setUsername, setDepartment } =
        userFormSliceActions;

    const dispatch = useAppDispatch();

    const usernameInputOnChangeHandler = (changedInput: string) => {
        if (changedInput.indexOf(' ') !== -1) {
            return;
        }

        dispatch(setUsername(changedInput));
    };

    const passwordInputOnChangeHandler = (changedInput: string) => {
        if (changedInput.indexOf(' ') !== -1) {
            return;
        }

        dispatch(setPassword(changedInput));
    };

    const reEnteredPasswordInputOnChangeHandler = (changedInput: string) => {
        if (changedInput.indexOf(' ') !== -1) {
            return;
        }

        dispatch(setReEnteredPassword(changedInput));
    };

    const loginButtonOnPressHandler = () => {
        console.log('login');
    };

    const registerButtonOnPressHandler = () => {
        console.log('register');
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <UserInput
                        value={username || ''}
                        onChangeHanlder={usernameInputOnChangeHandler}
                        autoFocus={true}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <UserInput
                        value={password || ''}
                        onChangeHanlder={passwordInputOnChangeHandler}
                    />
                </View>
                {formMode === UserFormMode.REGISTER && (
                    <>
                        <View>
                            <Text style={styles.label}>Re-Enter Password</Text>
                            <UserInput
                                value={reEnteredPassword || ''}
                                onChangeHanlder={
                                    reEnteredPasswordInputOnChangeHandler
                                }
                            />
                        </View>
                        <View style={styles.departmentDropdown}>
                            <Text style={styles.label}>Department</Text>
                            <UserDepartmentDropdown />
                        </View>
                    </>
                )}
                <View>
                    {formMode === UserFormMode.LOGIN && (
                        <BlueButton
                            title="Login"
                            onPressHandler={loginButtonOnPressHandler}
                        />
                    )}
                    {formMode === UserFormMode.REGISTER && (
                        <GreenButton
                            title="Register"
                            onPressHandler={registerButtonOnPressHandler}
                        />
                    )}
                </View>
                <View style={styles.formModeSwitcherContainer}>
                    <UserFormModeSwitcher />
                </View>
            </View>
        </>
    );
};

export default UserForm;
