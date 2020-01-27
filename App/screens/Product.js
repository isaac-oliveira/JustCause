import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';

import Toolbar from '../components/Toolbar';
import { leftZero } from '../util';

import {
    Container,
    HorizontalView,
    InputQtd,
    AddButton,
    Form,
    Label,
    HeaderContainer,
    HeaderTitle,
    ItemContainer,
    ItemTitle,
    ComboBox,
    Divider,
} from './styles/ProductStyle';

import JustCauseApi from '../services/JustCauseApi';
import Color from '../themes/Color';

import { group } from '../data';

export default function({ navigation }) {
    const { number } = navigation.state.params;
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        const response = JustCauseApi.getSubategories();

        console.log(response);
        setSubcategories(group);
    }, []);

    function add() {
        navigation.navigate('Cart', { number });
    }

    const renderSectionHeader = ({ section }) => (
        <SectionHeader title={section.title} />
    );

    const renderItem = ({ index, section: { data }, item }) => {
        const isLast = index == data.length - 1;

        return <SectionItem isLast={isLast} item={item} />;
    };

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(number)}`}
                onBack={() => navigation.goBack(null)}
            />
            <SectionList
                style={{ flex: 1 }}
                sections={subcategories}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
            />
            <HorizontalView>
                <Form>
                    <Label>Qtd: </Label>
                    <InputQtd
                        defaultValue={leftZero(1)}
                        keyboardType="number-pad"
                    />
                </Form>
                <AddButton
                    title="Adicionar"
                    background={Color.primary}
                    onPress={add}
                />
            </HorizontalView>
        </Container>
    );
}

function SectionHeader({ title }) {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    );
}

function SectionItem({ isLast, item }) {
    const { title, active } = item;

    return (
        <ItemContainer>
            <ItemTitle>{title}</ItemTitle>
            <ComboBox active={active} />
            {!isLast && <Divider />}
        </ItemContainer>
    );
}
