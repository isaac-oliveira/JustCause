import { all } from 'redux-saga/effects';

import { loginRequest, logoutRequest } from './employee';
import { loadTables, toggleTable } from './tables';
import { loadCategories } from './categories';
import { loadSubcategories } from './subcategories';
import { loadProducts } from './products';

function* sagas() {
    yield all([
        loginRequest(),
        logoutRequest(),
        loadTables(),
        toggleTable(),
        loadCategories(),
        loadSubcategories(),
        loadProducts(),
    ]);
}

export default sagas;
