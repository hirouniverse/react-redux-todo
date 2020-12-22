import { FC } from 'react';
import { TodoControl } from '../../lv1/TodoControl';
import { useDispatch } from 'react-redux';
import { create } from '../../../redux/actions/todo';

export const TodoCreation: FC = () => {
    const dispatch = useDispatch();
    function createHandler() {
        const date = new Date();
        dispatch(create({
            id: date + '',
            title: `todo ${date}`,
            status: false
        }));
    }
    return (
        <div>
            <TodoControl title="create" color="#CCCCCC" onClick={ createHandler }/>
        </div>
    )
}