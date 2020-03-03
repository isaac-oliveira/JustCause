import React from 'react';

import {
    ItemContainer,
    Status,
    VerticalContainer,
    HorizontalContainer,
    LabelItem,
    NumberItem,
    Info,
    Description,
    InfoView,
} from './styles/CartItemStyle';

import { leftZero } from '../util';

export default function CartItem({
    statusColor,
    number,
    label,
    info,
    value,
    count,
    onPress,
    onLongPress,
}) {
    return (
        <ItemContainer onPress={onPress} onLongPress={onLongPress}>
            <Status color={statusColor} />
            <VerticalContainer>
                <LabelItem>{label}</LabelItem>
                <NumberItem>{leftZero(number)}</NumberItem>
            </VerticalContainer>
            <InfoView>
                <HorizontalContainer>
                    <Info>x{`${count}`}</Info>
                    <Info>
                        R$ {`${parseFloat(value).toFixed(2)}`.replace('.', ',')}
                    </Info>
                    <Info>
                        Total: R${' '}
                        {`${parseFloat(value * count).toFixed(2)}`.replace(
                            '.',
                            ',',
                        )}
                    </Info>
                </HorizontalContainer>
            </InfoView>
            <Description>
                {info.length > 20 ? info.slice(0, 20) + '...' : info}
            </Description>
        </ItemContainer>
    );
}