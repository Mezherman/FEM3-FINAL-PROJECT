import { combineReducers } from 'redux';
import cart from './cart';
import { categoriesReducer, mainCategoriesReducer } from './categories';
import productsReducer from './products';
import formReducer from './form';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  mainCategoriesReducer,
  formReducer
})
