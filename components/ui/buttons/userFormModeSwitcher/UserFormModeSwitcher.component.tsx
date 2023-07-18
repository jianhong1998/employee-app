import styles from './UserFormModeSwitcher.style';

import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import UserFormMode from '../../../../models/userForm/userFormMode.enum';
import { useAppDispatch, useAppSelector } from '../../../../store/index.store';
import { userFormSliceActions } from '../../../../store/slice/userForm.slice';

const UserFormModeSwitcher: FC = () => {
    const { formMode } = useAppSelector((state) => state.userFormSlice);

    const dispatch = useAppDispatch();

    const { setFormToLoginMode, setFormToRegisterMode } = userFormSliceActions;

    const onPressHandler = () => {
        if (formMode === UserFormMode.LOGIN) {
            dispatch(setFormToRegisterMode());
        } else {
            dispatch(setFormToLoginMode());
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {formMode === UserFormMode.LOGIN && 'No account yet?'}
                {formMode === UserFormMode.REGISTER && 'Have account already?'}
            </Text>
            <Pressable onPress={onPressHandler}>
                <Text style={[styles.registerAnchor, styles.text]}>
                    {formMode === UserFormMode.LOGIN ? 'Register' : 'Login'}
                </Text>
            </Pressable>
        </View>
    );
};

export default UserFormModeSwitcher;
