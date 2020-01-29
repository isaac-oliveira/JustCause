import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    CategoryContainer,
    Photo,
    Title,
    Gradient,
} from './styles/CategoryStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';

import { CategoryCreators } from '../store/reducers/categories';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { number, screenBack } = navigation.state.params;

    const { loading, data, message } = useSelector(
        ({ categories }) => categories,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CategoryCreators.getCategories());
    }, [dispatch]);

    const renderItem = ({ item }) => {
        const { id } = item;

        function onPress() {
            navigation.navigate('Product', { number, categoryId: id });
        }
        return <CategoryItem item={item} onPress={onPress} />;
    };

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(number)}`}
                onBack={() =>
                    navigation.navigate(screenBack ? screenBack : 'Request', {
                        number,
                    })
                }
            />
            <List
                style={{ padding: 5 }}
                data={data}
                loading={loading}
                message={message}
                keyExtractor={item => toString(item.id)}
                renderItem={renderItem}
            />
        </Container>
    );
}

function CategoryItem({ item, onPress }) {
    const { nome } = item;

    return (
        <CategoryContainer onPress={onPress}>
            <Photo source={require('../assets/pizza.jpg')} />
            <Gradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.4, 0.7]}
                colors={[
                    'rgba(0, 0, 0, .7)',
                    'rgba(0, 0, 0, .5)',
                    'rgba(0, 0, 0, .0)',
                ]}
            />
            <Title>{nome}</Title>
        </CategoryContainer>
    );
}
