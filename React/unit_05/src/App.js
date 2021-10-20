import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [st3, setSt3] = useState('');
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState(0);
  const [st6, setSt6] = useState(7);
  const [st7, setSt7] = useState('rgb(255, 165, 0)');
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState(50);
  const [st10, setSt10] = useState([]);

  const task5Ref = React.createRef();
  const task6Ref = React.createRef();
  const task7Ref = React.createRef();
  const task10Ref = React.createRef();

  function randomInt(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + b
  }
  function randomBG() {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
  }

  // function task1() {

  // }
  // function task2() {

  // }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let currentCount = st4;
    currentCount++;
    setSt4(currentCount);
  }
  function task5() {
    setSt5(task5Ref.current.checked ? task5Ref.current.value : 0);
  }
  function task6() {
    setSt6(task6Ref.current.value);
  }
  function task7() {
    setSt7(randomBG());
    task7Ref.current.style.background = st7;
  }
  function task8(event) {
    setSt8(event.charCode >= 47 && event.charCode <= 57 ? st8 + '1' : st8 + '0');
  }
  function task9(event) {
    setSt9(event.target.value);
  }
  function task10() {
    let currentValue = task10Ref.current.value;
    let newArray = [...st10, currentValue]
    setSt10(newArray);
  }

  return (
    <>
      {/* <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" />
        <button className="task-1">Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2"></div>
        <div>{st2}</div>
      </section> */}
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={task5Ref} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={task6Ref}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={task7Ref}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={task10Ref}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
