import { takeLatest, call, put } from 'redux-saga/effects';

import { SubcategoryTypes } from '../store/reducers/subcategories';
import JustCauseApi from '../services/JustCauseApi';

function* fetchSubcategories(action) {
    const { productId } = action.payload;
    const response = yield call(JustCauseApi.getSubcategories, productId);
    if (response.ok) {
        const { data } = response;
        const dataSubcategories = [];
        // uso do for por conta do saga
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const { id, nome, tipo } = item;
            const singleSelection = tipo === 'radio button';
            const responseItens = yield call(
                JustCauseApi.getSubcategoryItens,
                id,
            );
            let dataItem = responseItens.data;
            if (singleSelection) {
                dataSubcategories.push({
                    id,
                    nome,
                    singleSelection,
                    currentItem: {},
                    data: dataItem,
                });
            } else {
                dataItem = dataItem.map(elem => {
                    return { ...elem, selected: false };
                });
                dataSubcategories.push({
                    id,
                    nome,
                    singleSelection,
                    data: dataItem,
                });
            }
        }
        yield put({
            type: SubcategoryTypes.SUBCATEGORIES_RECEIVED,
            data: dataSubcategories,
        });
    } else {
        const { message } = response.data;

        yield put({
            type: SubcategoryTypes.SUBCATEGORIES_FAILED,
            data: message,
        });
    }
}

export const loadSubcategories = function*(action) {
    yield takeLatest(SubcategoryTypes.GET_SUBCATEGORIES, fetchSubcategories);
};
