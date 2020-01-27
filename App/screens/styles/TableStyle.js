import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const TableContainer = styled.TouchableOpacity`
    padding: 8px;
`;

export const SeatContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    elevation: 16px;
`;

export const SeatTop = styled.View`
    background-color: ${Color.seat};
    width: 32px;
    height: 16px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const SeatBottom = styled.View`
    background-color: ${Color.seat};
    width: 32px;
    height: 16px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Content = styled.View`
    margin: 5px;
    padding-left: 8px;
    justify-content: space-around;
    width: 95px;
    height: 56px;
    elevation: 15px;
    border-radius: 8px;
    background-color: ${({ status }) =>
        status ? Color.cardEnabled : Color.cardDisabled};
`;

export const Title = styled.Text`
    font-family: ${Font.semibold};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0.1px;
`;

export const State = styled.Text`
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    opacity: 0.7;
`;
