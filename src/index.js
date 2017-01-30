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
import { loadState, saveState } from './utilities/helpers';
import style from './style/global.css';

const savedState = loadState();

const store = createStore(appData, savedState);

store.subscribe(() => {
  saveState({
    encounter: store.getState().encounter
  });
});

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
