import React from 'react';

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

import Color from '../themes/Color';

import { leftZero, isEmpty } from '../util';

import { requests } from '../data';

export default function({ navigation }) {
    const { number } = navigation.state.params;

    function closeCount() {
        navigation.navigate('Table');
    }

    function add() {
        navigation.navigate('Category', { number });
    }

    function renderItem({ item }) {
        return (
            <RequestItem
                label="Pedido"
                item={item}
                onPress={() => navigation.navigate('Cart', { number })}
            />
        );
    }

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(number)}`}
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
