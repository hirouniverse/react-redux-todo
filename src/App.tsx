import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementWithAmount, decrementWithAmount } from './redux/actions/counter';
import { create } from './redux/actions/todo';

import { TodoState } from './redux/reducers/todos';

export const App: FC = () => {
  const counter = useSelector<{ counter: number }, any>(state => state.counter);
  const todo: TodoState = useSelector<{todo: TodoState}, any>(state => state.todo)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World.</h1>
      <h2>{ counter }</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementWithAmount(2))}>increment 2</button>
        <button onClick={() => dispatch(decrementWithAmount(2))}>decrement 2</button>
      </div>
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