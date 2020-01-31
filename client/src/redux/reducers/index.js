import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import user from './user';
import notification from './notification';
import favoritesReducer from './favorites';
import loadDataReducer from './load-data';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form,
  filterReducer,
  notification,
  user,
  favoritesReducer,
  isFetchingLoadData: loadDataReducer
})
