import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calc from './Calc';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { msalConfig } from "./authConfig"
import { PublicClientApplication } from "@azure/msal-browser";

export const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.render(
  <BrowserRouter>
    <App msalInstance={msalInstance} />
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
