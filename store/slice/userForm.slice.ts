import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import UserFormMode from '../../models/userForm/userFormMode.enum';
import UserDepartment from '../../models/userForm/userDepartment.enum';

interface UserFormSliceState {
    formMode: UserFormMode;
    username: string | null;
    password: string | null;
    reEnteredPassword: string | null;
    department: UserDepartment | null;
}

const initialUerFormSliceState: UserFormSliceState = {
    formMode: UserFormMode.LOGIN,
    username: null,
    password: null,
    reEnteredPassword: null,
    department: null,
};

const setFormToLoginMode = (state: UserFormSliceState) => {
    state.formMode = UserFormMode.LOGIN;
    state.username = null;
    state.password = null;
    state.reEnteredPassword = null;
    state.department = null;
};

const setFormToRegisterMode = (state: UserFormSliceState) => {
    state.formMode = UserFormMode.REGISTER;
    state.username = null;
    state.password = null;
    state.reEnteredPassword = null;
    state.department = null;
};

const setUsername = (
    state: UserFormSliceState,
    action: PayloadAction<string>,
) => {
    state.username = action.payload;
};

const setPassword = (
    state: UserFormSliceState,
    action: PayloadAction<string>,
) => {
    state.password = action.payload;
};

const setReEnteredPassword = (
    state: UserFormSliceState,
    action: PayloadAction<string>,
) => {
    state.reEnteredPassword = action.payload;
};

const setDepartment = (
    state: UserFormSliceState,
    action: PayloadAction<UserDepartment>,
) => {
    state.department = action.payload;
};

const userFormSlice = createSlice({
    name: 'userSlice',
    initialState: initialUerFormSliceState,
    reducers: {
        setFormToLoginMode,
        setFormToRegisterMode,
        setUsername,
        setPassword,
        setReEnteredPassword,
        setDepartment,
    },
});

const userFormSliceActions = userFormSlice.actions;

export default userFormSlice;
export { userFormSliceActions };
