import styles from './EmployeeForm.style';

import { FC } from 'react';
import { Text, View } from 'react-native';
import EmployeeForm from '../components/forms/EmployeeForm.component';

const EmployeeFormScreen: FC = () => {
    return (
        <View style={styles.body}>
            <EmployeeForm />
        </View>
    );
};

export default EmployeeFormScreen;
