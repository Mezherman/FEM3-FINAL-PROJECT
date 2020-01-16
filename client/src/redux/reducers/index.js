import { combineReducers } from 'redux';
import cart from './cart';
import Categories from './categories';

export default combineReducers({
  cart,
  Categories
})