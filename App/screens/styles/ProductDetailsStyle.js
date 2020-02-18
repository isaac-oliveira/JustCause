import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Title = styled.Text`
    color: ${Color.secundary};
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
`;

export const Section = styled.SectionList`
    flex: 1;
`;

export const Horizontal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

export const Form = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.Text`
    font-family: ${Font.normal};
    font-weight: 300;
    color: ${Color.secundary};
    padding: 5px;
`;

export const Input = styled.TextInput`
    padding: 5px 8px;
    text-align: center;
    background-color: ${Color.white};
    border-radius: 5px;
`;

export const SectionHeader = styled.Text`
    width: 100%;
    padding: 8px;
    font-family: ${Font.semibold};
    font-weight: 500;
    background-color: ${Color.secundary};
    color: ${Color.background};
`;

export const Touchable = styled.TouchableWithoutFeedback``;

export const ContainerItem = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const TitleItem = styled.Text`
    flex: 1;
    font-family: ${Font.normal};
    font-weight: 300;
    color: ${Color.secundary};
`;

export const CheckBoxItem = styled.View`
    width: 20px;
    height: 20px;
    background-color: ${({ checked }) =>
        checked ? Color.primary : Color.groups};
    border-radius: 5px;
    border-width: 4px;
    border-color: ${Color.groups};
`;

export const ComboBoxItem = styled(CheckBoxItem)`
    border-radius: 20px;
`;

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${Color.divider};
    position: absolute;
    bottom: 0;
    align-self: center;
    margin: 0 1%;
`;
