import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    TableContainer,
    SeatContainer,
    SeatTop,
    Content,
    Title,
    State,
    SeatBottom,
} from './styles/TableStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import Dialog from '../components/Dialog';

import { TableCreators } from '../store/reducers/tables';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { loading, data, message } = useSelector(({ tables }) => tables);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [itensDialog, setItensDialog] = useState([]);

    useEffect(() => {
        dispatch(TableCreators.getTables());
    }, [dispatch]);

    function renderItem({ item }) {
        const { number, disponibilidade } = item;

        const onPress = () => {
            navigation.navigate('Request', { number });
        };

        const onLongPress = () => {
            setItensDialog([
                {
                    title: 'Abrir',
                    icon: 'open',
                    click: onPress,
                },
                {
                    title: disponibilidade ? 'Ocupar' : 'Desocupar',
                    icon: 'state',
                },
            ]);
            setVisible(true);
        };

        return (
            <TableItem
                item={item}
                onPress={onPress}
                onLongPress={onLongPress}
            />
        );
    }

    return (
        <Container>
            <Toolbar title="Mesas" onBack={() => navigation.goBack(null)} />
            <List
                style={{ alignSelf: 'center', flex: 1, padding: 10 }}
                data={data}
                loading={loading}
                message={message}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
            <Dialog
                visible={visible}
                itens={itensDialog}
                onRequestClose={() => setVisible(false)}
            />
        </Container>
    );
}

function TableItem({ item, onPress, onLongPress }) {
    const { number, disponibilidade } = item;
    return (
        <TableContainer onPress={onPress} onLongPress={onLongPress}>
            <SeatContainer>
                <SeatTop />
                <SeatTop />
            </SeatContainer>
            <Content status={disponibilidade}>
                <Title>{leftZero(number)}</Title>
                <State>{disponibilidade ? 'Disponível' : 'Ocupado'}</State>
            </Content>
            <SeatContainer>
                <SeatBottom />
                <SeatBottom />
            </SeatContainer>
        </TableContainer>
    );
}
