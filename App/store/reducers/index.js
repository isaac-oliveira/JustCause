import { combineReducers } from 'redux';

import tables from './tables';
import employee from './employee';
import categories from './categories';
import products from './products';

const reducers = combineReducers({
    tables,
    employee,
    categories,
    products,
});

export default reducers;
