export interface Todo {
  id: string,
  title: string;
  status: boolean;
}

export interface TodoState {
  items: Array<Todo>,
  filter: string
}

export interface Action {
  type: string,
  payload: {
    item?: Todo,
    filter?: string
  }
}

export const todoReducer = (state: TodoState = {items: [], filter: 'all'}, action: Action): TodoState => {
  switch (action.type) {
    case 'todo/create/item':
      if (!action.payload || !action.payload.item) {
        return state;
      }
      return {
        items: [
          ...state.items,
          action.payload.item
        ],
        filter: state.filter
      };
    case 'todo/delete/item':
      if (!action.payload || !action.payload.item) {
        return state;
      }
      return {
        items: state.items.filter(item => {
          return item.id !== action.payload.item?.id;
        }),
        filter: state.filter
      }
    case 'todo/change/item/title':
    case 'todo/change/item/status':
      if (!action.payload || !action.payload.item) {
        return state;
      }
      return {
        items: state.items.filter(item => {
          if (item.id === action.payload.item?.id) {
            return action.payload.item;
          }
          return item;
        }),
        filter: state.filter
      }
    case 'todo/change/filter':
      if (!action.payload || !action.payload.filter) {
        return state;
      }
      return {
        items: state.items,
        filter: action.payload.filter
      }
    default:
      return state;
  }
}