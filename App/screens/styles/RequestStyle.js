import styled from 'styled-components/native';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const HorizontalView = styled.View`
    flex-direction: row-reverse;
    align-items: center;
    margin: 18px;
`;

export const VerticalView = styled.View`
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 0;
`;

export const Total = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    color: ${Color.secundary};
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1px;
    font-size: 10px;
    text-align: center;
`;

export const Value = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    letter-spacing: 0.1px;
    font-weight: 600;
    font-size: 14px;
`;

export const CloseButton = styled(Button)`
    width: 100%;
`;

export const CircleButton = styled(IconButton)`
    padding: 10px;
    border-radius: 30px;
    background-color: ${Color.primary};
    elevation: 2px;
`;
