const INITIAL_STATE = {
    loading: true,
    data: [],
    message: null,
};

//Actions
export const TableTypes = {
    GET_TABLES: 'GET_TABLES',
    UPDATE_TABLES: 'UPDATE_TABLES',
    RESET_TABLES: 'RESET_TABLES',
    TABLES_RECEIVED: 'TABLES_RECEIVED',
    TABLES_FAILED: 'TABLES_FAILED',
    TABLE_TOGGLE: 'TABLE_TOGGLE',
};

//Creators
function getTables() {
    return { type: TableTypes.GET_TABLES };
}

function updateTables() {
    return { type: TableTypes.UPDATE_TABLES };
}

function resetTables() {
    return { type: TableTypes.RESET_TABLES };
}

function getTableToggle(table) {
    return { type: TableTypes.TABLE_TOGGLE, payload: { table } };
}

export const TableCreators = {
    getTables,
    updateTables,
    resetTables,
    getTableToggle,
};

//reducer
export default function Tables(state = INITIAL_STATE, { type, data }) {
    switch (type) {
        case TableTypes.TABLES_RECEIVED:
            return { loading: false, data };
        case TableTypes.GET_TABLES:
        case TableTypes.RESET_TABLES:
            return INITIAL_STATE;
        case TableTypes.TABLES_FAILED:
            return { loading: false, data: [], message: data };
        default:
            return state;
    }
}
