import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: ${Color.white};
    margin: 5px;
    padding: 10px 15px 5px 15px;
    border-radius: 12px;
    elevation: 8px;
    justify-content: center;
    align-items: center;
`;

export const VerticalView = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.1px;
    color: ${Color.secundary};
`;

export const Number = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1px;
    color: ${Color.secundary};
`;

export const InfoView = styled(VerticalView)`
    flex: 1;
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
