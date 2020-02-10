INITIAL_STATE = []

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

function sendToKitchen() {
    return {
        type: CartType.SEND_TO_KITCHEN,
    }
}

export const CartCreators = {
    addInCart,
    sendToKitchen
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CartType.ADD_IN_CART:
            return [...state, action.payload]
        case CartType.SEND_TO_KITCHEN_SUCESS:
            return []
        default:
            return state
    }
}