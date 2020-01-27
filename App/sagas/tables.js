import { takeLatest, call, put } from 'redux-saga/effects';

import { TableTypes } from '../store/reducers/tables';
import JustCauseApi from '../services/JustCauseApi';

function* fetchTables(action) {
    const response = yield call(JustCauseApi.getTables);
    const { data } = response;
    console.tron.log(data);
    if (response.ok) {
        yield put({ type: TableTypes.TABLES_RECEIVED, data });
    } else {
        const { message } = data;

        yield put({ type: TableTypes.TABLES_FAILED, data: message });
    }
}

export const loadTables = function*(action) {
    yield takeLatest(TableTypes.GET_TABLES, fetchTables);
};
