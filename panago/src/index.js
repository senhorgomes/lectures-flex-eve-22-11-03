import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import PizzaMaker from './components/PizzaMaker';
// import PizzaOven from './components/PizzaOven';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PizzaMaker/>
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
