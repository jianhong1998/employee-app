import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import employeeSlice from './slice/employee.slice';
import employeeFormSlice from './slice/employeeForm.slice';
import popupsSlice from './slice/popups.slice';
import userFormSlice from './slice/userForm.slice';

const store = configureStore({
    reducer: {
        employeeSlice: employeeSlice.reducer,
        employeeFormSlice: employeeFormSlice.reducer,
        popupsSlice: popupsSlice.reducer,
        userFormSlice: userFormSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
export { RootState, AppDispatch, useAppDispatch, useAppSelector };
