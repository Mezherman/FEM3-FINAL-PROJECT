import { combineReducers } from 'redux';
import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import formReducer from './form';
import filterReducer from './filter';
import favoritesReducer from  './favorites'

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  formReducer,
  filterReducer,
  favoritesReducer
})