import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter'

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  // mainCategoriesReducer,
  form: formReducer,
  filterReducer,
});

