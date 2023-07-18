import styles from './EmployeeCardList.style';
import { FlatList, ListRenderItem, View } from 'react-native';
import { FC, useState } from 'react';
import EmployeeCard from './employeeCard/EmployeeCard.component';
import Employee from '../../models/employee.model';
import { useAppSelector } from '../../store/index.store';

const EmployeeCardList: FC = () => {
    const { employeeArray } = useAppSelector((state) => state.employeeSlice);

    const [displayedEmployees, setDisplayedEmployees] =
        useState<Employee[]>(employeeArray);

    const getRenderItems: ListRenderItem<Employee> = ({ item, index }) => {
        return (
            <View style={styles.cardContainer}>
                <EmployeeCard employee={item} key={index} />
            </View>
        );
    };

    const keyExtractor = (_: Employee, index: number): string => {
        return index.toString();
    };

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={getRenderItems}
                keyExtractor={keyExtractor}
                data={displayedEmployees}
            />
        </View>
    );
};

export default EmployeeCardList;
