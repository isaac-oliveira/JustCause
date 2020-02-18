import { takeLatest, call, put } from 'redux-saga/effects';

import { TableTypes } from '../store/reducers/tables';
import JustCauseApi from '../services/JustCauseApi';

function* fetchTables(action) {
    const response = yield call(JustCauseApi.getTables);
    const { data } = response;
    if (response.ok) {
        yield put({ type: TableTypes.TABLES_RECEIVED, data });
    } else {
        const { message } = data;

        yield put({ type: TableTypes.TABLES_FAILED, data: message });
    }
}

function* fetchToggle(action) {
    const { table } = action.payload;
    const response = yield call(JustCauseApi.toggleTable, table);
    const { data } = response;
    if (response.ok) {
        yield call(fetchTables);
    } else {
        const { message } = data;
        yield put({ type: TableTypes.TABLES_FAILED, data: message });
    }
}

export const updateTable = function*(action) {
    yield takeLatest(TableTypes.UPDATE_TABLES, fetchTables);
};

export const toggleTable = function*(action) {
    yield takeLatest(TableTypes.TABLE_TOGGLE, fetchToggle);
};

export const loadTables = function*(action) {
    yield takeLatest(TableTypes.GET_TABLES, fetchTables);
};
