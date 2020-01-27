const INITIAL_STATE = {
    loading: true,
    data: [],
    message: null,
};

//Actions
export const CategoryTypes = {
    GET_CATEGORIES: 'GET_CATEGORIES',
    CATEGORIES_RECEIVED: 'CATEGORIES_RECEIVED',
    CATEGORIES_FAILED: 'CATEGORIES_FAILED',
};

//Creators
function getCategories() {
    return { type: CategoryTypes.GET_CATEGORIES };
}

export const CategoryCreators = {
    getCategories,
};

//reducer
export default function Categories(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case CategoryTypes.CATEGORIES_RECEIVED:
            return { loading: false, data };
        case CategoryTypes.GET_CATEGORIES:
            return INITIAL_STATE;
        case CategoryTypes.CATEGORIES_FAILED:
            return { loading: false, data: [], message: data };
        default:
            return state;
    }
}
