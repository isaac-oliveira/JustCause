import React from 'react';
import { Container, Title, Content } from './styles/ToolbarStyle';
import IconButton from './IconButton';

export default function({ onBack, content, title }) {
    const containerStyle = content ? { flexDirection: 'row-reverse' } : {};
    const titleStyle = !content
        ? { position: 'absolute', width: '100%', textAlign: 'center' }
        : {};

    return (
        <Container style={containerStyle}>
            <Title style={titleStyle}>{title}</Title>
            {content && <Content>{content}</Content>}
            <IconButton icon="back" onPress={onBack} />
        </Container>
    );
}
