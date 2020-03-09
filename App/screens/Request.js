import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import {
    HorizontalView,
    VerticalView,
    Total,
    Label,
    Value,
    CloseButton,
    CircleButton,
    ItemContainer,
    Status,
    VerticalContainer,
    LabelItem,
    NumberItem,
    InfoContainer,
    TextItem,
} from './styles/RequestStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import JustCauseApi from '../services/JustCauseApi';
import SocketIO from '../services/SocketIO';
import { RequestCreators } from '../store/reducers/request';
import Color from '../themes/Color';

import { leftZero, isEmpty, toMoney, getColorStatus } from '../util';

export default function({ navigation }) {
    const { table } = navigation.state.params;
    const { loading, data, total, dataApi, message } = useSelector(
        ({ request }) => request,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(RequestCreators.getRequests(table));
        return () => dispatch(RequestCreators.resetRequests());
    }, [dispatch, table]);

    useEffect(() => {
        async function load() {
            const socket = await SocketIO();
            socket.on('update item carrinho', function(item) {
                dispatch(RequestCreators.updateRequests(item));
                console.log('update item carrinho');
            });
            console.log('componentDidUpdate');
            
        }
        load();
    });

    function closeCount() {
        data.map(function(item) {
            const { id } = item;
            JustCauseApi.closeCount(id);
        });
        navigation.navigate('Table');
    }

    function add() {
        navigation.navigate('Category', { table });
    }

    function renderItem({ item, index }) {
        const { id, info, value, status } = item;

        return (
            <RequestItem
                label="Pedido"
                number={index + 1}
                info={info}
                value={value}
                statusColor={getColorStatus(status)}
                onPress={() =>
                    navigation.navigate('RequestItens', {
                        table,
                        itens: dataApi[index].itens,
                        screenBack: 'Request',
                    })
                }
            />
        );
    }

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                onBack={() => navigation.goBack(null)}
            />
            <List
                style={{ width: '100%', padding: 10 }}
                loading={loading}
                message={message}
                data={data}
                keyExtractor={item => toString(item.id)}
                renderItem={renderItem}
            />
            <HorizontalView>
                <CircleButton icon="add" size={18} onPress={add} />
                {!isEmpty(data) && (
                    <VerticalView>
                        <Total>
                            <Label>TOTAL: </Label>
                            <Value>{toMoney(total)}</Value>
                        </Total>
                        <CloseButton
                            title="Fechar a Conta"
                            background={Color.white}
                            elevation={3}
                            onPress={closeCount}
                        />
                    </VerticalView>
                )}
            </HorizontalView>
        </Container>
    );
}

function RequestItem({ number, info, value, statusColor, onPress }) {
    return (
        <ItemContainer onPress={onPress}>
            <Status color={statusColor} />
            <VerticalContainer>
                <LabelItem>Pedido</LabelItem>
                <NumberItem>{leftZero(number)}</NumberItem>
            </VerticalContainer>
            <InfoContainer>
                <TextItem>
                    {info.length > 20 ? info.slice(0, 20) + '...' : info}
                </TextItem>
                <TextItem>{toMoney(value)}</TextItem>
            </InfoContainer>
        </ItemContainer>
    );
}
