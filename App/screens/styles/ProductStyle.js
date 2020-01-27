import styled from 'styled-components/native';
import Button from '../../components/Button';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const Form = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.1px;
`;

export const InputQtd = styled.TextInput`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.1px;
    background-color: ${Color.white};
    text-align: center;
    padding: 5px 8px;
    border-radius: 8px;
`;

export const AddButton = styled(Button)`
    width: 40%;
`;

export const HorizontalView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 25px;
`;

export const HeaderContainer = styled.View`
    background-color: ${Color.secundary};
    padding: 5px 15px;
`;

export const HeaderTitle = styled.Text`
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: ${Color.white};
`;

export const ItemContainer = styled.View`
    padding: 10px 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ItemTitle = styled.Text`
    flex: 1;
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: ${Color.secundary};
`;

export const ComboBox = styled.View`
    background-color: ${({ active }) =>
        active ? Color.primary : Color.divider};
    border-width: 3px;
    border-color: ${Color.divider};
    border-radius: 20px;
    width: 20px;
    height: 20px;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: ${Color.divider};
    position: absolute;
    bottom: 0;
    align-self: center;
    margin: 0 1%;
`;
