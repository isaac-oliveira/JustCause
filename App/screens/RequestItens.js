import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, CircleButton } from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import CartItem from '../components/CartItem';
import Dialog from '../components/Dialog';
import { leftZero, getColorStatus } from '../util';

export default function({ navigation }) {
    const { dataApi } = useSelector(({ request }) => request);

    const { table, indexItem, screenBack } = navigation.state.params;
    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);


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
        const { status, observacao, valorUnidade, quantidade } = item;

        return (
            <CartItem
                statusColor={getColorStatus(status)}
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
                style={{
                    width: '100%',
                    padding: 10,
                }}
                data={dataApi[indexItem].itens}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <Dialog
                visible={visible}
                itens={itensDialog}
                onRequestClose={() => setVisible(false)}
            />
        </Container>
    );
}
