import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Counter } from './components/lv2/Counter';
import { TodoList } from './components/lv2/TodoList';
import { TodoCreation } from './components/lv2/TodoCreation'


import { TodoState } from './redux/reducers/todos';

export const App: FC = () => {
  const todo: TodoState = useSelector<{todo: TodoState}, any>(state => state.todo)
  return (
    <div className="App">
      <Counter incrementAmount={2} decrementAmount={2} />
      <h2>Todo</h2>
      <div>
        <>
          <TodoCreation />
          <TodoList items={todo.items} />
        </>
      </div>
    </div>
  );
}