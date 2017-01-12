/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './components/c_app';
import HomeContainer from './components/c_home';
import Encounter from './components/encounter';
import appData from './redux/reducers';
import style from './style/global.css';

let store = createStore(appData);

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="/encounter" component={Encounter} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('mountpoint'));
