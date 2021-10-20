import React from 'react';
import {  useDispatch } from 'react-redux';
import {
    add,
    minus,
} from './app/taskReducerSlice';

export default function In() {
    let task1Input = React.createRef();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    }
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    }

    return (
        <div>
            <input type="number" ref={task1Input}/>
            <h2>Task 1</h2>
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </div>
    );
}