import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
// import formReducer from './form';
import filterReducer from './filter';
import userReducer from './user';
import favoritesReducer from './favorites';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  formReducer,
  filterReducer,
  userReducer,
  favoritesReducer
})