import styled from 'styled-components/native';
import IconButton from '../../components/IconButton';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const HorizontalView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 18px;
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

export const InfoView = styled(VerticalContainer)`
    position: absolute;
    align-self: center;
    left: 0;
    right: 0;
`;

export const Info = styled.Text`
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: ${Color.textColor};
`;
