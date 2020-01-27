import { all } from 'redux-saga/effects';

import { loginRequest, logoutRequest } from './employee';
import { loadTables } from './tables';
import { loadCategories } from './categories';

function* sagas() {
    yield all([
        loginRequest(),
        logoutRequest(),
        loadTables(),
        loadCategories(),
    ]);
}

export default sagas;
