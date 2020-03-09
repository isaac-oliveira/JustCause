import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles/CartStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import CartItem from '../components/CartItem';
import Dialog from '../components/Dialog';
import SocketIO from '../services/SocketIO';
import { RequestCreators } from '../store/reducers/request';
import { leftZero, getColorStatus } from '../util';

export default function({ navigation }) {
    const dispatch = useDispatch();

    const { table, itens, screenBack } = navigation.state.params;
    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);
    const [data, setData] = useState(itens);

    useEffect(() => {
        async function load() {
            const socket = await SocketIO();
            socket.on('update item carrinho', function(elem) {
                dispatch(RequestCreators.updateRequests(table));

                const newData = data.map(function(item) {
                    if (item.id === elem.id) {
                        return elem;
                    }
                    return item;
                });
                setData(newData);
                console.log('update item carrinho');
            });
        }
        load();
    });

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
                onBack={() => navigation.navigate(screenBack)}
            />
            <List
                style={{
                    width: '100%',
                    padding: 10,
                }}
                data={data}
                keyExtractor={item => toString(item.id)}
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
