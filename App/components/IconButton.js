import React from 'react';

import { Container } from './styles/IconButtonStyle';
import Icon from './Icon';
import Color from '../themes/Color';

export default function({ disabled, style, icon, size, onPress }) {
    return (
        <Container disabled={disabled} style={style} onPress={onPress}>
            <Icon res={icon} color={Color.secundary} size={size ? size : 18} />
        </Container>
    );
}
