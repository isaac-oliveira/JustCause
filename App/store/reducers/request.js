const INITIAL_STATE = {
    loading: true,
    data: [],
    dataApi: [],
    total: 0,
    message: null,
};

//Actions
export const RequestTypes = {
    GET_REQUETS: 'GET_REQUETS',
    UPDATE_REQUETS: 'UPDATE_REQUETS',
    REQUETS_RECEIVED: 'REQUETS_RECEIVED',
    REQUETS_FAILED: 'REQUETS_FAILED',
};

//Creators
function getRequests(table) {
    return { type: RequestTypes.GET_REQUETS, payload: table };
}

function updateRequests(table) {
    return { type: RequestTypes.UPDATE_REQUETS, payload: table };
}

export const RequestCreators = {
    getRequests,
    updateRequests,
};

//reducer
export default function Requests(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case RequestTypes.REQUETS_RECEIVED:
            return { loading: false, ...payload };
        case RequestTypes.GET_REQUETS:
            return INITIAL_STATE;
        case RequestTypes.REQUETS_FAILED:
            return { loading: false, data: [], message: payload };
        default:
            return state;
    }
}