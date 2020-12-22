import { FC } from 'react';
import { Action } from 'redux';

type TProps = {
    onClick: () => Action,
    title: string
}

export const CounterButton: FC<TProps> = ({ title, onClick}) => {
    return (
        <button onClick={onClick}>{ title }</button>
    )
}