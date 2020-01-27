import styled from 'styled-components/native';
import Button from '../../components/Button';

import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    background-color: ${Color.background};
    padding-bottom: 10%;
`;

export const PhotoContainer = styled.View`
    height: 50%;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.View`
    background-color: ${Color.divider};
    align-self: center;
    width: 120px;
    height: 120px;
`;

export const Message = styled.Text`
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    height: 20px;
    text-align: center;
    color: ${Color.cardDisabled};
`;

export const Content = styled.View`
    justify-content: center;
    width: 70%;
`;

export const Input = styled.TextInput`
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    margin: 5px;
    padding: 5px;
    border-radius: 50px;
    elevation: 3px;
    background-color: ${Color.white};
`;

export const SignInContainer = styled.View`
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const SignIn = styled.TouchableOpacity`
    width: 40%;
    justify-content: center;
    align-items: center;
    ${({ loading }) => (!loading ? `background-color: ${Color.primary};` : '')}
    border-radius: 50px;
    padding: 10px;
`;

export const SignInLabel = styled.Text`
    font-size: 12px;
    color: ${Color.textColor};
`;
