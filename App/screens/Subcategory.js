import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import {
    Title,
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
import HeaderList from '../components/HeaderList';
import { SubcategoryCreators } from '../store/reducers/subcategories';
import Color from '../themes/Color';
import { toMoney, leftZero } from '../util';

export default function({ navigation }) {
    const { product, number } = navigation.state.params;
    const { id: productId, nome: productName, valor: productValue } = product;
    const { loading, data, message } = useSelector(
        ({ subcategories }) => subcategories,
    );
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [valueUnit, setValueUnit] = useState(parseFloat(productValue));
    const [value, setValue] = useState(parseFloat(productValue));

    useEffect(() => {
        dispatch(SubcategoryCreators.getSubcategories(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        setValue(valueUnit * count);
    }, [valueUnit, count]);

    const renderValue = () => <Title>{toMoney(value)}</Title>;

    const renderSectionHeader = ({ section }) => {
        const { nome } = section;
        return <SectionHeader>{nome}</SectionHeader>;
    };

    const renderSectionItem = ({ section, item, index }) => {
        const isLast = index === section.data.length - 1;
        if (section.singleSelection) {
            const { currentItem } = section;
            function onPress() {
                if (currentItem.id !== item.id) {
                    let aux = valueUnit;
                    if (currentItem.valor) {
                        console.log('Diminuiu!');
                        aux -= parseFloat(currentItem.valor);
                    } else {
                        console.log('Not Diminuiu!');
                    }
                    section.currentItem = item;
                    setValueUnit(aux + parseFloat(item.valor));
                } else {
                    setValueUnit(valueUnit - parseFloat(currentItem.valor));
                    section.currentItem = {};
                }
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
                setValueUnit(
                    valueUnit +
                        parseFloat(item.valor) * (item.selected ? 1 : -1),
                );
                dispatch(SubcategoryCreators.refresh(data));
            }
            return <Item item={item} isLast={isLast} onPress={onPress} />;
        }
    };

    return (
        <Container>
            <Toolbar
                title={productName}
                content={renderValue()}
                onBack={() => navigation.goBack()}
            />
            <HeaderList
                sections={data}
                loading={loading}
                message={message}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSectionItem}
            />
            <Horizontal>
                <Form>
                    <Label>Qtd: </Label>
                    <Input
                        defaultValue={`${count}`}
                        onChangeText={text => {
                            if (text.trim() !== '0' && text.trim() !== '') {
                                setCount(parseInt(text));
                            }
                        }}
                    />
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
