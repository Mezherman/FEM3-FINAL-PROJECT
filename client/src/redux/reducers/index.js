import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import userReducer from './user';
import favoritesReducer from './favorites';
import notification from './notification';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  formReducer,
  filterReducer,
  favoritesReducer,
  userReducer,
  notification,
});
