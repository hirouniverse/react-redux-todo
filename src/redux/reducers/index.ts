import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { todoReducer } from './todos';

export const reducers = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});