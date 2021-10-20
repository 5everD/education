import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  let count4 = 0;
  const task6Change = React.createRef();
  const task7Color = React.createRef();
  const task8key = React.createRef();
  const input10 = React.createRef();

  const [output, setOutput] = useState('');
  const [output5, setOutput5] = useState('0');
  const [outPutNum, setOutPutNum] = useState('');
  const [outPutRange, setOutPutRange] = useState('50');

  function randomInt(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + b
  }
  function randomBG() {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
  }

  function task1() {
    console.log('task2');
  }
  function task2(event) {
    event.target.className += ' active';
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4 += 1;
    console.log(count4);
  }
  function task5(event) {
    setOutput5(event.target.checked ? event.target.value : 0);
  }
  function task6() {
    setOutput(task6Change.current.value);
  }
  function task7() {
    task7Color.current.style.background = randomBG();
  }
  function task8(event) {
    setOutPutNum(event.charCode >= 47 && event.charCode <= 57 ?
      outPutNum + '1' : outPutNum + '0');
  }
  function task9(event) {
    setOutPutRange(event.target.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+input10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div className="out-5">{output5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={task6Change}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={task7Color}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={task8key}></input>
        <div className="out-8">{outPutNum}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{outPutRange}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={input10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
