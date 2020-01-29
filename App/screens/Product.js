import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    ContainerItem,
    Photo,
    Title,
    Gradient,
} from './styles/ProductStyle';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import { ProductCreators } from '../store/reducers/products';
import JustCauseApi from '../services/JustCauseApi';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { categoryId, number } = navigation.state.params;
    const { loading, data, message } = useSelector(({ products }) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductCreators.getProducts(categoryId));
    }, [categoryId, dispatch]);

    const renderItem = ({ item }) => {
        const { nome } = item;
        function onPress() {
            navigation.navigate('ProductDetails', {
                productName: nome,
                number,
            });
        }
        return <Item item={item} onPress={onPress} />;
    };

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(number)}`}
                onBack={() => navigation.goBack(null)}
            />
            <List
                style={{ alignSelf: 'center', flex: 1, padding: 10 }}
                data={data}
                loading={loading}
                message={message}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </Container>
    );
}

function Item({ item, onPress }) {
    const { nome } = item;

    return (
        <ContainerItem onPress={onPress}>
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
        </ContainerItem>
    );
}
