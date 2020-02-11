import React, { useState, useEffect }  from 'react';

import { Container } from './styles';
import {
    HorizontalView,
    VerticalView,
    Total,
    Label,
    Value,
    CloseButton,
    CircleButton,
} from './styles/RequestStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import RequestItem from '../components/RequestItem';
import JustCauseApi from '../services/JustCauseApi';
import Color from '../themes/Color';

import { leftZero, isEmpty } from '../util';

export default function({ navigation }) {
    const { table } = navigation.state.params;
    const [requests, setRequets] = useState([]);
    useEffect(() => {
        async function load() {
            const response = await JustCauseApi.getRequests(table.id);
            if(response.ok)
                setRequets(response.data[0]);
        }
        load();
    }, []);

    function closeCount() {
        navigation.navigate('Table');
    }

    function add() {
        navigation.navigate('Category', { table });
    }

    function renderItem({ item, index }) {
        const { observacao, valorUnidade } = item;
        
        return (
            <RequestItem
                label="Pedido"
                number={index + 1}
                info={observacao}
                value={valorUnidade}
                onPress={() => navigation.navigate('Cart', { table })}
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
                            <Value>R$ 80,00</Value>
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
