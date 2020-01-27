import styled from 'styled-components/native';
import IconSvg from '../Icon';

import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: ${Color.translucent};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    border-radius: 12px;
    background-color: ${Color.white};
    justify-content: center;
    width: 60%;
    padding: 5px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    padding: 8px;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(IconSvg)``;

export const Title = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${Color.black};
    padding: 8px 15px;
`;
