import { all } from 'redux-saga/effects';

import { loginRequest, logoutRequest } from './employee';
import { loadTables } from './tables';
import { loadCategories } from './categories';
import { loadProducts } from './products';

function* sagas() {
    yield all([
        loginRequest(),
        logoutRequest(),
        loadTables(),
        loadCategories(),
        loadProducts(),
    ]);
}

export default sagas;
