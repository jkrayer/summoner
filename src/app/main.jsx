'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app-container.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import summonerApp from './redux/reducers';

let store = createStore(summonerApp);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('mountpoint')
);
