import { FC } from 'react';
import UserForm from '../components/forms/userForm/UserForm.component';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
});

const UserFormScreen: FC = () => {
    return (
        <View style={styles.container}>
            <UserForm />
        </View>
    );
};

export default UserFormScreen;
