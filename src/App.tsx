import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementWithAmount, decrementWithAmount } from './redux/actions/counter';

export const App: FC = () => {
  const counter = useSelector<{ counter: number}, any>(state => state.counter);
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
    </div>
  );
}