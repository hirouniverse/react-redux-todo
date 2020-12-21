import { Todo, Action } from '../reducers/todos';

export const create = (item: Todo): Action => {
  return {
    type: 'todo/create/item',
    payload: {
      item: item
    }
  }
}