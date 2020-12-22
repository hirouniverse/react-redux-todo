import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Counter } from './components/lv2/Counter';

import { create } from './redux/actions/todo';

import { TodoState } from './redux/reducers/todos';

export const App: FC = () => {
  const todo: TodoState = useSelector<{todo: TodoState}, any>(state => state.todo)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Counter incrementAmount={2} decrementAmount={2} />
      <h2>Todo</h2>
      <div>
        <button onClick={() => {
          const date = new Date();
          dispatch(create({
            id: date + '',
            title: `todo ${date}`,
            status: false
          }));
        }}>create</button>
        <>
          {
            todo.items.length === 0 ? (
              <div>no item</div>
            ) :
            <>
              {
                todo.items.map(item => {
                  return <div key={ item.id }>{ item.title}</div>
                })
              }
            </>
          }
        </>
      </div>
    </div>
  );
}