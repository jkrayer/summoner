import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/5e-SRD-Monsters';
import App from './components/app.jsx';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('mountpoint')
);
