const INITIAL_STATE = {
    loading: true,
    data: [],
    message: null,
};

//Actions
export const TableTypes = {
    GET_TABLES: 'GET_TABLES',
    TABLES_RECEIVED: 'TABLES_RECEIVED',
    TABLES_FAILED: 'TABLES_FAILED',
};

//Creators
function getTables() {
    return { type: TableTypes.GET_TABLES };
}

export const TableCreators = {
    getTables,
};

//reducer
export default function Tables(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case TableTypes.TABLES_RECEIVED:
            return { loading: false, data };
        case TableTypes.GET_TABLES:
            return INITIAL_STATE;
        case TableTypes.TABLES_FAILED:
            return { loading: false, data: [], message: data };
        default:
            return state;
    }
}
