import { FC } from 'react';
import {TodoItem } from '../../lv1/TodoItem';
import { TodoControl } from '../../lv1/TodoControl';
import { Todo } from '../../../redux/reducers/todos';

type TProps = {
    items: Todo[]
}
export const TodoList: FC<TProps> = ({ items }) => {
    return (
        <div>
            {
                items.length === 0 ? (
                    <div>no item</div>
                ) :
                <>
                    {
                        items.map(item => (
                            <span>
                                <TodoItem key={item.id} title={item.title} status={item.status} />
                                <TodoControl key={`${item.id}_delete_control`} title="delete" color="red" />
                                <TodoControl key={`${item.id}_done_control`} title="done" color="blue" />
                            </span>
                        ))
                    }
                </>
            }
        </div>
    );
}