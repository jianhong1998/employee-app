import { FC } from 'react';
import { View } from 'react-native';
import EmployeeCardList from '../components/employeeCardList/EmployeeCardList.component';
import DeleteEmployeePopup from '../components/popups/deleteEmployeePopup/DeleteEmployeePopup.component';

const HomeScreen: FC = () => {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                }}
            >
                <EmployeeCardList />
            </View>
            <DeleteEmployeePopup />
        </>
    );
};

export default HomeScreen;
