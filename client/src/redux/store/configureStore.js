import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import transitional from '../enhancers/transitional';
import db from '../enhancers/db';
import localStorage from '../enhancers/localStorage';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(transitional, db, localStorage));
}