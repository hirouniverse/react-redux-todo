import { FC } from 'react';

type TProps = {
    title: string,
    status: boolean
}

export const TodoItem: FC<TProps> = ({ title, status }) => {
    return (
        <div>
            { status
                ? (<h5 style={{ textDecoration: 'line-through' }}>{ title }</h5>)
                : (<h5>{ title }</h5>)
            }
        </div>
    )
}