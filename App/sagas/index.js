import { all } from 'redux-saga/effects';

import { loginRequest, logoutRequest } from './employee';
import { loadTables, updateTable, toggleTable } from './tables';
import { loadCategories } from './categories';
import { loadSubcategories } from './subcategories';
import { loadProducts } from './products';
import { sendToKitchen } from './cart';
import { loadRequests, updateRequest } from './request';

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
        loadRequests(),
        updateRequest(),
    ]);
}

export default sagas;
