import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import summonerApp from '../redux/reducers';
import "../css/style";

let store = createStore(summonerApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mountpoint')
);
