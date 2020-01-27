import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Table from '../screens/Table';
import Request from '../screens/Request';
import Category from '../screens/Category';
import Product from '../screens/Product';
import Cart from '../screens/Cart';

const StackNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Table: { screen: Table },
        Request: { screen: Request },
        Category: { screen: Category },
        Product: { screen: Product },
        Cart: { screen: Cart },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default createAppContainer(StackNavigator);
