import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../components/Loading';

import {
    Container,
    PhotoContainer,
    Photo,
    Message,
    Content,
    Input,
    SignInContainer,
    SignIn,
    SignInLabel,
} from './styles/LoginStyle';

import { EmployeeTypes } from '../store/reducers/employee';

export default function({ navigation: { navigate } }) {
    const employee = useSelector(({ employee }) => employee);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: 'admin_00',
        password: 'senhaSOFTEAM',
    });

    const passwordInput = useRef();

    useEffect(() => {
        if (employee.logged) {
            navigate('Waiter');
        }
    });

    async function login() {
        dispatch({ type: EmployeeTypes.LOGIN_REQUEST, payload: user });
    }

    return (
        <Container>
            <PhotoContainer>
                <Photo />
            </PhotoContainer>
            <Content>
                <Message>{employee.erro}</Message>
                <Input
                    placeholder="Login"
                    value={user.username}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={username => setUser({ ...user, username })}
                    onSubmitEditing={() => passwordInput.current.focus()}
                />

                <Input
                    ref={passwordInput}
                    placeholder="Senha"
                    value={user.password}
                    secureTextEntry={true}
                    returnKeyType="done"
                    onChangeText={password => setUser({ ...user, password })}
                    onSubmitEditing={login}
                />
            </Content>
            <SignInContainer>
                <SignIn loading={employee.loading} onPress={login}>
                    {!employee.loading && <SignInLabel>Entrar</SignInLabel>}
                    {employee.loading && <Loading />}
                </SignIn>
            </SignInContainer>
        </Container>
    );
}
