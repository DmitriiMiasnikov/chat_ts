import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { headerReducer } from './headerReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
  user: userReducer,
  header: headerReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));