import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import EmployeeFormMode from '../../models/employeeForm/formMode.enum';
import EmployeeDepartment from '../../models/employeeDepartment.enum';
import { EmployeeId } from '../../models/employee.model';

export interface EmployeeFormSliceState {
    formMode: EmployeeFormMode | null;
    id: EmployeeId | null;
    name: string | null;
    salary: string | null;
    department: EmployeeDepartment | null;
}

const initialEmployeeFormSliceState: EmployeeFormSliceState = {
    formMode: null,
    id: null,
    name: null,
    salary: null,
    department: null,
};

const clearFormData = (state: EmployeeFormSliceState) => {
    state.formMode = null;
    state.id = null;
    state.name = null;
    state.salary = null;
    state.department = null;
};

const setFormData = (
    state: EmployeeFormSliceState,
    action: PayloadAction<EmployeeFormSliceState>,
) => {
    state.formMode = action.payload.formMode;
    state.id = action.payload.id;
    state.name = action.payload.name;
    state.salary = action.payload.salary;
    state.department = action.payload.department;
};

const changeName = (
    state: EmployeeFormSliceState,
    action: PayloadAction<string | null>,
) => {
    state.name = action.payload;
};

const changeSalary = (
    state: EmployeeFormSliceState,
    action: PayloadAction<string | null>,
) => {
    state.salary = action.payload;
};

const changeDepartment = (
    state: EmployeeFormSliceState,
    action: PayloadAction<EmployeeDepartment | null>,
) => {
    state.department = action.payload;
};

const employeeFormSlice = createSlice({
    name: 'employeeFormSlice',
    initialState: initialEmployeeFormSliceState,
    reducers: {
        clearFormData,
        setFormData,
        changeName,
        changeSalary,
        changeDepartment,
    },
});

const employeeFormSliceActions = employeeFormSlice.actions;

export default employeeFormSlice;
export { employeeFormSliceActions };
