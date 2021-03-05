import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { chatReducer } from './chatReducer';
import { headerReducer } from './headerReducer';
import { mainSettingsReducer } from './mainSettingsReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
  user: userReducer,
  header: headerReducer,
  chat: chatReducer,
  mainSettings: mainSettingsReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));