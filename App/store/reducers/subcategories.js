const INITIAL_STATE = {
    loading: true,
    data: [
        {
            id: '1',
            title: 'Tamanho',
            singleSelection: true,
            currentItem: {},
            data: [
                {
                    id: '1',
                    title: 'Família',
                },
                {
                    id: '2',
                    title: 'Grande',
                },
            ],
        },
        {
            id: '2',
            title: 'Sabor',
            singleSelection: false,
            data: [
                {
                    id: '1',
                    title: 'Frango',
                    selected: false,
                },
                {
                    id: '2',
                    title: 'Calabresa',
                    selected: false,
                },
            ],
        },
    ],
    message: null,
};

//Actions
export const SubcategoryTypes = {
    GET_SUBCATEGORIES: 'GET_SUBCATEGORIES',
    SUBCATEGORIES_RECEIVED: 'SUBCATEGORIES_RECEIVED',
    SUBCATEGORIES_FAILED: 'SUBCATEGORIES_FAILED',
    REFRESH: 'REFRESH',
};

//Creators
function getSubcategories(productId) {
    return { type: SubcategoryTypes.GET_SUBCATEGORIES, payload: { productId } };
}

function refresh(data) {
    return { type: SubcategoryTypes.REFRESH, data };
}

export const SubcategoryCreators = {
    getSubcategories,
    refresh,
};

//reducer
export default function Subcategories(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case SubcategoryTypes.SUBCATEGORIES_RECEIVED:
        case SubcategoryTypes.REFRESH:
            return { loading: false, data };
        case SubcategoryTypes.GET_SUBCATEGORIES:
            return INITIAL_STATE;
        case SubcategoryTypes.SUBCATEGORIES_FAILED:
            return { loading: false, data: [], message: data };
        default:
            return state;
    }
}
