import React from 'react';
import logo from './logo.svg';
import './App.css';

const orangeBigText = {
    color : "orange",
    fontSize: "34px"
}

function App() {
  return (
    <div className="App App-green">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: "red", fontFamily: "Impact"}}>
          Edit <code style={orangeBigText}>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
