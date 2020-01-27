import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Waiter from './waiter.nav';

const SwitchNavigator = createSwitchNavigator(
    {
        Splash: { screen: Splash },
        Login: { screen: Login },
        Waiter: { screen: Waiter },
    },
    {
        initialRouteName: 'Splash',
    },
);

export default createAppContainer(SwitchNavigator);
