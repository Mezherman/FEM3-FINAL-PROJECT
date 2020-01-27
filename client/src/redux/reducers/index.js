import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter'
import userReducer from './user';
import notification from './notification';
import favoritesReducer from './favorites';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form: formReducer,
  filterReducer,
  notification,
  userReducer,
  favoritesReducer
})
