import { combineReducers } from 'redux';
import cart from './cart';
import { categoriesReducer, mainCategoriesReducer } from './categories';
import productsReducer from './products';
import filterReducer from './filter'

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  mainCategoriesReducer,
  filterReducer
})