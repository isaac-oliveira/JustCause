import React from 'react';

import { ContainerItem, Photo, Title, Gradient } from './styles/PhotoItemStyle';

export default function({ height, column = 1, item, onPress }) {
    const { nome } = item;

    return (
        <ContainerItem onPress={onPress}>
            <Photo
                height={height}
                source={require('../assets/pizza.jpg')}
                column={column}
            />
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
