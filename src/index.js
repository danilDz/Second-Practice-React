import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home'
import CoffeeList from './coffee-list/coffee-list';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <CoffeeList/>
  </React.StrictMode>,
  document.getElementById('root')
);