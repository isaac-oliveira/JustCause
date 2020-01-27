import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.background};
`;

export const CategoryContainer = styled.TouchableOpacity`
    margin: 8px;
    background-color: #aaa;
    border-radius: 8px;
    elevation: 8px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color: ${Color.white};
    position: absolute;
    padding: 10px;
    bottom: 0;
    font-family: ${Font.semibold};
    font-style: normal;
`;

export const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 8px;
`;
