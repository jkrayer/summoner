/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/app';

import Home from './components/home';
import Encounter from './components/encounter';

import style from './style/global.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/encounter" component={Encounter} />
    </Route>
  </Router>
), document.getElementById('mountpoint'));
