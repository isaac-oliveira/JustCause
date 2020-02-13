import styled from 'styled-components/native';
import IconButton from '../../components/IconButton';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const CircleButton = styled(IconButton)`
    padding: 10px;
    border-radius: 30px;
    background-color: ${Color.primary};
    elevation: 2px;
`;

export const Content = styled.View`
    background-color: ${Color.white};
    margin: 15px;
    padding: 15px 25px;
    border-radius: 10px;
    elevation: 5px;
`;

export const VerticalContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const LabelItem = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: ${Color.secundary};
`;

export const NumberItem = styled(LabelItem)`
    font-size: 35px;
    line-height: 35px;
`;

export const InfoContainer = styled.View`
    padding: 10px;
`;

export const TextItem = styled.Text`
    font-family: Sarabun;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #898888;
`;
