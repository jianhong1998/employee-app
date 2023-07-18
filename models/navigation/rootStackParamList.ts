import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PageName from './pageName.enum';

interface RootStackParamList extends ParamListBase {
    home: undefined;
    employeeForm: undefined;
}

type HomeScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    PageName.HOME
>;

type EmployeeFormScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    PageName.EMPLOYEE_FORM
>;

type UserFormScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    PageName.USER_FORM
>;

export default RootStackParamList;

export {
    HomeScreenNavigationProp,
    EmployeeFormScreenNavigationProp,
    UserFormScreenNavigationProp,
};
