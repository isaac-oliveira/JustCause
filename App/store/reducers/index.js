import { combineReducers } from 'redux';

import tables from './tables';
import employee from './employee';
import categories from './categories';

const reducers = combineReducers({
    tables,
    employee,
    categories,
});

export default reducers;
