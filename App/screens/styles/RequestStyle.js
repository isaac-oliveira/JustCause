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

export const ItemContainer = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: ${Color.white};
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
    elevation: 5px;
`;

export const Status = styled.View`
    width: 5px;
    margin-right: 2px;
    ${({ color }) => (color ? `background-color: ${color};` : '')}
`;

export const VerticalContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const LabelItem = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 14px;
    text-align: center;
    color: ${Color.secundary};
`;

export const NumberItem = styled(LabelItem)`
    font-size: 28px;
    line-height: 28px;
`;

export const InfoContainer = styled(VerticalContainer)`
    position: absolute;
    align-self: center;
    left: 0;
    right: 0;
`;

export const TextItem = styled.Text`
    flex: 1;
    font-family: Sarabun;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #898888;
`;
