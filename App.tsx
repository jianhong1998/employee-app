import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/index.store';
import { NavigationContainer } from '@react-navigation/native';
import {
    NativeStackNavigationOptions,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home.screen';
import PageName from './models/navigation/pageName.enum';
import EmployeeFormScreen from './screens/EmployeeForm.screen';
import RootStackParamList from './models/navigation/rootStackParamList';
import colorCode from './constants/colorCode';
import AddEmployeeButton from './components/ui/buttons/employeeButton/AddEmployeeButton.component';
import UserFormScreen from './screens/UserForm.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackNavigatorOption: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: colorCode.lightBlue['200'],
    },
    headerTitleAlign: 'center',
    headerTintColor: colorCode.lightBlue['700'],
    headerTitleStyle: {
        fontWeight: '900',
    },
    contentStyle: {
        backgroundColor: colorCode.lightBlue['100'],
    },
};

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style={'dark'} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={PageName.HOME}
                    screenOptions={stackNavigatorOption}
                >
                    <Stack.Screen
                        name={PageName.HOME}
                        component={HomeScreen}
                        options={{
                            title: 'Employees',
                            headerRight: () => <AddEmployeeButton />,
                        }}
                    />
                    <Stack.Screen
                        name={PageName.EMPLOYEE_FORM}
                        component={EmployeeFormScreen}
                        options={{
                            title: 'Add Employee',
                        }}
                    />
                    <Stack.Screen
                        name={PageName.USER_FORM}
                        component={UserFormScreen}
                        options={{
                            title: '',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
