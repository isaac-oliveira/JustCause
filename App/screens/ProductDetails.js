import React, { useEffect } from 'react';
import { SectionList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import {
    SectionHeader,
    Touchable,
    ContainerItem,
    TitleItem,
    CheckBoxItem,
    ComboBoxItem,
    Divider,
} from './styles/ProductDetailsStyle';

import Toolbar from '../components/Toolbar';
import { SubcategoryCreators } from '../store/reducers/subcategories';

export default function({ navigation }) {
    const { productId, productName, number } = navigation.state.params;
    const { data } = useSelector(({ subcategories }) => subcategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SubcategoryCreators.getSubcategories(productId));
    });

    const renderSectionHeader = ({ section }) => {
        const { title } = section;
        return <SectionHeader>{title}</SectionHeader>;
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
            <SectionList
                sections={data}
                keyExtractor={item => item.id}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSectionItem}
            />
        </Container>
    );
}

function Item({ item, currentItem = null, isLast, onPress }) {
    const { id, title, selected } = item;
    return (
        <Touchable onPress={onPress}>
            <ContainerItem>
                <TitleItem>{title}</TitleItem>
                {currentItem && (
                    <ComboBoxItem checked={id === currentItem.id} />
                )}
                {!currentItem && <CheckBoxItem checked={selected} />}
                {!isLast && <Divider />}
            </ContainerItem>
        </Touchable>
    );
}
