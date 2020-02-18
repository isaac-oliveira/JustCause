import { all } from 'redux-saga/effects';

import { loginRequest, logoutRequest } from './employee';
import { loadTables, updateTable, toggleTable } from './tables';
import { loadCategories } from './categories';
import { loadSubcategories } from './subcategories';
import { loadProducts } from './products';
import { sendToKitchen } from './cart';

function* sagas() {
    yield all([
        loginRequest(),
        logoutRequest(),
        loadTables(),
        updateTable(),
        toggleTable(),
        loadCategories(),
        loadSubcategories(),
        loadProducts(),
        sendToKitchen(),
    ]);
}

export default sagas;
