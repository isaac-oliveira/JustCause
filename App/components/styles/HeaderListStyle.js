import styled from 'styled-components/native';
import Loading from '../Loading';
import Color from '../../themes/Color';
import Font from '../../themes/Font';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const HeaderList = styled.SectionList`
    flex: 1;
`;

export const Progress = styled(Loading)`
    position: absolute;
    align-self: center;
    height: 100;
`;

export const Message = styled.Text`
    flex: 1;
    position: absolute;
    font-family: ${Font.normal};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    align-self: center;
    color: ${Color.textColor};
`;
