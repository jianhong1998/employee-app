import styles from './DeleteEmployeePopup.style';

import { FC } from 'react';
import { Modal, Text, View } from 'react-native';
import BlueButton from '../../ui/buttons/generalButton/BlueButton.component';
import { useAppDispatch, useAppSelector } from '../../../store/index.store';

import { popupsSliceActions } from '../../../store/slice/popups.slice';
import RedButton from '../../ui/buttons/generalButton/RedButton.component';

const DeleteEmployeePopup: FC = () => {
    const { isOpen, employeeId, employeeName } = useAppSelector(
        (state) => state.popupsSlice.deleteEmployeePopup,
    );

    const { closeDeleteEmployeePopup: closeConfirmationPopup } =
        popupsSliceActions;

    const dispatch = useAppDispatch();

    const closeButtonOnPressHandler = () => {
        dispatch(closeConfirmationPopup());
    };

    const deleteButtonOnPressHandler = () => {
        console.log(
            `Employee ${employeeId} - ${employeeName} has been deleted.`,
        );
        dispatch(closeConfirmationPopup());
    };

    return (
        <Modal visible={isOpen} animationType="fade">
            <View style={styles.popupContainer}>
                <View>
                    <Text style={styles.title}>Are You Sure?</Text>
                </View>

                <View>
                    <Text style={styles.content}>
                        Employee "{employeeName}" will be deleted.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <BlueButton
                        title="Close"
                        onPressHandler={closeButtonOnPressHandler}
                    />
                    <RedButton
                        title="Delete"
                        onPressHandler={deleteButtonOnPressHandler}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default DeleteEmployeePopup;
