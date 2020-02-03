import { takeLatest, call, put } from 'redux-saga/effects';

import { SubcategoryTypes } from '../store/reducers/subcategories';
import JustCauseApi from '../services/JustCauseApi';

function* fetchSubcategories(action) {
    const { productId } = action.payload;
    const response = yield call(JustCauseApi.getSubcategories, productId);
    const responseItens = yield call(JustCauseApi.getItens);
    if (response.ok) {
        const data = response.data.map(function(item) {
            const { id, nome, tipo } = item;
            const singleSelection = tipo === 'radio button';
            let dataItem = responseItens.data.filter(
                elem => id === elem.idSubcategoria,
            );
            if (singleSelection) {
                return {
                    id,
                    nome,
                    singleSelection,
                    currentItem: {},
                    data: dataItem,
                };
            } else {
                dataItem = dataItem.map(elem => {
                    return { ...elem, selected: false };
                });
                return { id, nome, singleSelection, data: dataItem };
            }
        });
        yield put({ type: SubcategoryTypes.SUBCATEGORIES_RECEIVED, data });
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
