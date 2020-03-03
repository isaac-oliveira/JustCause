import React from 'react';

import {
    Container,
    CircleButton,
    Content,
    VerticalContainer,
    HorizontalContainer,
    LabelItem,
    NumberItem,
    InfoContainer,
    TextItem,
} from './styles/ItemStyles';

import Toolbar from '../components/Toolbar';
import PhotoItem from '../components/PhotoItem';
import { leftZero, toMoney } from '../util';

export default function({ navigation }) {
    const { table, item } = navigation.state.params;
    const { index, observacao, valorUnidade, quantidade } = item;

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                content={<CircleButton icon="cart" disabled />}
                onBack={() => navigation.goBack(null)}
            />
            <Content>
                <HorizontalContainer>
                    <VerticalContainer>
                        <LabelItem>Item</LabelItem>
                        <NumberItem>{leftZero(index + 1)}</NumberItem>
                    </VerticalContainer>
                    <PhotoItem
                        height={55}
                        column={2}
                        item={{
                            nome: observacao.split(':')[0],
                        }}
                    />
                </HorizontalContainer>
                <InfoContainer>
                    <TextItem>{observacao.split(':')[1]}</TextItem>
                    <HorizontalContainer>
                        <TextItem>x{quantidade}</TextItem>
                        <TextItem>{toMoney(valorUnidade)}</TextItem>
                        <TextItem>
                            Total: {toMoney(valorUnidade * quantidade)}
                        </TextItem>
                    </HorizontalContainer>
                </InfoContainer>
            </Content>
        </Container>
    );
}
