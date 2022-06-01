/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const count = document.querySelector("#count");

count.innerText = 0;

/* Reducer = An Only Funtion that Can Modify Data */
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "plus": return state + 1;
    case "minus": return state - 1;
    default: return state;
  }
  /*
  if (action.type === "plus") return state + 1; 
  else if (action.type === "minus") return state - 1;
  else return state;
  */
};

const store = createStore(reducer);

const onChange = () => {
  count.innerText = store.getState();
}

plus.addEventListener("click", () => store.dispatch({ type: "plus" }));
minus.addEventListener("click", () => store.dispatch({ type: "minus" }));

store.subscribe(onChange);