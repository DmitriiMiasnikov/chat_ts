import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { chatReducer } from './chatReducer';
import { headerReducer } from './headerReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { messageReducer } from './messageReducer';

const reducers = combineReducers({
  user: userReducer,
  header: headerReducer,
  chat: chatReducer,
  auth: authReducer,
  message: messageReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));