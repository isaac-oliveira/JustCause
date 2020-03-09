import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import Icon from '../../components/Icon';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

const size = Dimensions.get('screen').width/3;

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
    justify-content: space-between;
    align-items: center;
`;

export const Perfil = styled.View`
    align-items: center;
    height: 40%;
    width: 100%;
`;

export const Logout = styled.TouchableOpacity`
    align-self: flex-end;
    padding: 5px 15px;
`;

export const LogoutText = styled.Text`
    color: ${Color.secundary};
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: normal;
`;

export const InfoContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const PhotoContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${size}px;
`;

export const Photo = styled.Image`
    border-radius: ${size/2};
    border-width: 2px;
    border-color: ${Color.secundary};
    width: ${size}px;
    height: ${size}px;
`;

export const State = styled.View`
    position: absolute;
    border-radius: ${size/4};
    border-width: 2px;
    border-color: ${Color.secundary};
    background-color: ${Color.primary};
    top: 0;
    right: 0;
    width: ${size/4};
    height: ${size/4};
`;

export const Name = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    height: 40px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${Color.secundary};
    padding-top: 8px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    width: 100%;
`;

export const TouchableContainer = styled.TouchableHighlight`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const BtnContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BtnIcon = styled(Icon)`
    width: 45%;
    padding-right: 5%;
    text-align: right;
`;

export const BtnTitle = styled.Text`
    width: 52%;
    color: ${({ color }) => color};
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
`;
