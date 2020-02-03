const INITIAL_STATE = {
    loading: false,
    data: [
        {
            id: 2,
            nome: 'Pizza',
            valor: '35',
            disponivel: true,
        },
    ],
    message: null,
};

//Actions
export const ProductTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    PRODUCTS_RECEIVED: 'PRODUCTS_RECEIVED',
    PRODUCTS_FAILED: 'PRODUCTS_FAILED',
};

//Creators
function getProducts(categoryId) {
    return { type: ProductTypes.GET_PRODUCTS, payload: { categoryId } };
}

export const ProductCreators = {
    getProducts,
};

//reducer
export default function Products(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case ProductTypes.PRODUCTS_RECEIVED:
            return { loading: false, data };
        case ProductTypes.GET_PRODUCTS:
            return INITIAL_STATE;
        case ProductTypes.PRODUCTS_FAILED:
            return { loading: false, data: [], message: data };
        default:
            return state;
    }
}
