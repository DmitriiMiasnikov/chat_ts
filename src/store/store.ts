import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { userReducer } from './userReducer';

const reducers = combineReducers({
  user: userReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));