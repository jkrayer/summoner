/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppContainer from './components/app-container';
import Home from './components/home';
import Encounter from './components/encounter';

import appData from './redux/reducers';

import style from './style/global.css';

// Actions *****
//const ADD_TODO = 'ADD_TODO';

// Action Creator
//function addTodo(text) {
//  return {
//    type: ADD_TODO,
//    text
//  }
//}

// Bound Action Creator
//const boundAddTodo = (text) => dispatch(addTodo(text));

// Reducers *****
//const initialState = {
//  visibilityFilter: 'None',
//  todos: []
//}
//
//function todoApp(state = initialState, action) {
//  switch (action.type) {
//    case ADD_TODO:
//      return Object.assign({}, state, {todos: [...state.todos, {text: action.text, completed: false}]})
//      break;
//    default:
//      return state
//      break;
//  }
//}

// Store *****
let store = createStore(appData);

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path="/encounter" component={Encounter} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('mountpoint'));
