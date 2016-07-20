import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app-container.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import summonerApp from './redux/reducers';
import InitialState from './redux/initial-state';

function LocalStorageInterface(defaultState, storeName) {
  this.defaultState = defaultState;
  this.storeName = storeName;
}

LocalStorageInterface.prototype.getSavedState = function() {
  return JSON.parse(localStorage.getItem(this.storeName)) || this.defaultState;
};

LocalStorageInterface.prototype.setSavedState = function(state) {
  localStorage.setItem(this.storeName, JSON.stringify(state));
};

const LS = new LocalStorageInterface(InitialState, 'summonerApp');

let store = createStore(summonerApp, LS.getSavedState());

store.subscribe(function() {
  LS.setSavedState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('mountpoint')
);
