import React from 'react';

// Native
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

// Private
import Routes from './routes';
import "./locales";
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
