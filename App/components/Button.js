import React from 'react';

import { Container, Title } from './styles/ButtonStyle';

export default function({ style, title, background, elevation, onPress }) {
    return (
        <Container
            style={style}
            onPress={onPress}
            background={background}
            elevation={elevation}>
            <Title>{title}</Title>
        </Container>
    );
}
