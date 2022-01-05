import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calc from './Calc';
import reportWebVitals from './reportWebVitals';



function Tick() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );  
}

function tickToc()
{
  const element = <Tick></Tick>
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tickToc, 1000);