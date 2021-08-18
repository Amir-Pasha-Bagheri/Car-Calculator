import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from "./history";
import './index.css';
import Homepage from './App/Home/homapage';;

ReactDOM.render(
  <Router history={history}>
    <Homepage />
  </Router>,
  document.getElementById('root')
);