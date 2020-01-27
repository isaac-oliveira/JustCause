import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import AuthenticateNavigation from './navigation/authenticate.nav';

import Color from './themes/Color';

export default function() {
    return (
        <Provider store={store}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Color.secundary}
            />
            <AuthenticateNavigation />
        </Provider>
    );
}
