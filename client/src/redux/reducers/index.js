import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import user from './user';
import notification from './notification';
import favoritesReducer from './favorites';
import carouselReducer from './carousel';
import sortingReducer from './sorting';
import slides from './slides'
// import form from './form';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form: formReducer,
  filterReducer,
  notification,
  user,
  favoritesReducer,
  carouselReducer
  sortingReducer,
  slides
  // form
})
