import { FC, useRef } from 'react';
import { TodoControl } from '../../lv1/TodoControl';
import { useDispatch } from 'react-redux';
import { create } from '../../../redux/actions/todo';

export const TodoCreation: FC = () => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    function createHandler() {
        if (!ref.current) return;

        const value = ref.current.value;
        if (value === '') return;

        dispatch(create({
            id: Date.now().toString(),
            title: value,
            status: false
        }));

        ref.current.value = '';
    }
    return (
        <div>
            <input type="text" ref={ ref } />
            <TodoControl title="create" color="#CCCCCC" onClick={ createHandler }/>
        </div>
    )
}