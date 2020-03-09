import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HorizontalView, CircleButton } from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import { CartCreators } from '../store/reducers/cart';
import Color from '../themes/Color';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { data } = useSelector(({ cart }) => cart);
    const dispatch = useDispatch();

    const { table, screenBack } = navigation.state.params;
    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);

    function sendToChicken() {
        ToastAndroid.show('Enviado para a cozinha!', ToastAndroid.SHORT);
        dispatch(CartCreators.sendToKitchen(table.id, data));
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
            navigation.navigate('Item', {
                table,
                item: { ...item, index },
            });
        }

        function onLongPress() {
            setItensDialog([
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
        const { observacao, valorUnidade, quantidade } = item;

        return (
            <CartItem
                label="Item"
                number={index + 1}
                info={observacao}
                value={valorUnidade}
                count={quantidade}
                navigation={navigation}
                onPress={onPress}
                onLongPress={onLongPress}
            />
        );
    }
    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                content={<CircleButton icon="cart" disabled />}
                onBack={() => navigation.navigate(screenBack)}
            />
            <List
                data={data}
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
