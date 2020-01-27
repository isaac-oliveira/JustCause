import React from 'react';
import { Modal, FlatList } from 'react-native';

import {
    Container,
    Title,
    Content,
    ButtonContainer,
    Icon,
} from './styles/DialogStyle';

import Color from '../themes/Color';

export default function({ itens, visible, onRequestClose }) {
    const renderItem = ({ item }) => {
        const { icon, title, click } = item;

        function onPress() {
            if (click) {
                click();
            }
            onRequestClose();
        }

        return (
            <ButtonContainer onPress={onPress}>
                <Icon res={icon} color={Color.secundary} size={14} />
                <Title>{title}</Title>
            </ButtonContainer>
        );
    };

    return (
        <Modal visible={visible} transparent onRequestClose={onRequestClose}>
            <Container onPress={onRequestClose}>
                <Content>
                    <FlatList
                        data={itens}
                        keyExtractor={item => item.title}
                        renderItem={renderItem}
                    />
                </Content>
            </Container>
        </Modal>
    );
}
