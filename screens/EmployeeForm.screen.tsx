import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import EmployeeForm from '../components/forms/employeeForm/EmployeeForm.component';

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingHorizontal: 10,
    },
});

const EmployeeFormScreen: FC = () => {
    return (
        <View style={styles.body}>
            <EmployeeForm />
        </View>
    );
};

export default EmployeeFormScreen;
