import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Color from '../../themes/Color';
import Font from '../../themes/Font';

const width = Dimensions.get('window').width;
const margin = 15;

export const ContainerItem = styled.TouchableOpacity`
    margin: ${margin}px;
    background-color: #aaa;
    border-radius: 8px;
    elevation: 10px;
`;

export const Photo = styled.Image`
    width: ${({ column }) => width / column - margin * 2 * column};
    height: ${({ height }) => height ? height : 100 }px;
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
