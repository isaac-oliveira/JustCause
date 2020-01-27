import React from 'react';
import { Container } from './styles/IconStyle';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import JustCauseIconConfig from '../../Fonts/selection.json';

const JustCauseIcon = createIconSetFromIcoMoon(
    JustCauseIconConfig,
    'JustCauseIcon',
    'JustCauseIcon.ttf',
);

export default function Icon({ style, res, color, size }) {
    return (
        <Container style={style}>
            <JustCauseIcon name={res} color={color} size={size ? size : 16} />
        </Container>
    );
}
