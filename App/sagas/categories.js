import { takeLatest, call, put } from 'redux-saga/effects';

import { CategoryTypes } from '../store/reducers/categories';
import JustCauseApi from '../services/JustCauseApi';

function* fetchCategories(action) {
    const response = yield call(JustCauseApi.getCategories);
    const { data } = response;
    console.tron.log(data);
    if (response.ok) {
        yield put({ type: CategoryTypes.CATEGORIES_RECEIVED, data });
    } else {
        const { message } = data;

        yield put({ type: CategoryTypes.CATEGORIES_FAILED, data: message });
    }
}

export const loadCategories = function*(action) {
    yield takeLatest(CategoryTypes.GET_CATEGORIES, fetchCategories);
};
