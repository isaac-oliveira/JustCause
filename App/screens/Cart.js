import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    HorizontalView,
    CircleButton,
    ItemContainer,
    VerticalView,
    Label,
    Number,
    Info,
    InfoView,
} from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import { CartCreators } from '../store/reducers/cart';
import Color from '../themes/Color';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { data } = useSelector(({ cart }) => cart);
    const dispatch = useDispatch();

    const { table, item } = navigation.state.params;
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
            setItensDialog([
                {
                    title: 'Abrir',
                    icon: 'open',
                    click: () =>
                        navigation.navigate('Item', {
                            table,
                            item: { ...item, index },
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
            <CartItem
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
                data={item ? item : data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            {!item && (
                <HorizontalView>
                    <Button
                        title="Enviar para cozinha"
                        background={Color.white}
                        elevation={3}
                        onPress={sendToChicken}
                    />
                    <CircleButton icon="add" size={18} onPress={add} />
                </HorizontalView>
            )}
            <Dialog
                visible={visible}
                itens={itensDialog}
                onRequestClose={() => setVisible(false)}
            />
        </Container>
    );
}

function CartItem({ number, label, info, value, onPress }) {
    return (
        <ItemContainer onPress={onPress}>
            <VerticalView>
                <Label>{label}</Label>
                <Number>{leftZero(number)}</Number>
            </VerticalView>
            <InfoView>
                <Info>{info}</Info>
                <Info>
                    R$ {`${parseFloat(value).toFixed(2)}`.replace('.', ',')}
                </Info>
            </InfoView>
        </ItemContainer>
    );
}
