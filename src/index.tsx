import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'antd/dist/antd.css'
import "./locales";
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
