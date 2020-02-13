import React, { useState, useEffect } from 'react';

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
import Color from '../themes/Color';

import { leftZero, isEmpty, toMoney, getColorStatus } from '../util';

export default function({ navigation }) {
    const { table } = navigation.state.params;
    const [requests, setRequets] = useState([]);
    const [requestsApi, setRequetsApi] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function load() {
            const response = await JustCauseApi.getRequests(table.id);
            if (response.ok) {
                setRequetsApi(response.data);
                let aux = 0;
                const data = response.data.map(function(item, index) {
                    let checkedStatus = 0;
                    let statusRequest = 'enviado para cozinha';
                    let info = '';
                    let value = 0;
                    for (let i = 0; i < item.length; i++) {
                        const { observacao, montante, status } = item[i];
                        info += `${observacao.split(':')[0]}, `;
                        value += parseFloat(montante);
                        if (status === 'pronto' && checkedStatus != 1) {
                            checkedStatus = 2;
                        }
                        if (status === 'preparando') {
                            checkedStatus = 1;
                        }
                    }
                    if (checkedStatus != 0) {
                        statusRequest =
                            checkedStatus === 2 ? 'pronto' : 'preparando';
                    }
                    info = info.slice(0, info.length - 2);
                    aux += value;

                    return {
                        id: index,
                        info,
                        value,
                        status: statusRequest,
                    };
                });

                setTotal(aux);
                setRequets(data);
            }
        }
        load();
    }, [table.id]);

    function closeCount() {
        navigation.navigate('Table');
    }

    function add() {
        navigation.navigate('Category', { table });
    }

    function renderItem({ item, index }) {
        const { id, info, value, status } = item;

        return (
            <RequestItem
                key={`${id}`}
                label="Pedido"
                number={index + 1}
                info={info}
                value={value}
                statusColor={getColorStatus(status)}
                onPress={() =>
                    navigation.navigate('Cart', {
                        table,
                        item: requestsApi[id],
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
                data={requests}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <HorizontalView>
                <CircleButton icon="add" size={18} onPress={add} />
                {!isEmpty(requests) && (
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
    console.log(info.length);
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
