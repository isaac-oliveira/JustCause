import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Table from '../screens/Table';
import Request from '../screens/Request';
import RequestItens from '../screens/RequestItens';
import Category from '../screens/Category';
import Product from '../screens/Product';
import Subcategory from '../screens/Subcategory';
import Cart from '../screens/Cart';
import Item from '../screens/Item';

const StackNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Table: { screen: Table },
        Request: { screen: Request },
        RequestItens: { screen: RequestItens },
        Category: { screen: Category },
        Product: { screen: Product },
        Subcategory: { screen: Subcategory },
        Cart: { screen: Cart },
        Item: { screen: Item },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
        },
    },
);

export default createAppContainer(StackNavigator);
