import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Employee, { EmployeeId } from '../../models/employee.model';
import EmployeeDepartment from '../../models/employeeDepartment.enum';

interface EmployeeSliceState {
    employeeArray: Employee[];
}

const initialEmployeeSliceState: EmployeeSliceState = {
    employeeArray: [
        {
            id: 1,
            name: 'test 1',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 1,
            name: 'test 2',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 3,
            name: 'test 3',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 4,
            name: 'test 4',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 5,
            name: 'test 5',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 6,
            name: 'test 6',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
        {
            id: 7,
            name: 'test 7',
            department: EmployeeDepartment.PS,
            salary: 1200.5,
        },
    ],
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
