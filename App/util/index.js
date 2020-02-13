import Color from '../themes/Color';

export const toMoney = function(value) {
    const aux = parseFloat(value);
    return `R$ ${aux.toFixed(2)}`.replace('.', ',');
};

export const leftZero = function(value) {
    return value <= 9 ? `0${value}` : value;
};

export const getColorStatus = function(status) {
    switch(status) {
        case 'pronto':
            return Color.cardEnabled;
        case 'preparando':
            return Color.prepared;
        default:
            return Color.cardDisabled;
    }
}

export const isEmpty = function(list) {
    return list.length === 0;
};
