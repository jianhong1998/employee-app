import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PopupsSliceState {
    deleteEmployeePopup: {
        isOpen: boolean;
        employeeId: number | null;
        employeeName: string | null;
    };
}

const initialPopupsSliceState: PopupsSliceState = {
    deleteEmployeePopup: {
        isOpen: false,
        employeeId: null,
        employeeName: null,
    },
};

const openDeleteEmployeePopup = (
    state: PopupsSliceState,
    action: PayloadAction<{ employeeId: number; employeeName: string }>,
) => {
    const { employeeId, employeeName } = action.payload;

    state.deleteEmployeePopup.isOpen = true;
    state.deleteEmployeePopup.employeeId = employeeId;
    state.deleteEmployeePopup.employeeName = employeeName;
};

const closeDeleteEmployeePopup = (state: PopupsSliceState) => {
    state.deleteEmployeePopup.isOpen = false;
    state.deleteEmployeePopup.employeeId = null;
    state.deleteEmployeePopup.employeeName = null;
};

const popupsSlice = createSlice({
    name: 'popupsSlice',
    initialState: initialPopupsSliceState,
    reducers: {
        closeDeleteEmployeePopup: closeDeleteEmployeePopup,
        openDeleteEmployeePopup: openDeleteEmployeePopup,
    },
});

const popupsSliceActions = popupsSlice.actions;

export default popupsSlice;
export { popupsSliceActions, PopupsSliceState };
