import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const SectionHeader = styled.Text`
    width: 100%;
    padding: 10px;
    background-color: ${Color.secundary};
    color: ${Color.white};
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
    ${({ checked }) => (checked ? `background-color: ${Color.primary};` : '')}
    border-radius: 5px;
    border-width: 3px;
    border-color: ${Color.secundary};
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
