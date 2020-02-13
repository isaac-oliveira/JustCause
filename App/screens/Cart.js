import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HorizontalView, CircleButton } from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import RequestItem from '../components/RequestItem';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import { CartCreators } from '../store/reducers/cart';
import Color from '../themes/Color';
import { leftZero } from '../util';

export default function({ navigation }) {
    const cart = useSelector(({ cart }) => cart);
    const dispatch = useDispatch();

    const { table } = navigation.state.params;
    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);

    function sendToChicken() {
        ToastAndroid.show('Enviado para a cozinha!', ToastAndroid.SHORT);
        dispatch(CartCreators.sendToKitchen(table.id, cart));
        navigation.navigate('Table');
    }

    function add() {
        navigation.navigate('Category', {
            table,
            screenBack: 'Cart',
        });
    }

    function renderItem({ item, index }) {
        function onPress() {
            setItensDialog([
                {
                    title: 'Abrir',
                    icon: 'open',
                    click: () =>
                        navigation.navigate('Product', {
                            table,
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
        const { observacao, valorUnidade } = item;

        return (
            <RequestItem
                label="Item"
                number={index + 1}
                info={observacao}
                value={valorUnidade}
                navigation={navigation}
                onPress={onPress}
            />
        );
    }

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                content={<CircleButton icon="cart" disabled />}
                onBack={() => navigation.navigate('Request')}
            />
            <List
                style={{
                    width: '100%',
                    padding: 10,
                }}
                data={cart}
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
