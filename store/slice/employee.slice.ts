import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Employee, { EmployeeId } from '../../models/employee.model';

interface EmployeeSliceState {
    employeeArray: Employee[];
}

const initialEmployeeSliceState: EmployeeSliceState = {
    employeeArray: [],
};

const addEmployee = (
    state: EmployeeSliceState,
    action: PayloadAction<Employee>,
) => {
    state.employeeArray.push(action.payload);
};

const removeEmployee = (
    state: EmployeeSliceState,
    action: PayloadAction<EmployeeId>,
) => {
    state.employeeArray = state.employeeArray.filter(
        (employee) => employee.id !== action.payload,
    );
};

const setEmployeeArray = (
    state: EmployeeSliceState,
    action: PayloadAction<Employee[]>,
) => {
    state.employeeArray = action.payload;
};

const clearEmployeeArray = (state: EmployeeSliceState) => {
    state.employeeArray = [];
};

const employeeSlice = createSlice({
    name: 'employeSlice',
    initialState: initialEmployeeSliceState,
    reducers: {
        addEmployee,
        removeEmployee,
        setEmployeeArray,
        clearEmployeeArray,
    },
});

const employeeSliceActions = employeeSlice.actions;

export default employeeSlice;
export { employeeSliceActions };
