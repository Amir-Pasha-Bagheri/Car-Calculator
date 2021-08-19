import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from "./history";
import './index.css';
//import Homepage from './App/Home/homepage';
import Compare from './App/Compare/compare'

ReactDOM.render(
  <Router history={history}>
    <Compare />
  </Router>,
  document.getElementById('root')
);