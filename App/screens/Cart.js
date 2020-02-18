import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    HorizontalView,
    CircleButton,
    ItemContainer,
    Status,
    VerticalContainer,
    LabelItem,
    NumberItem,
    Info,
    InfoView,
} from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import { CartCreators } from '../store/reducers/cart';
import Color from '../themes/Color';
import { leftZero, getColorStatus } from '../util';

export default function({ navigation }) {
    const { data } = useSelector(({ cart }) => cart);
    const dispatch = useDispatch();

    const { table, itemRequests, screenBack } = navigation.state.params;
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
        const { status, observacao, valorUnidade } = item;

        return (
            <CartItem
                statusColor={itemRequests ? getColorStatus(status) : null}
                label="Item"
                number={index + 1}
                info={observacao}
                value={valorUnidade}
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
                style={{
                    width: '100%',
                    padding: 10,
                }}
                data={itemRequests ? itemRequests : data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            {!itemRequests && (
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

function CartItem({
    statusColor,
    number,
    label,
    info,
    value,
    onPress,
    onLongPress,
}) {
    return (
        <ItemContainer onPress={onPress} onLongPress={onLongPress}>
            {statusColor && <Status color={statusColor} />}
            <VerticalContainer>
                <LabelItem>{label}</LabelItem>
                <NumberItem>{leftZero(number)}</NumberItem>
            </VerticalContainer>
            <InfoView>
                <Info>
                    {info.length > 20 ? info.slice(0, 20) + '...' : info}
                </Info>
                <Info>
                    R$ {`${parseFloat(value).toFixed(2)}`.replace('.', ',')}
                </Info>
            </InfoView>
        </ItemContainer>
    );
}
