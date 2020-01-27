import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AsyncStorage } from 'react-native';

import {
    Container,
    Logout,
    LogoutText,
    Perfil,
    PhotoContainer,
    Photo,
    State,
    Name,
    ButtonContainer,
    TouchableContainer,
    BtnContent,
    BtnIcon,
    BtnTitle,
} from './styles/HomeStyle';

import Color from '../themes/Color';
import JustCauseApi from '../services/JustCauseApi';

export default function({ navigation: { navigate } }) {
    const user = useSelector(({ employee }) => employee.user);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadUser() {
            const userId = JSON.parse(
                await AsyncStorage.getItem('@JustCause:userId'),
            );
            const response = await JustCauseApi.getUser(userId);
            const { data } = response;

            dispatch({ type: 'UPDATE_USER', data });
        }
        if (!user) {
            loadUser();
        }
    }, [dispatch, user]);

    function logout() {
        dispatch({ type: 'LOGOUT_REQUEST' });
        navigate('Splash');
    }

    return (
        <Container>
            <Perfil>
                <Logout onPress={logout}>
                    <LogoutText>Sair</LogoutText>
                </Logout>
                <PhotoContainer>
                    <Photo source={require('../assets/perfil.jpg')} />
                    <State />
                </PhotoContainer>
                <Name>{user ? user.name : ''}</Name>
            </Perfil>
            <ButtonContainer>
                <IconButton
                    icon="table"
                    title="Mesas"
                    onPress={() => navigate('Table')}
                />
                <IconButton icon="menu" title="Cardápio" onPress={() => {}} />
            </ButtonContainer>
            <IconButton icon="settings" title="Settings" onPress={() => {}} />
        </Container>
    );
}

function IconButton({ style, icon, title, onPress }) {
    const [pressed, setPressed] = useState(false);
    const color = pressed ? Color.white : Color.secundary;

    return (
        <TouchableContainer
            style={style}
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            underlayColor={Color.secundary}>
            <BtnContent>
                <BtnIcon res={icon} color={color} size={20} />
                <BtnTitle color={color}>{title}</BtnTitle>
            </BtnContent>
        </TouchableContainer>
    );
}
