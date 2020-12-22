import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterDisplay } from '../../lv1/CounterDisplay';
import { CounterButton } from '../../lv1/CounterButton';

import { ICounterState } from '../../../redux/reducers/counter';
import { increment, decrement, incrementWithAmount, decrementWithAmount } from '../../../redux/actions/counter';

type TProps = {
    incrementAmount: number,
    decrementAmount: number
}

export const Counter: FC<TProps> = ({ incrementAmount: incAmount, decrementAmount: decAmount}) => {
    const counter = useSelector<ICounterState, number>(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter Game</h1>
            <CounterDisplay counter={counter} />
            <CounterButton onClick={() => dispatch(increment())} title="increment" />
            <CounterButton onClick={() => dispatch(decrement())} title="decrement" />
            <CounterButton onClick={() => dispatch(incrementWithAmount(incAmount))} title={`increment ${incAmount}`} />
            <CounterButton onClick={() => dispatch(decrementWithAmount(decAmount))} title={`decrement ${decAmount}`} />
        </div>
    )
}