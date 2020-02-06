import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import user from './user';
import notification from './notification';
import favoritesReducer from './favorites';
import loadDataReducer from './load-data';
import carouselReducer from './carousel';
import sortingReducer from './sorting';
import slides from './slides'
import passwordForm from './password-form';
import currentProduct from './currentProduct';
import commentsReducer from './commentsReducer';
import logout from './logout';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form: formReducer,
  filterReducer,
  notification,
  user,
  favoritesReducer,
  isFetchingLoadData: loadDataReducer,
  carouselReducer,
  sortingReducer,
  slides,
  passwordForm,
  currentProduct,
  commentsReducer,
  logout
})
