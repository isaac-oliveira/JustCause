import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Toolbar from '../components/Toolbar';
import List from '../components/List';
import PhotoItem from '../components/PhotoItem';

import { CategoryCreators } from '../store/reducers/categories';
import { leftZero } from '../util';

export default function({ navigation }) {
    const { table, screenBack } = navigation.state.params;

    const { loading, data, message } = useSelector(
        ({ categories }) => categories,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CategoryCreators.getCategories());
        return () => dispatch(CategoryCreators.resetCategories());
    }, [dispatch]);

    const renderItem = ({ item }) => {
        const { id } = item;

        function onPress() {
            navigation.navigate('Product', { table, categoryId: id });
        }
        return <PhotoItem item={item} onPress={onPress} />;
    };

    return (
        <Container>
            <Toolbar
                title={`Mesa ${leftZero(table.number)}`}
                onBack={() =>
                    navigation.navigate(screenBack ? screenBack : 'Request', {
                        table,
                    })
                }
            />
            <List
                data={data}
                loading={loading}
                message={message}
                keyExtractor={item => toString(item.id)}
                renderItem={renderItem}
            />
        </Container>
    );
}
