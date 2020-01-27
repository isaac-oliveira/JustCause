import styled from 'styled-components/native';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px 15px;
    background-color: ${({ background }) =>
        background ? background : '#0000'};
    elevation: ${({ elevation }) => (elevation ? elevation : '0')}px;
    border-radius: 25px;
`;

export const Title = styled.Text`
    color: ${Color.secundary};
    font-size: 12px;
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 600;
    text-align: center;
`;
