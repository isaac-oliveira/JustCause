import { combineReducers } from 'redux';

import tables from './tables';
import employee from './employee';
import categories from './categories';
import subcategories from './subcategories';
import products from './products';

const reducers = combineReducers({
    tables,
    employee,
    categories,
    subcategories,
    products,
});

export default reducers;
