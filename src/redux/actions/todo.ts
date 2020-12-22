import { Todo, Action } from '../reducers/todos';

export const create = (item: Todo): Action => {
  return {
    type: 'todo/create/item',
    payload: {
      item: item
    }
  }
}

export const deleteActionCreator = (item: Todo): Action => {
  return {
    type: 'todo/delete/item',
    payload: {
      item: item
    }
  }
}

export const changeStatusActionCreator = (item: Todo): Action => {
  return {
    type: 'todo/change/item/status',
    payload: {
      item: item
    }
  }
}