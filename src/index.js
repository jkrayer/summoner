/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import Home from './components/home';
import Encounter from './components/encounter';
import appStore from './redux/reducers';

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
//let store = createStore(todoApp);


// Connect *****
//const mapStateToProps = (state) => {
//  return state;
//}
//const ConApp = connect(mapStateToProps)(App);

//ReactDOM.render(
//  <Provider store={store}>
//    <ConApp />
//  </Provider>
//  , document.getElementById('mountpoint')
//);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/encounter" component={Encounter} />
    </Route>
  </Router>
), document.getElementById('mountpoint'));
