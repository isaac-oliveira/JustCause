import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';

import Color from '../themes/Color';

export default function({ navigation: { navigate } }) {
    useEffect(() => {
        async function loadScreen() {
            const token = await AsyncStorage.getItem('@JustCause:token');
            const screen = token ? 'Waiter' : 'Login';
            navigate(screen);
        }
        loadScreen();
    });

    return <View style={{ flex: 1, backgroundColor: Color.background }} />;
}
