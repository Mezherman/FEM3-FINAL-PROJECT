import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}