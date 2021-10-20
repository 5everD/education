import React from 'react';
import {useDispatch} from 'react-redux';
import {
  add,
  minus,
  multi,
  division,
  textadd,
} from './app/taskReducerSlice';

export default function In() {
  let task1Input = React.createRef();
  let task1Input2 = React.createRef();
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(add(task1Input.current.value));
  }
  const minusHandler = () => {
    dispatch(minus(task1Input.current.value));
  }
  const multiHandler = () => {
    dispatch(multi(task1Input.current.value));
  }
  const divisionHandler = () => {
    dispatch(division(task1Input.current.value));
  }
  const textHandler = () => {
    dispatch(textadd(task1Input2.current.value));
  }

  return (
    <div>
      <input type="number" ref={task1Input} placeholder="Type some number"/>
      <br/>
      <input type="text" ref={task1Input2} placeholder="Type some text"/>
      <h2>Task 1</h2>
      <button onClick={addHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      <br/>
      <button onClick={multiHandler}>*</button>
      <button onClick={divisionHandler}>/</button>
      <br/>
      <button onClick={textHandler}>text</button>
    </div>
  );
}