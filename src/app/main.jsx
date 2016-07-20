import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app-container.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import summonerApp from './redux/reducers';
import InitialState from './redux/initial-state';

// initialData = localstorage.get(dataID) || {};
// let store = createStore(summonerApp, initialData, middleware());
// function middleware() {
//   on each event localstorage.save()
// }

// might be the proper place to set initial data, rather than app-container
let store = createStore(summonerApp, InitialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('mountpoint')
);
