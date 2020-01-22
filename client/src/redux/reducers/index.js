import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import { categoriesReducer, mainCategoriesReducer } from './categories';
import productsReducer from './products';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  mainCategoriesReducer,
  form: formReducer
});
