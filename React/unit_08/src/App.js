import React, {useState, createElement, createRef} from 'react';
import './App.css';

export default function App() {
  const [li, setLi] = useState(null);

  const cE = createElement;
  const inpRef = createRef();

  const handleButton = () => {
    const currentInput = inpRef.current.value;
    // currentInput !== '' && setLi(cE('li', {}, currentInput));
    currentInput !== '' ? setLi(cE('li', {}, currentInput)) : setLi(null);
  }

  const h1 = cE('h1', {}, 'unit_08');
  const h2 = cE('h2', {
    className: 'text-orange',
  }, 'header 2');
  const p = cE('p', {
    style: {
      color: 'red'
    }
  }, 'this is p');
  const p1 = cE('p', {}, 'hi');
  const p2 = cE('p', {}, 'world');
  const input = cE('input', {
    defaultValue: 55
  });
  const input2 = cE('input', {
    ref: inpRef
  },);
  const button = cE('button', {
    onClick: handleButton,
  }, 'task_7');
  const ul = cE('ul', {
    style: {
      position: 'absolute',
      top: '23px',
      left: '177px'
    }
  }, li);
  const div = cE('div', {
    className: 'text-gray'
  }, p1, p2);
  const div2 = cE('div', {
    className: 'task_7',
    style: {
      position: 'relative',
      marginBottom: '50px'
    }
  }, input2, button, ul);

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {div2}
    </>
  );
}