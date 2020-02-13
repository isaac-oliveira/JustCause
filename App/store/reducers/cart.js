INITIAL_STATE = {
    lastId: 0,
    data: []
}

export const CartType = {
    ADD_IN_CART:"ADD_IN_CART",
    SEND_TO_KITCHEN:"SEND_TO_KITCHEN",
    SEND_TO_KITCHEN_SUCESS:"SEND_TO_KITCHEN_SUCESS"
}

function addInCart(item) {
    return {
        type: CartType.ADD_IN_CART,
        payload: item
    }
}

function sendToKitchen(mesaId, itens) {
    return {
        type: CartType.SEND_TO_KITCHEN,
        payload: {
            mesaId,
            itens
        }
    }
}

export const CartCreators = {
    addInCart,
    sendToKitchen
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CartType.ADD_IN_CART:
            return { lastId: state.lastId + 1, data: [...state.data, action.payload]};
        case CartType.SEND_TO_KITCHEN_SUCESS:
            return { ...state, data: []};
        default:
            return state;
    }
}