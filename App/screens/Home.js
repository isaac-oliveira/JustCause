import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    Logout,
    LogoutText,
    Perfil,
    InfoContainer,
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

export default function({ navigation: { navigate } }) {
    const user = useSelector(({ employee }) => employee.user);
    const dispatch = useDispatch();

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
                <InfoContainer>
                    <PhotoContainer>
                        <Photo source={require('../assets/perfil.jpg')} />
                        <State />
                    </PhotoContainer>
                    <Name>{user ? user.name : ''}</Name>
                </InfoContainer>
            </Perfil>
            <ButtonContainer>
                <IconButton
                    icon="table"
                    title="Mesas"
                    onPress={() => navigate('Table')}
                />
            </ButtonContainer>
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
