import React from 'react';

import { Container, List, Progress, Message } from './styles/ListStyle';

import { isEmpty } from '../util';

export default function({
    style,
    data,
    keyExtractor,
    renderItem,
    numColumns,
    loading,
    message,
}) {
    return (
        <Container>
            {loading && <Progress />}
            {!loading && isEmpty(data) && (
                <Message>
                    {message ? message : 'Nenhum item encontrado'}
                </Message>
            )}
            <List
                data={data}
                contentContainerStyle={style}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                numColumns={numColumns}
            />
        </Container>
    );
}
