import { combineReducers } from 'redux';
import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
})