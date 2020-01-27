import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
`;

export const Title = styled.Text`
    padding: 8px;
    color: ${Color.secundary};
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.5px;
`;
