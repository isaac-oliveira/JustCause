import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';

import { Container, HorizontalView, CircleButton } from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import RequestItem from '../components/RequestItem';
import Button from '../components/Button';

import Color from '../themes/Color';

import { leftZero } from '../util';

import { requestsItem } from '../data';
import Dialog from '../components/Dialog';

export default function({ navigation }) {
    const { number } = navigation.state.params;
    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);

    function sendToChicken() {
        navigation.navigate('Table');
        ToastAndroid.show('Enviado para a cozinha!', ToastAndroid.SHORT);
    }

    function add() {
        navigation.navigate('Category', {
            number,
            screenBack: 'Cart',
        });
    }

    function renderItem({ item }) {
        function onPress() {
            setItensDialog([
                {
                    title: 'Abrir',
                    icon: 'open',
                    click: () =>
                        navigation.navigate('Product', {
                            number,
                        }),
                },
                {
                    title: 'Duplicar',
                    icon: 'duplicate',
                },
                {
                    title: 'Remover Item',
                    icon: 'close',
                },
            ]);
            setVisible(true);
        }

        return (
            <RequestItem
                label="Item"
                item={item}
                navigation={navigation}
                onPress={onPress}
            />
        );
    }

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(number)}`}
                content={<CircleButton icon="cart" disabled />}
                onBack={() => navigation.navigate('Request')}
            />
            <List
                style={{
                    width: '100%',
                    padding: 10,
                }}
                data={requestsItem}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <HorizontalView>
                <Button
                    title="Enviar para cozinha"
                    background={Color.white}
                    elevation={3}
                    onPress={sendToChicken}
                />
                <CircleButton icon="add" size={18} onPress={add} />
            </HorizontalView>
            <Dialog
                visible={visible}
                itens={itensDialog}
                onRequestClose={() => setVisible(false)}
            />
        </Container>
    );
}
