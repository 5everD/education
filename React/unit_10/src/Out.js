import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectTest,
  selectValue,
} from './app/taskReducerSlice';

export default function Out() {
  const task1 = useSelector(selectValue); // получаем данные из store
  const task10 = useSelector(selectTest); // получаем данные из store
  const dispatch = useDispatch();

  return (
    <div>
      <hr/>
      <h2>Task 1</h2>
      <p>{task1}</p>
      <p>{task10}</p>
    </div>
  );
}