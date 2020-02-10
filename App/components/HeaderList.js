import React from 'react';
import {
    Container,
    HeaderList,
    Progress,
    Message,
} from './styles/HeaderListStyle';
import { isEmpty } from '../util';

export default function({
    sections,
    renderSectionHeader,
    renderItem,
    loading,
    message,
}) {
    return (
        <Container>
            {loading && <Progress />}
            {!loading && isEmpty(sections) && (
                <Message>
                    {message ? message : 'Nenhum item encontrado'}
                </Message>
            )}
            <HeaderList
                sections={sections}
                keyExtractor={item => item.id}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
            />
        </Container>
    );
}
