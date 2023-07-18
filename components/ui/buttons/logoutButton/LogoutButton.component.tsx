import { FC } from 'react';
import RedButton from '../generalButton/RedButton.component';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../../../models/navigation/rootStackParamList';
import PageName from '../../../../models/navigation/pageName.enum';

const LogoutButton: FC = () => {
    const { replace } = useNavigation<HomeScreenNavigationProp['navigation']>();

    const onPressHandler = () => {
        replace(PageName.USER_FORM);
    };

    return <RedButton title="Logout" onPressHandler={onPressHandler} />;
};

export default LogoutButton;
