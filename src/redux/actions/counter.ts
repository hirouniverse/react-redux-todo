export interface Action {
  type: string;
  payload?: {
    amount: number
  };
}

export const increment = (): Action => {
  return {
    type: 'counter/increment'
  }
}

export const decrement = (): Action => {
  return {
    type: 'counter/decrement'
  }
}

export const incrementWithAmount = (amount: number): Action => {
  return {
    type: 'counter/increment/amount',
    payload: {
      amount
    }
  }
}

export const decrementWithAmount = (amount: number): Action => {
  return {
    type: 'counter/decrement/amount',
    payload: {
      amount
    }
  }
}