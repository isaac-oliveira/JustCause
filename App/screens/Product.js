import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import PhotoItem from '../components/PhotoItem';

import { ProductCreators } from '../store/reducers/products';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { categoryId, table } = navigation.state.params;
    const { loading, data, message } = useSelector(({ products }) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductCreators.getProducts(categoryId));
        return () => dispatch(ProductCreators.resetProducts());
    }, []);

    const renderItem = ({ item }) => {
        const { id, nome } = item;
        function onPress() {
            navigation.navigate('Subcategory', {
                product: item,
                table,
            });
        }
        return <PhotoItem column={2} item={item} onPress={onPress} />;
    };

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                onBack={() => navigation.goBack(null)}
            />
            <List
                style={{ alignSelf: 'center', flex: 1 }}
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
