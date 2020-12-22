import { FC } from 'react';
import { Dispatch } from 'redux';

type TProps = {
    title: string,
    color: string,
    onClick?: () => void
}

export const TodoControl: FC<TProps> = ({ title, onClick, color }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={ onClick }>{ title }</button>
    )
}