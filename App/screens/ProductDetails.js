import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import {
    Section,
    Horizontal,
    Form,
    Label,
    Input,
    SectionHeader,
    Touchable,
    ContainerItem,
    TitleItem,
    CheckBoxItem,
    ComboBoxItem,
    Divider,
} from './styles/ProductDetailsStyle';

import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import { SubcategoryCreators } from '../store/reducers/subcategories';
import Color from '../themes/Color';

export default function({ navigation }) {
    const { productId, productName, number } = navigation.state.params;
    const { data } = useSelector(({ subcategories }) => subcategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SubcategoryCreators.getSubcategories(productId));
    }, [dispatch, productId]);

    const renderSectionHeader = ({ section }) => {
        const { nome } = section;
        return <SectionHeader>{nome}</SectionHeader>;
    };

    const renderSectionItem = ({ section, item, index }) => {
        const isLast = index === section.data.length - 1;
        if (section.singleSelection) {
            const { currentItem } = section;
            function onPress() {
                section.currentItem = currentItem.id !== item.id ? item : {};
                dispatch(SubcategoryCreators.refresh(data));
            }
            return (
                <Item
                    item={item}
                    currentItem={currentItem}
                    isLast={isLast}
                    onPress={onPress}
                />
            );
        } else {
            function onPress() {
                item.selected = !item.selected;
                dispatch(SubcategoryCreators.refresh(data));
            }
            return <Item item={item} isLast={isLast} onPress={onPress} />;
        }
    };

    return (
        <Container>
            <Toolbar title={productName} onBack={() => navigation.goBack()} />
            <Section
                sections={data}
                keyExtractor={item => item.id}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSectionItem}
            />
            <Horizontal>
                <Form>
                    <Label>Qtd: </Label>
                    <Input defaultValue="01" />
                </Form>
                <Button
                    title="Adicionar"
                    background={Color.primary}
                    onPress={() => navigation.navigate('Cart', { number })}
                />
            </Horizontal>
        </Container>
    );
}

function Item({ item, currentItem = null, isLast, onPress }) {
    const { id, nome, selected } = item;
    return (
        <Touchable onPress={onPress}>
            <ContainerItem>
                <TitleItem>{nome}</TitleItem>
                {currentItem && (
                    <ComboBoxItem checked={id === currentItem.id} />
                )}
                {!currentItem && <CheckBoxItem checked={selected} />}
                {!isLast && <Divider />}
            </ContainerItem>
        </Touchable>
    );
}
