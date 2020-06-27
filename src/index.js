/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import HomeContainer from './container/home';
import Encounter from './components/encounter';
import Encounters from './components/encounters';
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
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="/encounters" component={Encounters} />
        <Route path="/encounter" component={Encounter} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('mountpoint'));
