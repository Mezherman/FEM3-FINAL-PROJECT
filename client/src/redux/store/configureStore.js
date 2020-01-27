import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import transitional from '../enhancers/transitional';
import db from '../enhancers/db';
import localStorage from '../enhancers/localStorage';

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(transitional, db, localStorage, thunk)));
}
