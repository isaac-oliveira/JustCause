import React from 'react';

import {
    Container,
    VerticalView,
    Label,
    Number,
    Info,
    InfoView,
} from './styles/RequestItemStyle';

import { leftZero } from '../util';

export default function({ label, item, onPress }) {
    const { number, request, value } = item;
    return (
        <Container onPress={onPress}>
            <VerticalView>
                <Label>{label}</Label>
                <Number>{leftZero(number)}</Number>
            </VerticalView>
            <InfoView>
                <Info>{request}</Info>
                <Info>R$ {`${value.toFixed(2)}`.replace('.', ',')}</Info>
            </InfoView>
        </Container>
    );
}
