/* global document:true */
import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/5e-SRD-Monsters';
import App from './components/app';

ReactDOM.render(
  React.createElement(App, { data }, null),
  document.getElementById('mountpoint')
);
