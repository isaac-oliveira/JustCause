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

export default function({ number, label, info, value, onPress }) {
    return (
        <Container onPress={onPress}>
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
        </Container>
    );
}
