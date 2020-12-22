import { FC } from 'react';
import {TodoItem } from '../../lv1/TodoItem';
import { TodoControl } from '../../lv1/TodoControl';
import { Todo } from '../../../redux/reducers/todos';
import { useDispatch } from 'react-redux';
import { deleteActionCreator, changeStatusActionCreator } from '../../../redux/actions/todo';

type TProps = {
    items: Todo[]
}
export const TodoList: FC<TProps> = ({ items }) => {
    const dispatch = useDispatch();
    function deleteTodoItem(item: Todo) {
        dispatch(deleteActionCreator(item));
    }
    function changeStatus(item: Todo) {
        dispatch(changeStatusActionCreator(item));
    }
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
                                <TodoControl key={`${item.id}_delete_control`} title="delete" color="red" onClick={ () => deleteTodoItem(item) }/>
                                <TodoControl key={`${item.id}_done_control`} title="done" color="blue" onClick={() => changeStatus(item)}/>
                            </span>
                        ))
                    }
                </>
            }
        </div>
    );
}