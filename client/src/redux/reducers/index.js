import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter'
import userReducer from './user';
import notification from './notification';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form,
  filterReducer,
  userReducer,
  notification,
});
