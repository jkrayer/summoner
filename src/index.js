/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './container/app';
import HomeContainer from './container/home';
import Encounter from './components/encounter';
import appData from './redux/reducers';
import { loadState, saveState } from './utilities/helpers';
import { initialState } from './redux/state';
import style from './style/global.css';

const savedState = loadState();

const store = createStore(appData, Object.assign({}, initialState, savedState));

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
