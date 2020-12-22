import { FC } from 'react';

type TProps = {
    counter: number
}

export const CounterDisplay: FC<TProps> = ({ counter }) => {
    return (
        <div>{ counter}</div>
    )
}