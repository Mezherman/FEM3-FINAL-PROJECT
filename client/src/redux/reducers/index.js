import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import userReducer from './user';
import favoritesReducer from './favorites';
import tempLogger from './test';

export default combineReducers({
  tempLogger,
  cart,
  categoriesReducer,
  productsReducer,
  formReducer,
  filterReducer,
  favoritesReducer,
  userReducer
})