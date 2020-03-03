import { combineReducers } from 'redux';

import tables from './tables';
import employee from './employee';
import categories from './categories';
import subcategories from './subcategories';
import products from './products';
import cart from './cart';
import request from './request';

const reducers = combineReducers({
    tables,
    employee,
    categories,
    subcategories,
    products,
    cart,
    request,
});

export default reducers;
