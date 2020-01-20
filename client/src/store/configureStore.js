import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers';
import { localStorage } from '../redux/enhancers/localStorage';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState)
}