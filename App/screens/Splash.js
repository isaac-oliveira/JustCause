import React, { useEffect } from 'react';
import { View, AsyncStorage, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Loading from '../components/Loading';
import JustCauseApi from '../services/JustCauseApi';
import Color from '../themes/Color';

export default function({ navigation: { navigate } }) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadScreen() {
            const userId = JSON.parse(
                await AsyncStorage.getItem('@JustCause:userId'),
            );

            JustCauseApi.getUser(userId).then(function(response) {
                if (response.ok) {
                    const { data } = response;
                    const screen = response.status !== 401 ? 'Waiter' : 'Login';
                    navigate(screen);

                    dispatch({ type: 'UPDATE_USER', data });
                }
            });
        }
        loadScreen();
    });

    return (
        <View style={styles.container}>
            <Loading />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
});
