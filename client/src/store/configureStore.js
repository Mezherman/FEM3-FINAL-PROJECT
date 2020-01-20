import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

export default function configureStore() {
  return createStore(rootReducer);
}