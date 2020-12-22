import { Action } from '../actions/counter'

export type CounterState = number;
export interface ICounterState {
  counter: number
}

export const counterReducer = (state: CounterState = 0, action: Action) => {
  switch (action.type) {
    case 'counter/increment':
      return state + 1;
    case 'counter/decrement':
      return state - 1;
    case 'counter/increment/amount':
      if (action.payload && action.payload.amount) {
        return state + action.payload.amount;
      }
      return state;
    case 'counter/decrement/amount':
      if (action.payload && action.payload.amount) {
        return state - action.payload.amount;
      }
      return state;
    default:
      return state;
  }
}