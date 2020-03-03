import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import JustCauseApi from '../services/JustCauseApi';
import Color from '../themes/Color';

export default function({ navigation: { navigate } }) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadScreen() {
            const userId = JSON.parse(
                await AsyncStorage.getItem('@JustCause:userId'),
            );

            const response = await JustCauseApi.getUser(userId);
            const { data } = response;

            dispatch({ type: 'UPDATE_USER', data });

            const screen = response.status !== 401 ? 'Waiter' : 'Login';
            navigate(screen);
        }
        loadScreen();
    });

    return <View style={{ flex: 1, backgroundColor: Color.background }} />;
}
