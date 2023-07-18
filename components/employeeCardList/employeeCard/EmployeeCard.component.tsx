import styles from './EmployeeCard.style';

import { FC } from 'react';
import Employee from '../../../models/employee.model';
import { Text, View } from 'react-native';
import DeleteEmployeeButton from '../../ui/buttons/employeeButton/DeleteEmployeeButton.component';
import EditEmployeeButton from '../../ui/buttons/employeeButton/EditEmployeeButton.component';

interface EmployeeCardProps {
    employee: Employee;
}

const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <View style={styles.componentContainer}>
            <View>
                <Text style={[styles.text, styles.boldText]}>
                    {employee.name}
                </Text>
                <Text style={styles.text}>
                    {employee.salary.toLocaleString('en-SG', {
                        style: 'currency',
                        currency: 'SGD',
                    })}
                </Text>
                <Text style={styles.text}>{employee.department}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonHolder}>
                    <EditEmployeeButton employee={employee} />
                </View>
                <View style={styles.buttonHolder}>
                    <DeleteEmployeeButton employee={employee} />
                </View>
            </View>
        </View>
    );
};

export default EmployeeCard;
