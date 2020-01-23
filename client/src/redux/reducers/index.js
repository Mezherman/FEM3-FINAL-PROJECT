import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import formReducer from './form';
import filterReducer from './filter'

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  mainCategoriesReducer,
  form: formReducer,
  formReducer,
  filterReducer,
});

