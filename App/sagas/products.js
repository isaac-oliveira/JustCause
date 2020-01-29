import { takeLatest, call, put } from 'redux-saga/effects';

import { ProductTypes } from '../store/reducers/products';
import JustCauseApi from '../services/JustCauseApi';

function* fetchProducts(action) {
    const { categoryId } = action.payload;
    const response = yield call(JustCauseApi.getProducts, categoryId);
    const { data } = response;
    console.tron.log(data);
    if (response.ok) {
        yield put({ type: ProductTypes.PRODUCTS_RECEIVED, data });
    } else {
        const { message } = data;

        yield put({ type: ProductTypes.PRODUCTS_FAILED, data: message });
    }
}

export const loadProducts = function*(action) {
    yield takeLatest(ProductTypes.GET_PRODUCTS, fetchProducts);
};
